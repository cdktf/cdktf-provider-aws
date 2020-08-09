// https://www.terraform.io/docs/providers/aws/r/lb_listener.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "certificate_arn": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "load_balancer_arn": {
        "type": "string",
        "required": true
      },
      "port": {
        "type": "number",
        "required": true
      },
      "protocol": {
        "type": "string",
        "optional": true
      },
      "ssl_policy": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "default_action": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "order": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "target_group_arn": {
              "type": "string",
              "optional": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "authenticate_cognito": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "authentication_request_extra_params": {
                    "type": [
                      "map",
                      "string"
                    ],
                    "optional": true
                  },
                  "on_unauthenticated_request": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "scope": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "session_cookie_name": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "session_timeout": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "user_pool_arn": {
                    "type": "string",
                    "required": true
                  },
                  "user_pool_client_id": {
                    "type": "string",
                    "required": true
                  },
                  "user_pool_domain": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "authenticate_oidc": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "authentication_request_extra_params": {
                    "type": [
                      "map",
                      "string"
                    ],
                    "optional": true
                  },
                  "authorization_endpoint": {
                    "type": "string",
                    "required": true
                  },
                  "client_id": {
                    "type": "string",
                    "required": true
                  },
                  "client_secret": {
                    "type": "string",
                    "required": true,
                    "sensitive": true
                  },
                  "issuer": {
                    "type": "string",
                    "required": true
                  },
                  "on_unauthenticated_request": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "scope": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "session_cookie_name": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "session_timeout": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "token_endpoint": {
                    "type": "string",
                    "required": true
                  },
                  "user_info_endpoint": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "fixed_response": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "content_type": {
                    "type": "string",
                    "required": true
                  },
                  "message_body": {
                    "type": "string",
                    "optional": true
                  },
                  "status_code": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            },
            "forward": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "stickiness": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "duration": {
                          "type": "number",
                          "required": true
                        },
                        "enabled": {
                          "type": "bool",
                          "optional": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "target_group": {
                    "nesting_mode": "set",
                    "block": {
                      "attributes": {
                        "arn": {
                          "type": "string",
                          "required": true
                        },
                        "weight": {
                          "type": "number",
                          "optional": true
                        }
                      }
                    },
                    "min_items": 2,
                    "max_items": 5
                  }
                }
              },
              "max_items": 1
            },
            "redirect": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "host": {
                    "type": "string",
                    "optional": true
                  },
                  "path": {
                    "type": "string",
                    "optional": true
                  },
                  "port": {
                    "type": "string",
                    "optional": true
                  },
                  "protocol": {
                    "type": "string",
                    "optional": true
                  },
                  "query": {
                    "type": "string",
                    "optional": true
                  },
                  "status_code": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "min_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "read": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LbListenerConfig extends TerraformMetaArguments {
  readonly certificateArn?: string;
  readonly loadBalancerArn: string;
  readonly port: number;
  readonly protocol?: string;
  readonly sslPolicy?: string;
  /** default_action block */
  readonly defaultAction: LbListenerDefaultAction[];
  /** timeouts block */
  readonly timeouts?: LbListenerTimeouts;
}
export interface LbListenerDefaultActionAuthenticateCognito {
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  readonly onUnauthenticatedRequest?: string;
  readonly scope?: string;
  readonly sessionCookieName?: string;
  readonly sessionTimeout?: number;
  readonly userPoolArn: string;
  readonly userPoolClientId: string;
  readonly userPoolDomain: string;
}
export interface LbListenerDefaultActionAuthenticateOidc {
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  readonly authorizationEndpoint: string;
  readonly clientId: string;
  readonly clientSecret: string;
  readonly issuer: string;
  readonly onUnauthenticatedRequest?: string;
  readonly scope?: string;
  readonly sessionCookieName?: string;
  readonly sessionTimeout?: number;
  readonly tokenEndpoint: string;
  readonly userInfoEndpoint: string;
}
export interface LbListenerDefaultActionFixedResponse {
  readonly contentType: string;
  readonly messageBody?: string;
  readonly statusCode?: string;
}
export interface LbListenerDefaultActionForwardStickiness {
  readonly duration: number;
  readonly enabled?: boolean;
}
export interface LbListenerDefaultActionForwardTargetGroup {
  readonly arn: string;
  readonly weight?: number;
}
export interface LbListenerDefaultActionForward {
  /** stickiness block */
  readonly stickiness?: LbListenerDefaultActionForwardStickiness[];
  /** target_group block */
  readonly targetGroup: LbListenerDefaultActionForwardTargetGroup[];
}
export interface LbListenerDefaultActionRedirect {
  readonly host?: string;
  readonly path?: string;
  readonly port?: string;
  readonly protocol?: string;
  readonly query?: string;
  readonly statusCode: string;
}
export interface LbListenerDefaultAction {
  readonly order?: number;
  readonly targetGroupArn?: string;
  readonly type: string;
  /** authenticate_cognito block */
  readonly authenticateCognito?: LbListenerDefaultActionAuthenticateCognito[];
  /** authenticate_oidc block */
  readonly authenticateOidc?: LbListenerDefaultActionAuthenticateOidc[];
  /** fixed_response block */
  readonly fixedResponse?: LbListenerDefaultActionFixedResponse[];
  /** forward block */
  readonly forward?: LbListenerDefaultActionForward[];
  /** redirect block */
  readonly redirect?: LbListenerDefaultActionRedirect[];
}
export interface LbListenerTimeouts {
  readonly read?: string;
}

// Resource

export class LbListener extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_listener',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateArn = config.certificateArn;
    this._loadBalancerArn = config.loadBalancerArn;
    this._port = config.port;
    this._protocol = config.protocol;
    this._sslPolicy = config.sslPolicy;
    this._defaultAction = config.defaultAction;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string;
  public get certificateArn() {
    return this._certificateArn;
  }
  public set certificateArn(value: string | undefined) {
    this._certificateArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_arn - computed: false, optional: false, required: true
  private _loadBalancerArn: string;
  public get loadBalancerArn() {
    return this._loadBalancerArn;
  }
  public set loadBalancerArn(value: string) {
    this._loadBalancerArn = value;
  }

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this._port;
  }
  public set port(value: number) {
    this._port = value;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }

  // ssl_policy - computed: true, optional: true, required: false
  private _sslPolicy?: string;
  public get sslPolicy() {
    return this._sslPolicy ?? this.getStringAttribute('ssl_policy');
  }
  public set sslPolicy(value: string | undefined) {
    this._sslPolicy = value;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction: LbListenerDefaultAction[];
  public get defaultAction() {
    return this._defaultAction;
  }
  public set defaultAction(value: LbListenerDefaultAction[]) {
    this._defaultAction = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbListenerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LbListenerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: this._certificateArn,
      load_balancer_arn: this._loadBalancerArn,
      port: this._port,
      protocol: this._protocol,
      ssl_policy: this._sslPolicy,
      default_action: this._defaultAction,
      timeouts: this._timeouts,
    };
  }
}

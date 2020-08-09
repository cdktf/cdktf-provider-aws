// https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "after": {
        "type": "string",
        "optional": true
      },
      "enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "recipients": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "rule_set_name": {
        "type": "string",
        "required": true
      },
      "scan_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "tls_policy": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "add_header_action": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "header_name": {
              "type": "string",
              "required": true
            },
            "header_value": {
              "type": "string",
              "required": true
            },
            "position": {
              "type": "number",
              "required": true
            }
          }
        }
      },
      "bounce_action": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "message": {
              "type": "string",
              "required": true
            },
            "position": {
              "type": "number",
              "required": true
            },
            "sender": {
              "type": "string",
              "required": true
            },
            "smtp_reply_code": {
              "type": "string",
              "required": true
            },
            "status_code": {
              "type": "string",
              "optional": true
            },
            "topic_arn": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "lambda_action": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "function_arn": {
              "type": "string",
              "required": true
            },
            "invocation_type": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "position": {
              "type": "number",
              "required": true
            },
            "topic_arn": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "s3_action": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "bucket_name": {
              "type": "string",
              "required": true
            },
            "kms_key_arn": {
              "type": "string",
              "optional": true
            },
            "object_key_prefix": {
              "type": "string",
              "optional": true
            },
            "position": {
              "type": "number",
              "required": true
            },
            "topic_arn": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "sns_action": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "position": {
              "type": "number",
              "required": true
            },
            "topic_arn": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "stop_action": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "position": {
              "type": "number",
              "required": true
            },
            "scope": {
              "type": "string",
              "required": true
            },
            "topic_arn": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "workmail_action": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "organization_arn": {
              "type": "string",
              "required": true
            },
            "position": {
              "type": "number",
              "required": true
            },
            "topic_arn": {
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

export interface SesReceiptRuleConfig extends TerraformMetaArguments {
  readonly after?: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly recipients?: string[];
  readonly ruleSetName: string;
  readonly scanEnabled?: boolean;
  readonly tlsPolicy?: string;
  /** add_header_action block */
  readonly addHeaderAction?: SesReceiptRuleAddHeaderAction[];
  /** bounce_action block */
  readonly bounceAction?: SesReceiptRuleBounceAction[];
  /** lambda_action block */
  readonly lambdaAction?: SesReceiptRuleLambdaAction[];
  /** s3_action block */
  readonly s3Action?: SesReceiptRuleS3Action[];
  /** sns_action block */
  readonly snsAction?: SesReceiptRuleSnsAction[];
  /** stop_action block */
  readonly stopAction?: SesReceiptRuleStopAction[];
  /** workmail_action block */
  readonly workmailAction?: SesReceiptRuleWorkmailAction[];
}
export interface SesReceiptRuleAddHeaderAction {
  readonly headerName: string;
  readonly headerValue: string;
  readonly position: number;
}
export interface SesReceiptRuleBounceAction {
  readonly message: string;
  readonly position: number;
  readonly sender: string;
  readonly smtpReplyCode: string;
  readonly statusCode?: string;
  readonly topicArn?: string;
}
export interface SesReceiptRuleLambdaAction {
  readonly functionArn: string;
  readonly invocationType?: string;
  readonly position: number;
  readonly topicArn?: string;
}
export interface SesReceiptRuleS3Action {
  readonly bucketName: string;
  readonly kmsKeyArn?: string;
  readonly objectKeyPrefix?: string;
  readonly position: number;
  readonly topicArn?: string;
}
export interface SesReceiptRuleSnsAction {
  readonly position: number;
  readonly topicArn: string;
}
export interface SesReceiptRuleStopAction {
  readonly position: number;
  readonly scope: string;
  readonly topicArn?: string;
}
export interface SesReceiptRuleWorkmailAction {
  readonly organizationArn: string;
  readonly position: number;
  readonly topicArn?: string;
}

// Resource

export class SesReceiptRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SesReceiptRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_receipt_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._after = config.after;
    this._enabled = config.enabled;
    this._name = config.name;
    this._recipients = config.recipients;
    this._ruleSetName = config.ruleSetName;
    this._scanEnabled = config.scanEnabled;
    this._tlsPolicy = config.tlsPolicy;
    this._addHeaderAction = config.addHeaderAction;
    this._bounceAction = config.bounceAction;
    this._lambdaAction = config.lambdaAction;
    this._s3Action = config.s3Action;
    this._snsAction = config.snsAction;
    this._stopAction = config.stopAction;
    this._workmailAction = config.workmailAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after - computed: false, optional: true, required: false
  private _after?: string;
  public get after() {
    return this._after;
  }
  public set after(value: string | undefined) {
    this._after = value;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled ?? this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[];
  public get recipients() {
    return this._recipients;
  }
  public set recipients(value: string[] | undefined) {
    this._recipients = value;
  }

  // rule_set_name - computed: false, optional: false, required: true
  private _ruleSetName: string;
  public get ruleSetName() {
    return this._ruleSetName;
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }

  // scan_enabled - computed: true, optional: true, required: false
  private _scanEnabled?: boolean;
  public get scanEnabled() {
    return this._scanEnabled ?? this.getBooleanAttribute('scan_enabled');
  }
  public set scanEnabled(value: boolean | undefined) {
    this._scanEnabled = value;
  }

  // tls_policy - computed: true, optional: true, required: false
  private _tlsPolicy?: string;
  public get tlsPolicy() {
    return this._tlsPolicy ?? this.getStringAttribute('tls_policy');
  }
  public set tlsPolicy(value: string | undefined) {
    this._tlsPolicy = value;
  }

  // add_header_action - computed: false, optional: true, required: false
  private _addHeaderAction?: SesReceiptRuleAddHeaderAction[];
  public get addHeaderAction() {
    return this._addHeaderAction;
  }
  public set addHeaderAction(value: SesReceiptRuleAddHeaderAction[] | undefined) {
    this._addHeaderAction = value;
  }

  // bounce_action - computed: false, optional: true, required: false
  private _bounceAction?: SesReceiptRuleBounceAction[];
  public get bounceAction() {
    return this._bounceAction;
  }
  public set bounceAction(value: SesReceiptRuleBounceAction[] | undefined) {
    this._bounceAction = value;
  }

  // lambda_action - computed: false, optional: true, required: false
  private _lambdaAction?: SesReceiptRuleLambdaAction[];
  public get lambdaAction() {
    return this._lambdaAction;
  }
  public set lambdaAction(value: SesReceiptRuleLambdaAction[] | undefined) {
    this._lambdaAction = value;
  }

  // s3_action - computed: false, optional: true, required: false
  private _s3Action?: SesReceiptRuleS3Action[];
  public get s3Action() {
    return this._s3Action;
  }
  public set s3Action(value: SesReceiptRuleS3Action[] | undefined) {
    this._s3Action = value;
  }

  // sns_action - computed: false, optional: true, required: false
  private _snsAction?: SesReceiptRuleSnsAction[];
  public get snsAction() {
    return this._snsAction;
  }
  public set snsAction(value: SesReceiptRuleSnsAction[] | undefined) {
    this._snsAction = value;
  }

  // stop_action - computed: false, optional: true, required: false
  private _stopAction?: SesReceiptRuleStopAction[];
  public get stopAction() {
    return this._stopAction;
  }
  public set stopAction(value: SesReceiptRuleStopAction[] | undefined) {
    this._stopAction = value;
  }

  // workmail_action - computed: false, optional: true, required: false
  private _workmailAction?: SesReceiptRuleWorkmailAction[];
  public get workmailAction() {
    return this._workmailAction;
  }
  public set workmailAction(value: SesReceiptRuleWorkmailAction[] | undefined) {
    this._workmailAction = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      after: this._after,
      enabled: this._enabled,
      name: this._name,
      recipients: this._recipients,
      rule_set_name: this._ruleSetName,
      scan_enabled: this._scanEnabled,
      tls_policy: this._tlsPolicy,
      add_header_action: this._addHeaderAction,
      bounce_action: this._bounceAction,
      lambda_action: this._lambdaAction,
      s3_action: this._s3Action,
      sns_action: this._snsAction,
      stop_action: this._stopAction,
      workmail_action: this._workmailAction,
    };
  }
}

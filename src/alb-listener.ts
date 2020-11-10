// https://www.terraform.io/docs/providers/aws/r/alb_listener.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AlbListenerConfig extends TerraformMetaArguments {
  readonly certificateArn?: string;
  readonly loadBalancerArn: string;
  readonly port: number;
  readonly protocol?: string;
  readonly sslPolicy?: string;
  /** default_action block */
  readonly defaultAction: AlbListenerDefaultAction[];
  /** timeouts block */
  readonly timeouts?: AlbListenerTimeouts;
}
export interface AlbListenerDefaultActionAuthenticateCognito {
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  readonly onUnauthenticatedRequest?: string;
  readonly scope?: string;
  readonly sessionCookieName?: string;
  readonly sessionTimeout?: number;
  readonly userPoolArn: string;
  readonly userPoolClientId: string;
  readonly userPoolDomain: string;
}
export interface AlbListenerDefaultActionAuthenticateOidc {
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
export interface AlbListenerDefaultActionFixedResponse {
  readonly contentType: string;
  readonly messageBody?: string;
  readonly statusCode?: string;
}
export interface AlbListenerDefaultActionForwardStickiness {
  readonly duration: number;
  readonly enabled?: boolean;
}
export interface AlbListenerDefaultActionForwardTargetGroup {
  readonly arn: string;
  readonly weight?: number;
}
export interface AlbListenerDefaultActionForward {
  /** stickiness block */
  readonly stickiness?: AlbListenerDefaultActionForwardStickiness[];
  /** target_group block */
  readonly targetGroup: AlbListenerDefaultActionForwardTargetGroup[];
}
export interface AlbListenerDefaultActionRedirect {
  readonly host?: string;
  readonly path?: string;
  readonly port?: string;
  readonly protocol?: string;
  readonly query?: string;
  readonly statusCode: string;
}
export interface AlbListenerDefaultAction {
  readonly order?: number;
  readonly targetGroupArn?: string;
  readonly type: string;
  /** authenticate_cognito block */
  readonly authenticateCognito?: AlbListenerDefaultActionAuthenticateCognito[];
  /** authenticate_oidc block */
  readonly authenticateOidc?: AlbListenerDefaultActionAuthenticateOidc[];
  /** fixed_response block */
  readonly fixedResponse?: AlbListenerDefaultActionFixedResponse[];
  /** forward block */
  readonly forward?: AlbListenerDefaultActionForward[];
  /** redirect block */
  readonly redirect?: AlbListenerDefaultActionRedirect[];
}
export interface AlbListenerTimeouts {
  readonly read?: string;
}

// Resource

export class AlbListener extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AlbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_alb_listener',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string;
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string ) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_arn - computed: false, optional: false, required: true
  private _loadBalancerArn: string;
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }
  public set loadBalancerArn(value: string) {
    this._loadBalancerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerArnInput() {
    return this._loadBalancerArn
  }

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string ) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // ssl_policy - computed: true, optional: true, required: false
  private _sslPolicy?: string;
  public get sslPolicy() {
    return this.getStringAttribute('ssl_policy');
  }
  public set sslPolicy(value: string) {
    this._sslPolicy = value;
  }
  public resetSslPolicy() {
    this._sslPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPolicyInput() {
    return this._sslPolicy
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction: AlbListenerDefaultAction[];
  public get defaultAction() {
    return this.interpolationForAttribute('default_action') as any;
  }
  public set defaultAction(value: AlbListenerDefaultAction[]) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AlbListenerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AlbListenerTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
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

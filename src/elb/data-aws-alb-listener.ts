// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Load Balancer
*/
export interface DataAwsAlbListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html#load_balancer_arn DataAwsAlbListener#load_balancer_arn}
  */
  readonly loadBalancerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html#port DataAwsAlbListener#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html#tags DataAwsAlbListener#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataAwsAlbListenerDefaultActionAuthenticateCognito extends cdktf.ComplexComputedList {

  // authentication_request_extra_params - computed: true, optional: false, required: false
  public get authenticationRequestExtraParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('authentication_request_extra_params') as any;
  }

  // on_unauthenticated_request - computed: true, optional: false, required: false
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // session_cookie_name - computed: true, optional: false, required: false
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // user_pool_arn - computed: true, optional: false, required: false
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }

  // user_pool_client_id - computed: true, optional: false, required: false
  public get userPoolClientId() {
    return this.getStringAttribute('user_pool_client_id');
  }

  // user_pool_domain - computed: true, optional: false, required: false
  public get userPoolDomain() {
    return this.getStringAttribute('user_pool_domain');
  }
}
export class DataAwsAlbListenerDefaultActionAuthenticateOidc extends cdktf.ComplexComputedList {

  // authentication_request_extra_params - computed: true, optional: false, required: false
  public get authenticationRequestExtraParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('authentication_request_extra_params') as any;
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // on_unauthenticated_request - computed: true, optional: false, required: false
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // session_cookie_name - computed: true, optional: false, required: false
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }

  // user_info_endpoint - computed: true, optional: false, required: false
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
}
export class DataAwsAlbListenerDefaultActionFixedResponse extends cdktf.ComplexComputedList {

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // message_body - computed: true, optional: false, required: false
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}
export class DataAwsAlbListenerDefaultActionForwardStickiness extends cdktf.ComplexComputedList {

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
}
export class DataAwsAlbListenerDefaultActionForwardTargetGroup extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export class DataAwsAlbListenerDefaultActionForward extends cdktf.ComplexComputedList {

  // stickiness - computed: true, optional: false, required: false
  public get stickiness() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('stickiness') as any;
  }

  // target_group - computed: true, optional: false, required: false
  public get targetGroup() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('target_group') as any;
  }
}
export class DataAwsAlbListenerDefaultActionRedirect extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}
export class DataAwsAlbListenerDefaultAction extends cdktf.ComplexComputedList {

  // authenticate_cognito - computed: true, optional: false, required: false
  public get authenticateCognito() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('authenticate_cognito') as any;
  }

  // authenticate_oidc - computed: true, optional: false, required: false
  public get authenticateOidc() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('authenticate_oidc') as any;
  }

  // fixed_response - computed: true, optional: false, required: false
  public get fixedResponse() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('fixed_response') as any;
  }

  // forward - computed: true, optional: false, required: false
  public get forward() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('forward') as any;
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // redirect - computed: true, optional: false, required: false
  public get redirect() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('redirect') as any;
  }

  // target_group_arn - computed: true, optional: false, required: false
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html aws_alb_listener}
*/
export class DataAwsAlbListener extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_alb_listener";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html aws_alb_listener} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAlbListenerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsAlbListenerConfig = {}) {
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
    this._loadBalancerArn = config.loadBalancerArn;
    this._port = config.port;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alpn_policy - computed: true, optional: false, required: false
  public get alpnPolicy() {
    return this.getStringAttribute('alpn_policy');
  }

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // default_action - computed: true, optional: false, required: false
  public defaultAction(index: string) {
    return new DataAwsAlbListenerDefaultAction(this, 'default_action', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_arn - computed: true, optional: true, required: false
  private _loadBalancerArn?: string; 
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }
  public set loadBalancerArn(value: string) {
    this._loadBalancerArn = value;
  }
  public resetLoadBalancerArn() {
    this._loadBalancerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerArnInput() {
    return this._loadBalancerArn;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // ssl_policy - computed: true, optional: false, required: false
  public get sslPolicy() {
    return this.getStringAttribute('ssl_policy');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
      port: cdktf.numberToTerraform(this._port),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}

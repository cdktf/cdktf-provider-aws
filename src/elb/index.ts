/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#availability_zones Elb#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#connection_draining Elb#connection_draining}
  */
  readonly connectionDraining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#connection_draining_timeout Elb#connection_draining_timeout}
  */
  readonly connectionDrainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#cross_zone_load_balancing Elb#cross_zone_load_balancing}
  */
  readonly crossZoneLoadBalancing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#desync_mitigation_mode Elb#desync_mitigation_mode}
  */
  readonly desyncMitigationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#id Elb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#idle_timeout Elb#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#instances Elb#instances}
  */
  readonly instances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#internal Elb#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#name Elb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#name_prefix Elb#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#region Elb#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#security_groups Elb#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#source_security_group Elb#source_security_group}
  */
  readonly sourceSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#subnets Elb#subnets}
  */
  readonly subnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#tags Elb#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#tags_all Elb#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * access_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#access_logs Elb#access_logs}
  */
  readonly accessLogs?: ElbAccessLogs;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#health_check Elb#health_check}
  */
  readonly healthCheck?: ElbHealthCheck;
  /**
  * listener block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#listener Elb#listener}
  */
  readonly listener: ElbListener[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#timeouts Elb#timeouts}
  */
  readonly timeouts?: ElbTimeouts;
}
export interface ElbAccessLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#bucket Elb#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#bucket_prefix Elb#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#enabled Elb#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#interval Elb#interval}
  */
  readonly interval?: number;
}

export function elbAccessLogsToTerraform(struct?: ElbAccessLogsOutputReference | ElbAccessLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function elbAccessLogsToHclTerraform(struct?: ElbAccessLogsOutputReference | ElbAccessLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElbAccessLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElbAccessLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbAccessLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._bucketPrefix = undefined;
      this._enabled = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._bucketPrefix = value.bucketPrefix;
      this._enabled = value.enabled;
      this._interval = value.interval;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface ElbHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#healthy_threshold Elb#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#interval Elb#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#target Elb#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#timeout Elb#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#unhealthy_threshold Elb#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
}

export function elbHealthCheckToTerraform(struct?: ElbHealthCheckOutputReference | ElbHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.numberToTerraform(struct!.interval),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function elbHealthCheckToHclTerraform(struct?: ElbHealthCheckOutputReference | ElbHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElbHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElbHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthyThreshold = undefined;
      this._interval = undefined;
      this._target = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthyThreshold = value.healthyThreshold;
      this._interval = value.interval;
      this._target = value.target;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // healthy_threshold - computed: false, optional: false, required: true
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: false, optional: false, required: true
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}
export interface ElbListener {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#instance_port Elb#instance_port}
  */
  readonly instancePort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#instance_protocol Elb#instance_protocol}
  */
  readonly instanceProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#lb_port Elb#lb_port}
  */
  readonly lbPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#lb_protocol Elb#lb_protocol}
  */
  readonly lbProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#ssl_certificate_id Elb#ssl_certificate_id}
  */
  readonly sslCertificateId?: string;
}

export function elbListenerToTerraform(struct?: ElbListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_port: cdktf.numberToTerraform(struct!.instancePort),
    instance_protocol: cdktf.stringToTerraform(struct!.instanceProtocol),
    lb_port: cdktf.numberToTerraform(struct!.lbPort),
    lb_protocol: cdktf.stringToTerraform(struct!.lbProtocol),
    ssl_certificate_id: cdktf.stringToTerraform(struct!.sslCertificateId),
  }
}


export function elbListenerToHclTerraform(struct?: ElbListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_port: {
      value: cdktf.numberToHclTerraform(struct!.instancePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_protocol: {
      value: cdktf.stringToHclTerraform(struct!.instanceProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lb_port: {
      value: cdktf.numberToHclTerraform(struct!.lbPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_protocol: {
      value: cdktf.stringToHclTerraform(struct!.lbProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.sslCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElbListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ElbListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instancePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePort = this._instancePort;
    }
    if (this._instanceProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProtocol = this._instanceProtocol;
    }
    if (this._lbPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbPort = this._lbPort;
    }
    if (this._lbProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbProtocol = this._lbProtocol;
    }
    if (this._sslCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificateId = this._sslCertificateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instancePort = undefined;
      this._instanceProtocol = undefined;
      this._lbPort = undefined;
      this._lbProtocol = undefined;
      this._sslCertificateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instancePort = value.instancePort;
      this._instanceProtocol = value.instanceProtocol;
      this._lbPort = value.lbPort;
      this._lbProtocol = value.lbProtocol;
      this._sslCertificateId = value.sslCertificateId;
    }
  }

  // instance_port - computed: false, optional: false, required: true
  private _instancePort?: number; 
  public get instancePort() {
    return this.getNumberAttribute('instance_port');
  }
  public set instancePort(value: number) {
    this._instancePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePortInput() {
    return this._instancePort;
  }

  // instance_protocol - computed: false, optional: false, required: true
  private _instanceProtocol?: string; 
  public get instanceProtocol() {
    return this.getStringAttribute('instance_protocol');
  }
  public set instanceProtocol(value: string) {
    this._instanceProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProtocolInput() {
    return this._instanceProtocol;
  }

  // lb_port - computed: false, optional: false, required: true
  private _lbPort?: number; 
  public get lbPort() {
    return this.getNumberAttribute('lb_port');
  }
  public set lbPort(value: number) {
    this._lbPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbPortInput() {
    return this._lbPort;
  }

  // lb_protocol - computed: false, optional: false, required: true
  private _lbProtocol?: string; 
  public get lbProtocol() {
    return this.getStringAttribute('lb_protocol');
  }
  public set lbProtocol(value: string) {
    this._lbProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbProtocolInput() {
    return this._lbProtocol;
  }

  // ssl_certificate_id - computed: false, optional: true, required: false
  private _sslCertificateId?: string; 
  public get sslCertificateId() {
    return this.getStringAttribute('ssl_certificate_id');
  }
  public set sslCertificateId(value: string) {
    this._sslCertificateId = value;
  }
  public resetSslCertificateId() {
    this._sslCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateIdInput() {
    return this._sslCertificateId;
  }
}

export class ElbListenerList extends cdktf.ComplexList {
  public internalValue? : ElbListener[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ElbListenerOutputReference {
    return new ElbListenerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElbTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#create Elb#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#update Elb#update}
  */
  readonly update?: string;
}

export function elbTimeoutsToTerraform(struct?: ElbTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function elbTimeoutsToHclTerraform(struct?: ElbTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElbTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElbTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb aws_elb}
*/
export class Elb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Elb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Elb to import
  * @param importFromId The id of the existing Elb that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Elb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elb aws_elb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElbConfig
  */
  public constructor(scope: Construct, id: string, config: ElbConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elb',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZones = config.availabilityZones;
    this._connectionDraining = config.connectionDraining;
    this._connectionDrainingTimeout = config.connectionDrainingTimeout;
    this._crossZoneLoadBalancing = config.crossZoneLoadBalancing;
    this._desyncMitigationMode = config.desyncMitigationMode;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._instances = config.instances;
    this._internal = config.internal;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._region = config.region;
    this._securityGroups = config.securityGroups;
    this._sourceSecurityGroup = config.sourceSecurityGroup;
    this._subnets = config.subnets;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accessLogs.internalValue = config.accessLogs;
    this._healthCheck.internalValue = config.healthCheck;
    this._listener.internalValue = config.listener;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // connection_draining - computed: false, optional: true, required: false
  private _connectionDraining?: boolean | cdktf.IResolvable; 
  public get connectionDraining() {
    return this.getBooleanAttribute('connection_draining');
  }
  public set connectionDraining(value: boolean | cdktf.IResolvable) {
    this._connectionDraining = value;
  }
  public resetConnectionDraining() {
    this._connectionDraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainingInput() {
    return this._connectionDraining;
  }

  // connection_draining_timeout - computed: false, optional: true, required: false
  private _connectionDrainingTimeout?: number; 
  public get connectionDrainingTimeout() {
    return this.getNumberAttribute('connection_draining_timeout');
  }
  public set connectionDrainingTimeout(value: number) {
    this._connectionDrainingTimeout = value;
  }
  public resetConnectionDrainingTimeout() {
    this._connectionDrainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainingTimeoutInput() {
    return this._connectionDrainingTimeout;
  }

  // cross_zone_load_balancing - computed: false, optional: true, required: false
  private _crossZoneLoadBalancing?: boolean | cdktf.IResolvable; 
  public get crossZoneLoadBalancing() {
    return this.getBooleanAttribute('cross_zone_load_balancing');
  }
  public set crossZoneLoadBalancing(value: boolean | cdktf.IResolvable) {
    this._crossZoneLoadBalancing = value;
  }
  public resetCrossZoneLoadBalancing() {
    this._crossZoneLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossZoneLoadBalancingInput() {
    return this._crossZoneLoadBalancing;
  }

  // desync_mitigation_mode - computed: false, optional: true, required: false
  private _desyncMitigationMode?: string; 
  public get desyncMitigationMode() {
    return this.getStringAttribute('desync_mitigation_mode');
  }
  public set desyncMitigationMode(value: string) {
    this._desyncMitigationMode = value;
  }
  public resetDesyncMitigationMode() {
    this._desyncMitigationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desyncMitigationModeInput() {
    return this._desyncMitigationMode;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return cdktf.Fn.tolist(this.getListAttribute('instances'));
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable; 
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // source_security_group - computed: true, optional: true, required: false
  private _sourceSecurityGroup?: string; 
  public get sourceSecurityGroup() {
    return this.getStringAttribute('source_security_group');
  }
  public set sourceSecurityGroup(value: string) {
    this._sourceSecurityGroup = value;
  }
  public resetSourceSecurityGroup() {
    this._sourceSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityGroupInput() {
    return this._sourceSecurityGroup;
  }

  // source_security_group_id - computed: true, optional: false, required: false
  public get sourceSecurityGroupId() {
    return this.getStringAttribute('source_security_group_id');
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // access_logs - computed: false, optional: true, required: false
  private _accessLogs = new ElbAccessLogsOutputReference(this, "access_logs");
  public get accessLogs() {
    return this._accessLogs;
  }
  public putAccessLogs(value: ElbAccessLogs) {
    this._accessLogs.internalValue = value;
  }
  public resetAccessLogs() {
    this._accessLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogsInput() {
    return this._accessLogs.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new ElbHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: ElbHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // listener - computed: false, optional: false, required: true
  private _listener = new ElbListenerList(this, "listener", true);
  public get listener() {
    return this._listener;
  }
  public putListener(value: ElbListener[] | cdktf.IResolvable) {
    this._listener.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ElbTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ElbTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      connection_draining: cdktf.booleanToTerraform(this._connectionDraining),
      connection_draining_timeout: cdktf.numberToTerraform(this._connectionDrainingTimeout),
      cross_zone_load_balancing: cdktf.booleanToTerraform(this._crossZoneLoadBalancing),
      desync_mitigation_mode: cdktf.stringToTerraform(this._desyncMitigationMode),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instances),
      internal: cdktf.booleanToTerraform(this._internal),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      region: cdktf.stringToTerraform(this._region),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      source_security_group: cdktf.stringToTerraform(this._sourceSecurityGroup),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      access_logs: elbAccessLogsToTerraform(this._accessLogs.internalValue),
      health_check: elbHealthCheckToTerraform(this._healthCheck.internalValue),
      listener: cdktf.listMapper(elbListenerToTerraform, true)(this._listener.internalValue),
      timeouts: elbTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connection_draining: {
        value: cdktf.booleanToHclTerraform(this._connectionDraining),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_draining_timeout: {
        value: cdktf.numberToHclTerraform(this._connectionDrainingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cross_zone_load_balancing: {
        value: cdktf.booleanToHclTerraform(this._crossZoneLoadBalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      desync_mitigation_mode: {
        value: cdktf.stringToHclTerraform(this._desyncMitigationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instances),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internal: {
        value: cdktf.booleanToHclTerraform(this._internal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_security_group: {
        value: cdktf.stringToHclTerraform(this._sourceSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      access_logs: {
        value: elbAccessLogsToHclTerraform(this._accessLogs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElbAccessLogsList",
      },
      health_check: {
        value: elbHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElbHealthCheckList",
      },
      listener: {
        value: cdktf.listMapperHcl(elbListenerToHclTerraform, true)(this._listener.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElbListenerList",
      },
      timeouts: {
        value: elbTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElbTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

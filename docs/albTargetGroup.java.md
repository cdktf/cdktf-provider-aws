# `albTargetGroup` Submodule <a name="`albTargetGroup` Submodule" id="@cdktf/provider-aws.albTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlbTargetGroup <a name="AlbTargetGroup" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group aws_alb_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_target_group.AlbTargetGroup;

AlbTargetGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .connectionTermination(java.lang.Boolean)
//  .connectionTermination(IResolvable)
//  .deregistrationDelay(java.lang.String)
//  .healthCheck(AlbTargetGroupHealthCheck)
//  .id(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .lambdaMultiValueHeadersEnabled(java.lang.Boolean)
//  .lambdaMultiValueHeadersEnabled(IResolvable)
//  .loadBalancingAlgorithmType(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .port(java.lang.Number)
//  .preserveClientIp(java.lang.String)
//  .protocol(java.lang.String)
//  .protocolVersion(java.lang.String)
//  .proxyProtocolV2(java.lang.Boolean)
//  .proxyProtocolV2(IResolvable)
//  .slowStart(java.lang.Number)
//  .stickiness(AlbTargetGroupStickiness)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .targetFailover(IResolvable)
//  .targetFailover(java.util.List<AlbTargetGroupTargetFailover>)
//  .targetType(java.lang.String)
//  .vpcId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.connectionTermination">connectionTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#connection_termination AlbTargetGroup#connection_termination}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.deregistrationDelay">deregistrationDelay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#id AlbTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.lambdaMultiValueHeadersEnabled">lambdaMultiValueHeadersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.loadBalancingAlgorithmType">loadBalancingAlgorithmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name AlbTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name_prefix AlbTargetGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.preserveClientIp">preserveClientIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol_version AlbTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.proxyProtocolV2">proxyProtocolV2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.slowStart">slowStart</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#slow_start AlbTargetGroup#slow_start}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | stickiness block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags AlbTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags_all AlbTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.targetFailover">targetFailover</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>></code> | target_failover block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#target_type AlbTargetGroup#target_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#vpc_id AlbTargetGroup#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionTermination`<sup>Optional</sup> <a name="connectionTermination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.connectionTermination"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#connection_termination AlbTargetGroup#connection_termination}.

---

##### `deregistrationDelay`<sup>Optional</sup> <a name="deregistrationDelay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.deregistrationDelay"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#health_check AlbTargetGroup#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#id AlbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}.

---

##### `lambdaMultiValueHeadersEnabled`<sup>Optional</sup> <a name="lambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.lambdaMultiValueHeadersEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}.

---

##### `loadBalancingAlgorithmType`<sup>Optional</sup> <a name="loadBalancingAlgorithmType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.loadBalancingAlgorithmType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name AlbTargetGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name_prefix AlbTargetGroup#name_prefix}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}.

---

##### `preserveClientIp`<sup>Optional</sup> <a name="preserveClientIp" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.preserveClientIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.protocolVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol_version AlbTargetGroup#protocol_version}.

---

##### `proxyProtocolV2`<sup>Optional</sup> <a name="proxyProtocolV2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.proxyProtocolV2"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}.

---

##### `slowStart`<sup>Optional</sup> <a name="slowStart" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.slowStart"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#slow_start AlbTargetGroup#slow_start}.

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.stickiness"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#stickiness AlbTargetGroup#stickiness}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags AlbTargetGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags_all AlbTargetGroup#tags_all}.

---

##### `targetFailover`<sup>Optional</sup> <a name="targetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.targetFailover"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>>

target_failover block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#target_failover AlbTargetGroup#target_failover}

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.targetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#target_type AlbTargetGroup#target_type}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#vpc_id AlbTargetGroup#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness">putStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetFailover">putTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetConnectionTermination">resetConnectionTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetDeregistrationDelay">resetDeregistrationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLambdaMultiValueHeadersEnabled">resetLambdaMultiValueHeadersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLoadBalancingAlgorithmType">resetLoadBalancingAlgorithmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPreserveClientIp">resetPreserveClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocolVersion">resetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProxyProtocolV2">resetProxyProtocolV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetSlowStart">resetSlowStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetStickiness">resetStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetFailover">resetTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetType">resetTargetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck"></a>

```java
public void putHealthCheck(AlbTargetGroupHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

---

##### `putStickiness` <a name="putStickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness"></a>

```java
public void putStickiness(AlbTargetGroupStickiness value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

---

##### `putTargetFailover` <a name="putTargetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetFailover"></a>

```java
public void putTargetFailover(IResolvable OR java.util.List<AlbTargetGroupTargetFailover> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetFailover.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>>

---

##### `resetConnectionTermination` <a name="resetConnectionTermination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetConnectionTermination"></a>

```java
public void resetConnectionTermination()
```

##### `resetDeregistrationDelay` <a name="resetDeregistrationDelay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetDeregistrationDelay"></a>

```java
public void resetDeregistrationDelay()
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetHealthCheck"></a>

```java
public void resetHealthCheck()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetLambdaMultiValueHeadersEnabled` <a name="resetLambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLambdaMultiValueHeadersEnabled"></a>

```java
public void resetLambdaMultiValueHeadersEnabled()
```

##### `resetLoadBalancingAlgorithmType` <a name="resetLoadBalancingAlgorithmType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLoadBalancingAlgorithmType"></a>

```java
public void resetLoadBalancingAlgorithmType()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPort"></a>

```java
public void resetPort()
```

##### `resetPreserveClientIp` <a name="resetPreserveClientIp" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPreserveClientIp"></a>

```java
public void resetPreserveClientIp()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetProtocolVersion` <a name="resetProtocolVersion" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocolVersion"></a>

```java
public void resetProtocolVersion()
```

##### `resetProxyProtocolV2` <a name="resetProxyProtocolV2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProxyProtocolV2"></a>

```java
public void resetProxyProtocolV2()
```

##### `resetSlowStart` <a name="resetSlowStart" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetSlowStart"></a>

```java
public void resetSlowStart()
```

##### `resetStickiness` <a name="resetStickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetStickiness"></a>

```java
public void resetStickiness()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTargetFailover` <a name="resetTargetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetFailover"></a>

```java
public void resetTargetFailover()
```

##### `resetTargetType` <a name="resetTargetType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetType"></a>

```java
public void resetTargetType()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetVpcId"></a>

```java
public void resetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_target_group.AlbTargetGroup;

AlbTargetGroup.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_target_group.AlbTargetGroup;

AlbTargetGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_target_group.AlbTargetGroup;

AlbTargetGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arnSuffix">arnSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference">AlbTargetGroupHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference">AlbTargetGroupStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailover">targetFailover</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList">AlbTargetGroupTargetFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTerminationInput">connectionTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelayInput">deregistrationDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheckInput">healthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabledInput">lambdaMultiValueHeadersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmTypeInput">loadBalancingAlgorithmTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIpInput">preserveClientIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersionInput">protocolVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2Input">proxyProtocolV2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStartInput">slowStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickinessInput">stickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailoverInput">targetFailoverInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetTypeInput">targetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTermination">connectionTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelay">deregistrationDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabled">lambdaMultiValueHeadersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmType">loadBalancingAlgorithmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIp">preserveClientIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2">proxyProtocolV2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStart">slowStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `arnSuffix`<sup>Required</sup> <a name="arnSuffix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arnSuffix"></a>

```java
public java.lang.String getArnSuffix();
```

- *Type:* java.lang.String

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheck"></a>

```java
public AlbTargetGroupHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference">AlbTargetGroupHealthCheckOutputReference</a>

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickiness"></a>

```java
public AlbTargetGroupStickinessOutputReference getStickiness();
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference">AlbTargetGroupStickinessOutputReference</a>

---

##### `targetFailover`<sup>Required</sup> <a name="targetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailover"></a>

```java
public AlbTargetGroupTargetFailoverList getTargetFailover();
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList">AlbTargetGroupTargetFailoverList</a>

---

##### `connectionTerminationInput`<sup>Optional</sup> <a name="connectionTerminationInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTerminationInput"></a>

```java
public java.lang.Object getConnectionTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deregistrationDelayInput`<sup>Optional</sup> <a name="deregistrationDelayInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelayInput"></a>

```java
public java.lang.String getDeregistrationDelayInput();
```

- *Type:* java.lang.String

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheckInput"></a>

```java
public AlbTargetGroupHealthCheck getHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `lambdaMultiValueHeadersEnabledInput`<sup>Optional</sup> <a name="lambdaMultiValueHeadersEnabledInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabledInput"></a>

```java
public java.lang.Object getLambdaMultiValueHeadersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loadBalancingAlgorithmTypeInput`<sup>Optional</sup> <a name="loadBalancingAlgorithmTypeInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmTypeInput"></a>

```java
public java.lang.String getLoadBalancingAlgorithmTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `preserveClientIpInput`<sup>Optional</sup> <a name="preserveClientIpInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIpInput"></a>

```java
public java.lang.String getPreserveClientIpInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersionInput"></a>

```java
public java.lang.String getProtocolVersionInput();
```

- *Type:* java.lang.String

---

##### `proxyProtocolV2Input`<sup>Optional</sup> <a name="proxyProtocolV2Input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2Input"></a>

```java
public java.lang.Object getProxyProtocolV2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `slowStartInput`<sup>Optional</sup> <a name="slowStartInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStartInput"></a>

```java
public java.lang.Number getSlowStartInput();
```

- *Type:* java.lang.Number

---

##### `stickinessInput`<sup>Optional</sup> <a name="stickinessInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickinessInput"></a>

```java
public AlbTargetGroupStickiness getStickinessInput();
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetFailoverInput`<sup>Optional</sup> <a name="targetFailoverInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailoverInput"></a>

```java
public java.lang.Object getTargetFailoverInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>>

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetTypeInput"></a>

```java
public java.lang.String getTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `connectionTermination`<sup>Required</sup> <a name="connectionTermination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTermination"></a>

```java
public java.lang.Object getConnectionTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deregistrationDelay`<sup>Required</sup> <a name="deregistrationDelay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelay"></a>

```java
public java.lang.String getDeregistrationDelay();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `lambdaMultiValueHeadersEnabled`<sup>Required</sup> <a name="lambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabled"></a>

```java
public java.lang.Object getLambdaMultiValueHeadersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loadBalancingAlgorithmType`<sup>Required</sup> <a name="loadBalancingAlgorithmType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmType"></a>

```java
public java.lang.String getLoadBalancingAlgorithmType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `preserveClientIp`<sup>Required</sup> <a name="preserveClientIp" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIp"></a>

```java
public java.lang.String getPreserveClientIp();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

---

##### `proxyProtocolV2`<sup>Required</sup> <a name="proxyProtocolV2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2"></a>

```java
public java.lang.Object getProxyProtocolV2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `slowStart`<sup>Required</sup> <a name="slowStart" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStart"></a>

```java
public java.lang.Number getSlowStart();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlbTargetGroupConfig <a name="AlbTargetGroupConfig" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_target_group.AlbTargetGroupConfig;

AlbTargetGroupConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .connectionTermination(java.lang.Boolean)
//  .connectionTermination(IResolvable)
//  .deregistrationDelay(java.lang.String)
//  .healthCheck(AlbTargetGroupHealthCheck)
//  .id(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .lambdaMultiValueHeadersEnabled(java.lang.Boolean)
//  .lambdaMultiValueHeadersEnabled(IResolvable)
//  .loadBalancingAlgorithmType(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .port(java.lang.Number)
//  .preserveClientIp(java.lang.String)
//  .protocol(java.lang.String)
//  .protocolVersion(java.lang.String)
//  .proxyProtocolV2(java.lang.Boolean)
//  .proxyProtocolV2(IResolvable)
//  .slowStart(java.lang.Number)
//  .stickiness(AlbTargetGroupStickiness)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .targetFailover(IResolvable)
//  .targetFailover(java.util.List<AlbTargetGroupTargetFailover>)
//  .targetType(java.lang.String)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connectionTermination">connectionTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#connection_termination AlbTargetGroup#connection_termination}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.deregistrationDelay">deregistrationDelay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#id AlbTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled">lambdaMultiValueHeadersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.loadBalancingAlgorithmType">loadBalancingAlgorithmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name AlbTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name_prefix AlbTargetGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.preserveClientIp">preserveClientIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol_version AlbTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.proxyProtocolV2">proxyProtocolV2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.slowStart">slowStart</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#slow_start AlbTargetGroup#slow_start}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | stickiness block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags AlbTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags_all AlbTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetFailover">targetFailover</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>></code> | target_failover block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#target_type AlbTargetGroup#target_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#vpc_id AlbTargetGroup#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionTermination`<sup>Optional</sup> <a name="connectionTermination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connectionTermination"></a>

```java
public java.lang.Object getConnectionTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#connection_termination AlbTargetGroup#connection_termination}.

---

##### `deregistrationDelay`<sup>Optional</sup> <a name="deregistrationDelay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.deregistrationDelay"></a>

```java
public java.lang.String getDeregistrationDelay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.healthCheck"></a>

```java
public AlbTargetGroupHealthCheck getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#health_check AlbTargetGroup#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#id AlbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}.

---

##### `lambdaMultiValueHeadersEnabled`<sup>Optional</sup> <a name="lambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled"></a>

```java
public java.lang.Object getLambdaMultiValueHeadersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}.

---

##### `loadBalancingAlgorithmType`<sup>Optional</sup> <a name="loadBalancingAlgorithmType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.loadBalancingAlgorithmType"></a>

```java
public java.lang.String getLoadBalancingAlgorithmType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name AlbTargetGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name_prefix AlbTargetGroup#name_prefix}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}.

---

##### `preserveClientIp`<sup>Optional</sup> <a name="preserveClientIp" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.preserveClientIp"></a>

```java
public java.lang.String getPreserveClientIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol_version AlbTargetGroup#protocol_version}.

---

##### `proxyProtocolV2`<sup>Optional</sup> <a name="proxyProtocolV2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.proxyProtocolV2"></a>

```java
public java.lang.Object getProxyProtocolV2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}.

---

##### `slowStart`<sup>Optional</sup> <a name="slowStart" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.slowStart"></a>

```java
public java.lang.Number getSlowStart();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#slow_start AlbTargetGroup#slow_start}.

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.stickiness"></a>

```java
public AlbTargetGroupStickiness getStickiness();
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#stickiness AlbTargetGroup#stickiness}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags AlbTargetGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags_all AlbTargetGroup#tags_all}.

---

##### `targetFailover`<sup>Optional</sup> <a name="targetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetFailover"></a>

```java
public java.lang.Object getTargetFailover();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>>

target_failover block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#target_failover AlbTargetGroup#target_failover}

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#target_type AlbTargetGroup#target_type}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#vpc_id AlbTargetGroup#vpc_id}.

---

### AlbTargetGroupHealthCheck <a name="AlbTargetGroupHealthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_target_group.AlbTargetGroupHealthCheck;

AlbTargetGroupHealthCheck.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .healthyThreshold(java.lang.Number)
//  .interval(java.lang.Number)
//  .matcher(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.String)
//  .protocol(java.lang.String)
//  .timeout(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#enabled AlbTargetGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#healthy_threshold AlbTargetGroup#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#interval AlbTargetGroup#interval}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.matcher">matcher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#matcher AlbTargetGroup#matcher}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#path AlbTargetGroup#path}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.port">port</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#timeout AlbTargetGroup#timeout}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#enabled AlbTargetGroup#enabled}.

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#healthy_threshold AlbTargetGroup#healthy_threshold}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#interval AlbTargetGroup#interval}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#matcher AlbTargetGroup#matcher}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#path AlbTargetGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#timeout AlbTargetGroup#timeout}.

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}.

---

### AlbTargetGroupStickiness <a name="AlbTargetGroupStickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_target_group.AlbTargetGroupStickiness;

AlbTargetGroupStickiness.builder()
    .type(java.lang.String)
//  .cookieDuration(java.lang.Number)
//  .cookieName(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#type AlbTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieDuration">cookieDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#cookie_duration AlbTargetGroup#cookie_duration}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#cookie_name AlbTargetGroup#cookie_name}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#enabled AlbTargetGroup#enabled}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#type AlbTargetGroup#type}.

---

##### `cookieDuration`<sup>Optional</sup> <a name="cookieDuration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieDuration"></a>

```java
public java.lang.Number getCookieDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#cookie_duration AlbTargetGroup#cookie_duration}.

---

##### `cookieName`<sup>Optional</sup> <a name="cookieName" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#cookie_name AlbTargetGroup#cookie_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#enabled AlbTargetGroup#enabled}.

---

### AlbTargetGroupTargetFailover <a name="AlbTargetGroupTargetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_target_group.AlbTargetGroupTargetFailover;

AlbTargetGroupTargetFailover.builder()
    .onDeregistration(java.lang.String)
    .onUnhealthy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onDeregistration">onDeregistration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#on_deregistration AlbTargetGroup#on_deregistration}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onUnhealthy">onUnhealthy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#on_unhealthy AlbTargetGroup#on_unhealthy}. |

---

##### `onDeregistration`<sup>Required</sup> <a name="onDeregistration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onDeregistration"></a>

```java
public java.lang.String getOnDeregistration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#on_deregistration AlbTargetGroup#on_deregistration}.

---

##### `onUnhealthy`<sup>Required</sup> <a name="onUnhealthy" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onUnhealthy"></a>

```java
public java.lang.String getOnUnhealthy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#on_unhealthy AlbTargetGroup#on_unhealthy}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbTargetGroupHealthCheckOutputReference <a name="AlbTargetGroupHealthCheckOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_target_group.AlbTargetGroupHealthCheckOutputReference;

new AlbTargetGroupHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetHealthyThreshold"></a>

```java
public void resetHealthyThreshold()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetMatcher` <a name="resetMatcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetMatcher"></a>

```java
public void resetMatcher()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```java
public void resetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcherInput">matcherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcher">matcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput"></a>

```java
public java.lang.Number getHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcherInput"></a>

```java
public java.lang.String getMatcherInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```java
public java.lang.Number getUnhealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.internalValue"></a>

```java
public AlbTargetGroupHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

---


### AlbTargetGroupStickinessOutputReference <a name="AlbTargetGroupStickinessOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_target_group.AlbTargetGroupStickinessOutputReference;

new AlbTargetGroupStickinessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieDuration">resetCookieDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieName">resetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookieDuration` <a name="resetCookieDuration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieDuration"></a>

```java
public void resetCookieDuration()
```

##### `resetCookieName` <a name="resetCookieName" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieName"></a>

```java
public void resetCookieName()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDurationInput">cookieDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDuration">cookieDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieDurationInput`<sup>Optional</sup> <a name="cookieDurationInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDurationInput"></a>

```java
public java.lang.Number getCookieDurationInput();
```

- *Type:* java.lang.Number

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieNameInput"></a>

```java
public java.lang.String getCookieNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `cookieDuration`<sup>Required</sup> <a name="cookieDuration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDuration"></a>

```java
public java.lang.Number getCookieDuration();
```

- *Type:* java.lang.Number

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.internalValue"></a>

```java
public AlbTargetGroupStickiness getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

---


### AlbTargetGroupTargetFailoverList <a name="AlbTargetGroupTargetFailoverList" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_target_group.AlbTargetGroupTargetFailoverList;

new AlbTargetGroupTargetFailoverList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.get"></a>

```java
public AlbTargetGroupTargetFailoverOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>>

---


### AlbTargetGroupTargetFailoverOutputReference <a name="AlbTargetGroupTargetFailoverOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_target_group.AlbTargetGroupTargetFailoverOutputReference;

new AlbTargetGroupTargetFailoverOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput">onDeregistrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput">onUnhealthyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistration">onDeregistration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthy">onUnhealthy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onDeregistrationInput`<sup>Optional</sup> <a name="onDeregistrationInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput"></a>

```java
public java.lang.String getOnDeregistrationInput();
```

- *Type:* java.lang.String

---

##### `onUnhealthyInput`<sup>Optional</sup> <a name="onUnhealthyInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput"></a>

```java
public java.lang.String getOnUnhealthyInput();
```

- *Type:* java.lang.String

---

##### `onDeregistration`<sup>Required</sup> <a name="onDeregistration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistration"></a>

```java
public java.lang.String getOnDeregistration();
```

- *Type:* java.lang.String

---

##### `onUnhealthy`<sup>Required</sup> <a name="onUnhealthy" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthy"></a>

```java
public java.lang.String getOnUnhealthy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a> OR com.hashicorp.cdktf.IResolvable

---




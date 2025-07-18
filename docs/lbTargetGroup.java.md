# `lbTargetGroup` Submodule <a name="`lbTargetGroup` Submodule" id="@cdktf/provider-aws.lbTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbTargetGroup <a name="LbTargetGroup" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group aws_lb_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroup;

LbTargetGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
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
//  .healthCheck(LbTargetGroupHealthCheck)
//  .id(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .lambdaMultiValueHeadersEnabled(java.lang.Boolean)
//  .lambdaMultiValueHeadersEnabled(IResolvable)
//  .loadBalancingAlgorithmType(java.lang.String)
//  .loadBalancingAnomalyMitigation(java.lang.String)
//  .loadBalancingCrossZoneEnabled(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .port(java.lang.Number)
//  .preserveClientIp(java.lang.String)
//  .protocol(java.lang.String)
//  .protocolVersion(java.lang.String)
//  .proxyProtocolV2(java.lang.Boolean)
//  .proxyProtocolV2(IResolvable)
//  .region(java.lang.String)
//  .slowStart(java.lang.Number)
//  .stickiness(LbTargetGroupStickiness)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .targetFailover(IResolvable)
//  .targetFailover(java.util.List<LbTargetGroupTargetFailover>)
//  .targetGroupHealth(LbTargetGroupTargetGroupHealth)
//  .targetHealthState(IResolvable)
//  .targetHealthState(java.util.List<LbTargetGroupTargetHealthState>)
//  .targetType(java.lang.String)
//  .vpcId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.connectionTermination">connectionTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#connection_termination LbTargetGroup#connection_termination}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.deregistrationDelay">deregistrationDelay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#deregistration_delay LbTargetGroup#deregistration_delay}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#id LbTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#ip_address_type LbTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.lambdaMultiValueHeadersEnabled">lambdaMultiValueHeadersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.loadBalancingAlgorithmType">loadBalancingAlgorithmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.loadBalancingAnomalyMitigation">loadBalancingAnomalyMitigation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_anomaly_mitigation LbTargetGroup#load_balancing_anomaly_mitigation}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.loadBalancingCrossZoneEnabled">loadBalancingCrossZoneEnabled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_cross_zone_enabled LbTargetGroup#load_balancing_cross_zone_enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#name LbTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#name_prefix LbTargetGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#port LbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.preserveClientIp">preserveClientIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#preserve_client_ip LbTargetGroup#preserve_client_ip}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol_version LbTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.proxyProtocolV2">proxyProtocolV2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.slowStart">slowStart</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#slow_start LbTargetGroup#slow_start}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | stickiness block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#tags LbTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#tags_all LbTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.targetFailover">targetFailover</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>></code> | target_failover block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.targetGroupHealth">targetGroupHealth</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a></code> | target_group_health block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.targetHealthState">targetHealthState</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>></code> | target_health_state block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_type LbTargetGroup#target_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#vpc_id LbTargetGroup#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionTermination`<sup>Optional</sup> <a name="connectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.connectionTermination"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#connection_termination LbTargetGroup#connection_termination}.

---

##### `deregistrationDelay`<sup>Optional</sup> <a name="deregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.deregistrationDelay"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#deregistration_delay LbTargetGroup#deregistration_delay}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#health_check LbTargetGroup#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#id LbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#ip_address_type LbTargetGroup#ip_address_type}.

---

##### `lambdaMultiValueHeadersEnabled`<sup>Optional</sup> <a name="lambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.lambdaMultiValueHeadersEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}.

---

##### `loadBalancingAlgorithmType`<sup>Optional</sup> <a name="loadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.loadBalancingAlgorithmType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}.

---

##### `loadBalancingAnomalyMitigation`<sup>Optional</sup> <a name="loadBalancingAnomalyMitigation" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.loadBalancingAnomalyMitigation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_anomaly_mitigation LbTargetGroup#load_balancing_anomaly_mitigation}.

---

##### `loadBalancingCrossZoneEnabled`<sup>Optional</sup> <a name="loadBalancingCrossZoneEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.loadBalancingCrossZoneEnabled"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_cross_zone_enabled LbTargetGroup#load_balancing_cross_zone_enabled}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#name LbTargetGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#name_prefix LbTargetGroup#name_prefix}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#port LbTargetGroup#port}.

---

##### `preserveClientIp`<sup>Optional</sup> <a name="preserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.preserveClientIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#preserve_client_ip LbTargetGroup#preserve_client_ip}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.protocolVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol_version LbTargetGroup#protocol_version}.

---

##### `proxyProtocolV2`<sup>Optional</sup> <a name="proxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.proxyProtocolV2"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#region LbTargetGroup#region}

---

##### `slowStart`<sup>Optional</sup> <a name="slowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.slowStart"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#slow_start LbTargetGroup#slow_start}.

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.stickiness"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#stickiness LbTargetGroup#stickiness}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#tags LbTargetGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#tags_all LbTargetGroup#tags_all}.

---

##### `targetFailover`<sup>Optional</sup> <a name="targetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.targetFailover"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>>

target_failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_failover LbTargetGroup#target_failover}

---

##### `targetGroupHealth`<sup>Optional</sup> <a name="targetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.targetGroupHealth"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

target_group_health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_group_health LbTargetGroup#target_group_health}

---

##### `targetHealthState`<sup>Optional</sup> <a name="targetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.targetHealthState"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>>

target_health_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_health_state LbTargetGroup#target_health_state}

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.targetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_type LbTargetGroup#target_type}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#vpc_id LbTargetGroup#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putStickiness">putStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetFailover">putTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetGroupHealth">putTargetGroupHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetHealthState">putTargetHealthState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetConnectionTermination">resetConnectionTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetDeregistrationDelay">resetDeregistrationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLambdaMultiValueHeadersEnabled">resetLambdaMultiValueHeadersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAlgorithmType">resetLoadBalancingAlgorithmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAnomalyMitigation">resetLoadBalancingAnomalyMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingCrossZoneEnabled">resetLoadBalancingCrossZoneEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPreserveClientIp">resetPreserveClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocolVersion">resetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProxyProtocolV2">resetProxyProtocolV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetSlowStart">resetSlowStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetStickiness">resetStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetFailover">resetTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetGroupHealth">resetTargetGroupHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetHealthState">resetTargetHealthState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetType">resetTargetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putHealthCheck"></a>

```java
public void putHealthCheck(LbTargetGroupHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

---

##### `putStickiness` <a name="putStickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putStickiness"></a>

```java
public void putStickiness(LbTargetGroupStickiness value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

---

##### `putTargetFailover` <a name="putTargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetFailover"></a>

```java
public void putTargetFailover(IResolvable OR java.util.List<LbTargetGroupTargetFailover> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetFailover.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>>

---

##### `putTargetGroupHealth` <a name="putTargetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetGroupHealth"></a>

```java
public void putTargetGroupHealth(LbTargetGroupTargetGroupHealth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetGroupHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

---

##### `putTargetHealthState` <a name="putTargetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetHealthState"></a>

```java
public void putTargetHealthState(IResolvable OR java.util.List<LbTargetGroupTargetHealthState> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetHealthState.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>>

---

##### `resetConnectionTermination` <a name="resetConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetConnectionTermination"></a>

```java
public void resetConnectionTermination()
```

##### `resetDeregistrationDelay` <a name="resetDeregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetDeregistrationDelay"></a>

```java
public void resetDeregistrationDelay()
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetHealthCheck"></a>

```java
public void resetHealthCheck()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetLambdaMultiValueHeadersEnabled` <a name="resetLambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLambdaMultiValueHeadersEnabled"></a>

```java
public void resetLambdaMultiValueHeadersEnabled()
```

##### `resetLoadBalancingAlgorithmType` <a name="resetLoadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAlgorithmType"></a>

```java
public void resetLoadBalancingAlgorithmType()
```

##### `resetLoadBalancingAnomalyMitigation` <a name="resetLoadBalancingAnomalyMitigation" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAnomalyMitigation"></a>

```java
public void resetLoadBalancingAnomalyMitigation()
```

##### `resetLoadBalancingCrossZoneEnabled` <a name="resetLoadBalancingCrossZoneEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingCrossZoneEnabled"></a>

```java
public void resetLoadBalancingCrossZoneEnabled()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPort"></a>

```java
public void resetPort()
```

##### `resetPreserveClientIp` <a name="resetPreserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPreserveClientIp"></a>

```java
public void resetPreserveClientIp()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetProtocolVersion` <a name="resetProtocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocolVersion"></a>

```java
public void resetProtocolVersion()
```

##### `resetProxyProtocolV2` <a name="resetProxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProxyProtocolV2"></a>

```java
public void resetProxyProtocolV2()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSlowStart` <a name="resetSlowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetSlowStart"></a>

```java
public void resetSlowStart()
```

##### `resetStickiness` <a name="resetStickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetStickiness"></a>

```java
public void resetStickiness()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTargetFailover` <a name="resetTargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetFailover"></a>

```java
public void resetTargetFailover()
```

##### `resetTargetGroupHealth` <a name="resetTargetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetGroupHealth"></a>

```java
public void resetTargetGroupHealth()
```

##### `resetTargetHealthState` <a name="resetTargetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetHealthState"></a>

```java
public void resetTargetHealthState()
```

##### `resetTargetType` <a name="resetTargetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetType"></a>

```java
public void resetTargetType()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetVpcId"></a>

```java
public void resetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbTargetGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroup;

LbTargetGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroup;

LbTargetGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroup;

LbTargetGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroup;

LbTargetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LbTargetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LbTargetGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LbTargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LbTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LbTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arnSuffix">arnSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference">LbTargetGroupHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancerArns">loadBalancerArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference">LbTargetGroupStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailover">targetFailover</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList">LbTargetGroupTargetFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetGroupHealth">targetGroupHealth</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference">LbTargetGroupTargetGroupHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetHealthState">targetHealthState</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList">LbTargetGroupTargetHealthStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTerminationInput">connectionTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelayInput">deregistrationDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheckInput">healthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabledInput">lambdaMultiValueHeadersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmTypeInput">loadBalancingAlgorithmTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAnomalyMitigationInput">loadBalancingAnomalyMitigationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingCrossZoneEnabledInput">loadBalancingCrossZoneEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIpInput">preserveClientIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersionInput">protocolVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2Input">proxyProtocolV2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStartInput">slowStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickinessInput">stickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailoverInput">targetFailoverInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetGroupHealthInput">targetGroupHealthInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetHealthStateInput">targetHealthStateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetTypeInput">targetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTermination">connectionTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelay">deregistrationDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabled">lambdaMultiValueHeadersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmType">loadBalancingAlgorithmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAnomalyMitigation">loadBalancingAnomalyMitigation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingCrossZoneEnabled">loadBalancingCrossZoneEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIp">preserveClientIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2">proxyProtocolV2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStart">slowStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `arnSuffix`<sup>Required</sup> <a name="arnSuffix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arnSuffix"></a>

```java
public java.lang.String getArnSuffix();
```

- *Type:* java.lang.String

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheck"></a>

```java
public LbTargetGroupHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference">LbTargetGroupHealthCheckOutputReference</a>

---

##### `loadBalancerArns`<sup>Required</sup> <a name="loadBalancerArns" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancerArns"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickiness"></a>

```java
public LbTargetGroupStickinessOutputReference getStickiness();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference">LbTargetGroupStickinessOutputReference</a>

---

##### `targetFailover`<sup>Required</sup> <a name="targetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailover"></a>

```java
public LbTargetGroupTargetFailoverList getTargetFailover();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList">LbTargetGroupTargetFailoverList</a>

---

##### `targetGroupHealth`<sup>Required</sup> <a name="targetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetGroupHealth"></a>

```java
public LbTargetGroupTargetGroupHealthOutputReference getTargetGroupHealth();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference">LbTargetGroupTargetGroupHealthOutputReference</a>

---

##### `targetHealthState`<sup>Required</sup> <a name="targetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetHealthState"></a>

```java
public LbTargetGroupTargetHealthStateList getTargetHealthState();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList">LbTargetGroupTargetHealthStateList</a>

---

##### `connectionTerminationInput`<sup>Optional</sup> <a name="connectionTerminationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTerminationInput"></a>

```java
public java.lang.Object getConnectionTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deregistrationDelayInput`<sup>Optional</sup> <a name="deregistrationDelayInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelayInput"></a>

```java
public java.lang.String getDeregistrationDelayInput();
```

- *Type:* java.lang.String

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheckInput"></a>

```java
public LbTargetGroupHealthCheck getHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `lambdaMultiValueHeadersEnabledInput`<sup>Optional</sup> <a name="lambdaMultiValueHeadersEnabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabledInput"></a>

```java
public java.lang.Object getLambdaMultiValueHeadersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loadBalancingAlgorithmTypeInput`<sup>Optional</sup> <a name="loadBalancingAlgorithmTypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmTypeInput"></a>

```java
public java.lang.String getLoadBalancingAlgorithmTypeInput();
```

- *Type:* java.lang.String

---

##### `loadBalancingAnomalyMitigationInput`<sup>Optional</sup> <a name="loadBalancingAnomalyMitigationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAnomalyMitigationInput"></a>

```java
public java.lang.String getLoadBalancingAnomalyMitigationInput();
```

- *Type:* java.lang.String

---

##### `loadBalancingCrossZoneEnabledInput`<sup>Optional</sup> <a name="loadBalancingCrossZoneEnabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingCrossZoneEnabledInput"></a>

```java
public java.lang.String getLoadBalancingCrossZoneEnabledInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `preserveClientIpInput`<sup>Optional</sup> <a name="preserveClientIpInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIpInput"></a>

```java
public java.lang.String getPreserveClientIpInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersionInput"></a>

```java
public java.lang.String getProtocolVersionInput();
```

- *Type:* java.lang.String

---

##### `proxyProtocolV2Input`<sup>Optional</sup> <a name="proxyProtocolV2Input" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2Input"></a>

```java
public java.lang.Object getProxyProtocolV2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `slowStartInput`<sup>Optional</sup> <a name="slowStartInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStartInput"></a>

```java
public java.lang.Number getSlowStartInput();
```

- *Type:* java.lang.Number

---

##### `stickinessInput`<sup>Optional</sup> <a name="stickinessInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickinessInput"></a>

```java
public LbTargetGroupStickiness getStickinessInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetFailoverInput`<sup>Optional</sup> <a name="targetFailoverInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailoverInput"></a>

```java
public java.lang.Object getTargetFailoverInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>>

---

##### `targetGroupHealthInput`<sup>Optional</sup> <a name="targetGroupHealthInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetGroupHealthInput"></a>

```java
public LbTargetGroupTargetGroupHealth getTargetGroupHealthInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

---

##### `targetHealthStateInput`<sup>Optional</sup> <a name="targetHealthStateInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetHealthStateInput"></a>

```java
public java.lang.Object getTargetHealthStateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>>

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetTypeInput"></a>

```java
public java.lang.String getTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `connectionTermination`<sup>Required</sup> <a name="connectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTermination"></a>

```java
public java.lang.Object getConnectionTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deregistrationDelay`<sup>Required</sup> <a name="deregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelay"></a>

```java
public java.lang.String getDeregistrationDelay();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `lambdaMultiValueHeadersEnabled`<sup>Required</sup> <a name="lambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabled"></a>

```java
public java.lang.Object getLambdaMultiValueHeadersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loadBalancingAlgorithmType`<sup>Required</sup> <a name="loadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmType"></a>

```java
public java.lang.String getLoadBalancingAlgorithmType();
```

- *Type:* java.lang.String

---

##### `loadBalancingAnomalyMitigation`<sup>Required</sup> <a name="loadBalancingAnomalyMitigation" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAnomalyMitigation"></a>

```java
public java.lang.String getLoadBalancingAnomalyMitigation();
```

- *Type:* java.lang.String

---

##### `loadBalancingCrossZoneEnabled`<sup>Required</sup> <a name="loadBalancingCrossZoneEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingCrossZoneEnabled"></a>

```java
public java.lang.String getLoadBalancingCrossZoneEnabled();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `preserveClientIp`<sup>Required</sup> <a name="preserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIp"></a>

```java
public java.lang.String getPreserveClientIp();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

---

##### `proxyProtocolV2`<sup>Required</sup> <a name="proxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2"></a>

```java
public java.lang.Object getProxyProtocolV2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `slowStart`<sup>Required</sup> <a name="slowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStart"></a>

```java
public java.lang.Number getSlowStart();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LbTargetGroupConfig <a name="LbTargetGroupConfig" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupConfig;

LbTargetGroupConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
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
//  .healthCheck(LbTargetGroupHealthCheck)
//  .id(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .lambdaMultiValueHeadersEnabled(java.lang.Boolean)
//  .lambdaMultiValueHeadersEnabled(IResolvable)
//  .loadBalancingAlgorithmType(java.lang.String)
//  .loadBalancingAnomalyMitigation(java.lang.String)
//  .loadBalancingCrossZoneEnabled(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .port(java.lang.Number)
//  .preserveClientIp(java.lang.String)
//  .protocol(java.lang.String)
//  .protocolVersion(java.lang.String)
//  .proxyProtocolV2(java.lang.Boolean)
//  .proxyProtocolV2(IResolvable)
//  .region(java.lang.String)
//  .slowStart(java.lang.Number)
//  .stickiness(LbTargetGroupStickiness)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .targetFailover(IResolvable)
//  .targetFailover(java.util.List<LbTargetGroupTargetFailover>)
//  .targetGroupHealth(LbTargetGroupTargetGroupHealth)
//  .targetHealthState(IResolvable)
//  .targetHealthState(java.util.List<LbTargetGroupTargetHealthState>)
//  .targetType(java.lang.String)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connectionTermination">connectionTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#connection_termination LbTargetGroup#connection_termination}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.deregistrationDelay">deregistrationDelay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#deregistration_delay LbTargetGroup#deregistration_delay}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#id LbTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#ip_address_type LbTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled">lambdaMultiValueHeadersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAlgorithmType">loadBalancingAlgorithmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAnomalyMitigation">loadBalancingAnomalyMitigation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_anomaly_mitigation LbTargetGroup#load_balancing_anomaly_mitigation}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingCrossZoneEnabled">loadBalancingCrossZoneEnabled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_cross_zone_enabled LbTargetGroup#load_balancing_cross_zone_enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#name LbTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#name_prefix LbTargetGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#port LbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.preserveClientIp">preserveClientIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#preserve_client_ip LbTargetGroup#preserve_client_ip}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol_version LbTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.proxyProtocolV2">proxyProtocolV2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.slowStart">slowStart</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#slow_start LbTargetGroup#slow_start}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | stickiness block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#tags LbTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#tags_all LbTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetFailover">targetFailover</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>></code> | target_failover block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetGroupHealth">targetGroupHealth</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a></code> | target_group_health block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetHealthState">targetHealthState</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>></code> | target_health_state block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_type LbTargetGroup#target_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#vpc_id LbTargetGroup#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionTermination`<sup>Optional</sup> <a name="connectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connectionTermination"></a>

```java
public java.lang.Object getConnectionTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#connection_termination LbTargetGroup#connection_termination}.

---

##### `deregistrationDelay`<sup>Optional</sup> <a name="deregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.deregistrationDelay"></a>

```java
public java.lang.String getDeregistrationDelay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#deregistration_delay LbTargetGroup#deregistration_delay}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.healthCheck"></a>

```java
public LbTargetGroupHealthCheck getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#health_check LbTargetGroup#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#id LbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#ip_address_type LbTargetGroup#ip_address_type}.

---

##### `lambdaMultiValueHeadersEnabled`<sup>Optional</sup> <a name="lambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled"></a>

```java
public java.lang.Object getLambdaMultiValueHeadersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}.

---

##### `loadBalancingAlgorithmType`<sup>Optional</sup> <a name="loadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAlgorithmType"></a>

```java
public java.lang.String getLoadBalancingAlgorithmType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}.

---

##### `loadBalancingAnomalyMitigation`<sup>Optional</sup> <a name="loadBalancingAnomalyMitigation" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAnomalyMitigation"></a>

```java
public java.lang.String getLoadBalancingAnomalyMitigation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_anomaly_mitigation LbTargetGroup#load_balancing_anomaly_mitigation}.

---

##### `loadBalancingCrossZoneEnabled`<sup>Optional</sup> <a name="loadBalancingCrossZoneEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingCrossZoneEnabled"></a>

```java
public java.lang.String getLoadBalancingCrossZoneEnabled();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#load_balancing_cross_zone_enabled LbTargetGroup#load_balancing_cross_zone_enabled}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#name LbTargetGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#name_prefix LbTargetGroup#name_prefix}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#port LbTargetGroup#port}.

---

##### `preserveClientIp`<sup>Optional</sup> <a name="preserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.preserveClientIp"></a>

```java
public java.lang.String getPreserveClientIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#preserve_client_ip LbTargetGroup#preserve_client_ip}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol_version LbTargetGroup#protocol_version}.

---

##### `proxyProtocolV2`<sup>Optional</sup> <a name="proxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.proxyProtocolV2"></a>

```java
public java.lang.Object getProxyProtocolV2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#region LbTargetGroup#region}

---

##### `slowStart`<sup>Optional</sup> <a name="slowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.slowStart"></a>

```java
public java.lang.Number getSlowStart();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#slow_start LbTargetGroup#slow_start}.

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.stickiness"></a>

```java
public LbTargetGroupStickiness getStickiness();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#stickiness LbTargetGroup#stickiness}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#tags LbTargetGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#tags_all LbTargetGroup#tags_all}.

---

##### `targetFailover`<sup>Optional</sup> <a name="targetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetFailover"></a>

```java
public java.lang.Object getTargetFailover();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>>

target_failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_failover LbTargetGroup#target_failover}

---

##### `targetGroupHealth`<sup>Optional</sup> <a name="targetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetGroupHealth"></a>

```java
public LbTargetGroupTargetGroupHealth getTargetGroupHealth();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

target_group_health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_group_health LbTargetGroup#target_group_health}

---

##### `targetHealthState`<sup>Optional</sup> <a name="targetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetHealthState"></a>

```java
public java.lang.Object getTargetHealthState();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>>

target_health_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_health_state LbTargetGroup#target_health_state}

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#target_type LbTargetGroup#target_type}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#vpc_id LbTargetGroup#vpc_id}.

---

### LbTargetGroupHealthCheck <a name="LbTargetGroupHealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupHealthCheck;

LbTargetGroupHealthCheck.builder()
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
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#healthy_threshold LbTargetGroup#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#interval LbTargetGroup#interval}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.matcher">matcher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#matcher LbTargetGroup#matcher}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#path LbTargetGroup#path}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.port">port</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#port LbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#timeout LbTargetGroup#timeout}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#unhealthy_threshold LbTargetGroup#unhealthy_threshold}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}.

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#healthy_threshold LbTargetGroup#healthy_threshold}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#interval LbTargetGroup#interval}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#matcher LbTargetGroup#matcher}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#path LbTargetGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#port LbTargetGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#timeout LbTargetGroup#timeout}.

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#unhealthy_threshold LbTargetGroup#unhealthy_threshold}.

---

### LbTargetGroupStickiness <a name="LbTargetGroupStickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupStickiness;

LbTargetGroupStickiness.builder()
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
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#type LbTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieDuration">cookieDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#cookie_duration LbTargetGroup#cookie_duration}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#cookie_name LbTargetGroup#cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#type LbTargetGroup#type}.

---

##### `cookieDuration`<sup>Optional</sup> <a name="cookieDuration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieDuration"></a>

```java
public java.lang.Number getCookieDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#cookie_duration LbTargetGroup#cookie_duration}.

---

##### `cookieName`<sup>Optional</sup> <a name="cookieName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#cookie_name LbTargetGroup#cookie_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}.

---

### LbTargetGroupTargetFailover <a name="LbTargetGroupTargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupTargetFailover;

LbTargetGroupTargetFailover.builder()
    .onDeregistration(java.lang.String)
    .onUnhealthy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onDeregistration">onDeregistration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#on_deregistration LbTargetGroup#on_deregistration}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onUnhealthy">onUnhealthy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#on_unhealthy LbTargetGroup#on_unhealthy}. |

---

##### `onDeregistration`<sup>Required</sup> <a name="onDeregistration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onDeregistration"></a>

```java
public java.lang.String getOnDeregistration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#on_deregistration LbTargetGroup#on_deregistration}.

---

##### `onUnhealthy`<sup>Required</sup> <a name="onUnhealthy" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onUnhealthy"></a>

```java
public java.lang.String getOnUnhealthy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#on_unhealthy LbTargetGroup#on_unhealthy}.

---

### LbTargetGroupTargetGroupHealth <a name="LbTargetGroupTargetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupTargetGroupHealth;

LbTargetGroupTargetGroupHealth.builder()
//  .dnsFailover(LbTargetGroupTargetGroupHealthDnsFailover)
//  .unhealthyStateRouting(LbTargetGroupTargetGroupHealthUnhealthyStateRouting)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.property.dnsFailover">dnsFailover</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a></code> | dns_failover block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.property.unhealthyStateRouting">unhealthyStateRouting</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a></code> | unhealthy_state_routing block. |

---

##### `dnsFailover`<sup>Optional</sup> <a name="dnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.property.dnsFailover"></a>

```java
public LbTargetGroupTargetGroupHealthDnsFailover getDnsFailover();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a>

dns_failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#dns_failover LbTargetGroup#dns_failover}

---

##### `unhealthyStateRouting`<sup>Optional</sup> <a name="unhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.property.unhealthyStateRouting"></a>

```java
public LbTargetGroupTargetGroupHealthUnhealthyStateRouting getUnhealthyStateRouting();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

unhealthy_state_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#unhealthy_state_routing LbTargetGroup#unhealthy_state_routing}

---

### LbTargetGroupTargetGroupHealthDnsFailover <a name="LbTargetGroupTargetGroupHealthDnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupTargetGroupHealthDnsFailover;

LbTargetGroupTargetGroupHealthDnsFailover.builder()
//  .minimumHealthyTargetsCount(java.lang.String)
//  .minimumHealthyTargetsPercentage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsCount">minimumHealthyTargetsCount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsPercentage">minimumHealthyTargetsPercentage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}. |

---

##### `minimumHealthyTargetsCount`<sup>Optional</sup> <a name="minimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsCount"></a>

```java
public java.lang.String getMinimumHealthyTargetsCount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}.

---

##### `minimumHealthyTargetsPercentage`<sup>Optional</sup> <a name="minimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsPercentage"></a>

```java
public java.lang.String getMinimumHealthyTargetsPercentage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}.

---

### LbTargetGroupTargetGroupHealthUnhealthyStateRouting <a name="LbTargetGroupTargetGroupHealthUnhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupTargetGroupHealthUnhealthyStateRouting;

LbTargetGroupTargetGroupHealthUnhealthyStateRouting.builder()
//  .minimumHealthyTargetsCount(java.lang.Number)
//  .minimumHealthyTargetsPercentage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsCount">minimumHealthyTargetsCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsPercentage">minimumHealthyTargetsPercentage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}. |

---

##### `minimumHealthyTargetsCount`<sup>Optional</sup> <a name="minimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsCount"></a>

```java
public java.lang.Number getMinimumHealthyTargetsCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}.

---

##### `minimumHealthyTargetsPercentage`<sup>Optional</sup> <a name="minimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsPercentage"></a>

```java
public java.lang.String getMinimumHealthyTargetsPercentage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}.

---

### LbTargetGroupTargetHealthState <a name="LbTargetGroupTargetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupTargetHealthState;

LbTargetGroupTargetHealthState.builder()
    .enableUnhealthyConnectionTermination(java.lang.Boolean)
    .enableUnhealthyConnectionTermination(IResolvable)
//  .unhealthyDrainingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.property.enableUnhealthyConnectionTermination">enableUnhealthyConnectionTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#enable_unhealthy_connection_termination LbTargetGroup#enable_unhealthy_connection_termination}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.property.unhealthyDrainingInterval">unhealthyDrainingInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#unhealthy_draining_interval LbTargetGroup#unhealthy_draining_interval}. |

---

##### `enableUnhealthyConnectionTermination`<sup>Required</sup> <a name="enableUnhealthyConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.property.enableUnhealthyConnectionTermination"></a>

```java
public java.lang.Object getEnableUnhealthyConnectionTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#enable_unhealthy_connection_termination LbTargetGroup#enable_unhealthy_connection_termination}.

---

##### `unhealthyDrainingInterval`<sup>Optional</sup> <a name="unhealthyDrainingInterval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.property.unhealthyDrainingInterval"></a>

```java
public java.lang.Number getUnhealthyDrainingInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_target_group#unhealthy_draining_interval LbTargetGroup#unhealthy_draining_interval}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbTargetGroupHealthCheckOutputReference <a name="LbTargetGroupHealthCheckOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupHealthCheckOutputReference;

new LbTargetGroupHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetHealthyThreshold"></a>

```java
public void resetHealthyThreshold()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetMatcher` <a name="resetMatcher" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetMatcher"></a>

```java
public void resetMatcher()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```java
public void resetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcherInput">matcherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcher">matcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput"></a>

```java
public java.lang.Number getHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcherInput"></a>

```java
public java.lang.String getMatcherInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```java
public java.lang.Number getUnhealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.internalValue"></a>

```java
public LbTargetGroupHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

---


### LbTargetGroupStickinessOutputReference <a name="LbTargetGroupStickinessOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupStickinessOutputReference;

new LbTargetGroupStickinessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieDuration">resetCookieDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieName">resetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookieDuration` <a name="resetCookieDuration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieDuration"></a>

```java
public void resetCookieDuration()
```

##### `resetCookieName` <a name="resetCookieName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieName"></a>

```java
public void resetCookieName()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDurationInput">cookieDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDuration">cookieDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieDurationInput`<sup>Optional</sup> <a name="cookieDurationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDurationInput"></a>

```java
public java.lang.Number getCookieDurationInput();
```

- *Type:* java.lang.Number

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieNameInput"></a>

```java
public java.lang.String getCookieNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `cookieDuration`<sup>Required</sup> <a name="cookieDuration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDuration"></a>

```java
public java.lang.Number getCookieDuration();
```

- *Type:* java.lang.Number

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.internalValue"></a>

```java
public LbTargetGroupStickiness getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

---


### LbTargetGroupTargetFailoverList <a name="LbTargetGroupTargetFailoverList" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupTargetFailoverList;

new LbTargetGroupTargetFailoverList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.get"></a>

```java
public LbTargetGroupTargetFailoverOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>>

---


### LbTargetGroupTargetFailoverOutputReference <a name="LbTargetGroupTargetFailoverOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupTargetFailoverOutputReference;

new LbTargetGroupTargetFailoverOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput">onDeregistrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput">onUnhealthyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistration">onDeregistration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthy">onUnhealthy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onDeregistrationInput`<sup>Optional</sup> <a name="onDeregistrationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput"></a>

```java
public java.lang.String getOnDeregistrationInput();
```

- *Type:* java.lang.String

---

##### `onUnhealthyInput`<sup>Optional</sup> <a name="onUnhealthyInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput"></a>

```java
public java.lang.String getOnUnhealthyInput();
```

- *Type:* java.lang.String

---

##### `onDeregistration`<sup>Required</sup> <a name="onDeregistration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistration"></a>

```java
public java.lang.String getOnDeregistration();
```

- *Type:* java.lang.String

---

##### `onUnhealthy`<sup>Required</sup> <a name="onUnhealthy" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthy"></a>

```java
public java.lang.String getOnUnhealthy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover">LbTargetGroupTargetFailover</a>

---


### LbTargetGroupTargetGroupHealthDnsFailoverOutputReference <a name="LbTargetGroupTargetGroupHealthDnsFailoverOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference;

new LbTargetGroupTargetGroupHealthDnsFailoverOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsCount">resetMinimumHealthyTargetsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsPercentage">resetMinimumHealthyTargetsPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumHealthyTargetsCount` <a name="resetMinimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsCount"></a>

```java
public void resetMinimumHealthyTargetsCount()
```

##### `resetMinimumHealthyTargetsPercentage` <a name="resetMinimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsPercentage"></a>

```java
public void resetMinimumHealthyTargetsPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCountInput">minimumHealthyTargetsCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentageInput">minimumHealthyTargetsPercentageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCount">minimumHealthyTargetsCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentage">minimumHealthyTargetsPercentage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumHealthyTargetsCountInput`<sup>Optional</sup> <a name="minimumHealthyTargetsCountInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCountInput"></a>

```java
public java.lang.String getMinimumHealthyTargetsCountInput();
```

- *Type:* java.lang.String

---

##### `minimumHealthyTargetsPercentageInput`<sup>Optional</sup> <a name="minimumHealthyTargetsPercentageInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentageInput"></a>

```java
public java.lang.String getMinimumHealthyTargetsPercentageInput();
```

- *Type:* java.lang.String

---

##### `minimumHealthyTargetsCount`<sup>Required</sup> <a name="minimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCount"></a>

```java
public java.lang.String getMinimumHealthyTargetsCount();
```

- *Type:* java.lang.String

---

##### `minimumHealthyTargetsPercentage`<sup>Required</sup> <a name="minimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentage"></a>

```java
public java.lang.String getMinimumHealthyTargetsPercentage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.internalValue"></a>

```java
public LbTargetGroupTargetGroupHealthDnsFailover getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a>

---


### LbTargetGroupTargetGroupHealthOutputReference <a name="LbTargetGroupTargetGroupHealthOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupTargetGroupHealthOutputReference;

new LbTargetGroupTargetGroupHealthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putDnsFailover">putDnsFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting">putUnhealthyStateRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resetDnsFailover">resetDnsFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resetUnhealthyStateRouting">resetUnhealthyStateRouting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsFailover` <a name="putDnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putDnsFailover"></a>

```java
public void putDnsFailover(LbTargetGroupTargetGroupHealthDnsFailover value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putDnsFailover.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a>

---

##### `putUnhealthyStateRouting` <a name="putUnhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting"></a>

```java
public void putUnhealthyStateRouting(LbTargetGroupTargetGroupHealthUnhealthyStateRouting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

---

##### `resetDnsFailover` <a name="resetDnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resetDnsFailover"></a>

```java
public void resetDnsFailover()
```

##### `resetUnhealthyStateRouting` <a name="resetUnhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resetUnhealthyStateRouting"></a>

```java
public void resetUnhealthyStateRouting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.dnsFailover">dnsFailover</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference">LbTargetGroupTargetGroupHealthDnsFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRouting">unhealthyStateRouting</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference">LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.dnsFailoverInput">dnsFailoverInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRoutingInput">unhealthyStateRoutingInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsFailover`<sup>Required</sup> <a name="dnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.dnsFailover"></a>

```java
public LbTargetGroupTargetGroupHealthDnsFailoverOutputReference getDnsFailover();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference">LbTargetGroupTargetGroupHealthDnsFailoverOutputReference</a>

---

##### `unhealthyStateRouting`<sup>Required</sup> <a name="unhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRouting"></a>

```java
public LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference getUnhealthyStateRouting();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference">LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference</a>

---

##### `dnsFailoverInput`<sup>Optional</sup> <a name="dnsFailoverInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.dnsFailoverInput"></a>

```java
public LbTargetGroupTargetGroupHealthDnsFailover getDnsFailoverInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a>

---

##### `unhealthyStateRoutingInput`<sup>Optional</sup> <a name="unhealthyStateRoutingInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRoutingInput"></a>

```java
public LbTargetGroupTargetGroupHealthUnhealthyStateRouting getUnhealthyStateRoutingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.internalValue"></a>

```java
public LbTargetGroupTargetGroupHealth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

---


### LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference <a name="LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference;

new LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsCount">resetMinimumHealthyTargetsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsPercentage">resetMinimumHealthyTargetsPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumHealthyTargetsCount` <a name="resetMinimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsCount"></a>

```java
public void resetMinimumHealthyTargetsCount()
```

##### `resetMinimumHealthyTargetsPercentage` <a name="resetMinimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsPercentage"></a>

```java
public void resetMinimumHealthyTargetsPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCountInput">minimumHealthyTargetsCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentageInput">minimumHealthyTargetsPercentageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCount">minimumHealthyTargetsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentage">minimumHealthyTargetsPercentage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumHealthyTargetsCountInput`<sup>Optional</sup> <a name="minimumHealthyTargetsCountInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCountInput"></a>

```java
public java.lang.Number getMinimumHealthyTargetsCountInput();
```

- *Type:* java.lang.Number

---

##### `minimumHealthyTargetsPercentageInput`<sup>Optional</sup> <a name="minimumHealthyTargetsPercentageInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentageInput"></a>

```java
public java.lang.String getMinimumHealthyTargetsPercentageInput();
```

- *Type:* java.lang.String

---

##### `minimumHealthyTargetsCount`<sup>Required</sup> <a name="minimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCount"></a>

```java
public java.lang.Number getMinimumHealthyTargetsCount();
```

- *Type:* java.lang.Number

---

##### `minimumHealthyTargetsPercentage`<sup>Required</sup> <a name="minimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentage"></a>

```java
public java.lang.String getMinimumHealthyTargetsPercentage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.internalValue"></a>

```java
public LbTargetGroupTargetGroupHealthUnhealthyStateRouting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

---


### LbTargetGroupTargetHealthStateList <a name="LbTargetGroupTargetHealthStateList" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupTargetHealthStateList;

new LbTargetGroupTargetHealthStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.get"></a>

```java
public LbTargetGroupTargetHealthStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>>

---


### LbTargetGroupTargetHealthStateOutputReference <a name="LbTargetGroupTargetHealthStateOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_target_group.LbTargetGroupTargetHealthStateOutputReference;

new LbTargetGroupTargetHealthStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resetUnhealthyDrainingInterval">resetUnhealthyDrainingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnhealthyDrainingInterval` <a name="resetUnhealthyDrainingInterval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resetUnhealthyDrainingInterval"></a>

```java
public void resetUnhealthyDrainingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTerminationInput">enableUnhealthyConnectionTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.unhealthyDrainingIntervalInput">unhealthyDrainingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTermination">enableUnhealthyConnectionTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.unhealthyDrainingInterval">unhealthyDrainingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableUnhealthyConnectionTerminationInput`<sup>Optional</sup> <a name="enableUnhealthyConnectionTerminationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTerminationInput"></a>

```java
public java.lang.Object getEnableUnhealthyConnectionTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unhealthyDrainingIntervalInput`<sup>Optional</sup> <a name="unhealthyDrainingIntervalInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.unhealthyDrainingIntervalInput"></a>

```java
public java.lang.Number getUnhealthyDrainingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `enableUnhealthyConnectionTermination`<sup>Required</sup> <a name="enableUnhealthyConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTermination"></a>

```java
public java.lang.Object getEnableUnhealthyConnectionTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unhealthyDrainingInterval`<sup>Required</sup> <a name="unhealthyDrainingInterval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.unhealthyDrainingInterval"></a>

```java
public java.lang.Number getUnhealthyDrainingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState">LbTargetGroupTargetHealthState</a>

---




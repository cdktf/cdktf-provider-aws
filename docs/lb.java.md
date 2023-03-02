# `lb` Submodule <a name="`lb` Submodule" id="@cdktf/provider-aws.lb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lb <a name="Lb" id="@cdktf/provider-aws.lb.Lb"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb aws_lb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lb.Lb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb.Lb;

Lb.Builder.create(Construct scope, java.lang.String id)
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
//  .accessLogs(LbAccessLogs)
//  .customerOwnedIpv4Pool(java.lang.String)
//  .desyncMitigationMode(java.lang.String)
//  .dropInvalidHeaderFields(java.lang.Boolean)
//  .dropInvalidHeaderFields(IResolvable)
//  .enableCrossZoneLoadBalancing(java.lang.Boolean)
//  .enableCrossZoneLoadBalancing(IResolvable)
//  .enableDeletionProtection(java.lang.Boolean)
//  .enableDeletionProtection(IResolvable)
//  .enableHttp2(java.lang.Boolean)
//  .enableHttp2(IResolvable)
//  .enableWafFailOpen(java.lang.Boolean)
//  .enableWafFailOpen(IResolvable)
//  .id(java.lang.String)
//  .idleTimeout(java.lang.Number)
//  .internal(java.lang.Boolean)
//  .internal(IResolvable)
//  .ipAddressType(java.lang.String)
//  .loadBalancerType(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .preserveHostHeader(java.lang.Boolean)
//  .preserveHostHeader(IResolvable)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnetMapping(IResolvable)
//  .subnetMapping(java.util.List<LbSubnetMapping>)
//  .subnets(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LbTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.accessLogs">accessLogs</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.desyncMitigationMode">desyncMitigationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#desync_mitigation_mode Lb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.dropInvalidHeaderFields">dropInvalidHeaderFields</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#drop_invalid_header_fields Lb#drop_invalid_header_fields}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableCrossZoneLoadBalancing">enableCrossZoneLoadBalancing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableDeletionProtection">enableDeletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_deletion_protection Lb#enable_deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableHttp2">enableHttp2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_http2 Lb#enable_http2}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableWafFailOpen">enableWafFailOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_waf_fail_open Lb#enable_waf_fail_open}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#id Lb#id}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#idle_timeout Lb#idle_timeout}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.internal">internal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#internal Lb#internal}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#ip_address_type Lb#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.loadBalancerType">loadBalancerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#load_balancer_type Lb#load_balancer_type}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name Lb#name}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name_prefix Lb#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.preserveHostHeader">preserveHostHeader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#preserve_host_header Lb#preserve_host_header}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#security_groups Lb#security_groups}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.subnetMapping">subnetMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>></code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnets Lb#subnets}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags Lb#tags}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags_all Lb#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLogs`<sup>Optional</sup> <a name="accessLogs" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.accessLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#access_logs Lb#access_logs}

---

##### `customerOwnedIpv4Pool`<sup>Optional</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.customerOwnedIpv4Pool"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}.

---

##### `desyncMitigationMode`<sup>Optional</sup> <a name="desyncMitigationMode" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.desyncMitigationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#desync_mitigation_mode Lb#desync_mitigation_mode}.

---

##### `dropInvalidHeaderFields`<sup>Optional</sup> <a name="dropInvalidHeaderFields" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.dropInvalidHeaderFields"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#drop_invalid_header_fields Lb#drop_invalid_header_fields}.

---

##### `enableCrossZoneLoadBalancing`<sup>Optional</sup> <a name="enableCrossZoneLoadBalancing" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableCrossZoneLoadBalancing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}.

---

##### `enableDeletionProtection`<sup>Optional</sup> <a name="enableDeletionProtection" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableDeletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_deletion_protection Lb#enable_deletion_protection}.

---

##### `enableHttp2`<sup>Optional</sup> <a name="enableHttp2" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableHttp2"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_http2 Lb#enable_http2}.

---

##### `enableWafFailOpen`<sup>Optional</sup> <a name="enableWafFailOpen" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableWafFailOpen"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_waf_fail_open Lb#enable_waf_fail_open}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#id Lb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.idleTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#idle_timeout Lb#idle_timeout}.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.internal"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#internal Lb#internal}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#ip_address_type Lb#ip_address_type}.

---

##### `loadBalancerType`<sup>Optional</sup> <a name="loadBalancerType" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.loadBalancerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#load_balancer_type Lb#load_balancer_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name Lb#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name_prefix Lb#name_prefix}.

---

##### `preserveHostHeader`<sup>Optional</sup> <a name="preserveHostHeader" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.preserveHostHeader"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#preserve_host_header Lb#preserve_host_header}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#security_groups Lb#security_groups}.

---

##### `subnetMapping`<sup>Optional</sup> <a name="subnetMapping" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.subnetMapping"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>>

subnet_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnet_mapping Lb#subnet_mapping}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.subnets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnets Lb#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags Lb#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags_all Lb#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#timeouts Lb#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.Lb.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.putAccessLogs">putAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.putSubnetMapping">putSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetAccessLogs">resetAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetCustomerOwnedIpv4Pool">resetCustomerOwnedIpv4Pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetDesyncMitigationMode">resetDesyncMitigationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetDropInvalidHeaderFields">resetDropInvalidHeaderFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetEnableCrossZoneLoadBalancing">resetEnableCrossZoneLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetEnableDeletionProtection">resetEnableDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetEnableHttp2">resetEnableHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetEnableWafFailOpen">resetEnableWafFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetInternal">resetInternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetLoadBalancerType">resetLoadBalancerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetPreserveHostHeader">resetPreserveHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetSubnetMapping">resetSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lb.Lb.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lb.Lb.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lb.Lb.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lb.Lb.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lb.Lb.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lb.Lb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lb.Lb.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lb.Lb.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lb.Lb.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lb.Lb.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.Lb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lb.Lb.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.Lb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lb.Lb.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.Lb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lb.Lb.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.Lb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lb.Lb.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.Lb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lb.Lb.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.Lb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lb.Lb.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.Lb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lb.Lb.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.Lb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lb.Lb.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.Lb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lb.Lb.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.Lb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAccessLogs` <a name="putAccessLogs" id="@cdktf/provider-aws.lb.Lb.putAccessLogs"></a>

```java
public void putAccessLogs(LbAccessLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lb.Lb.putAccessLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a>

---

##### `putSubnetMapping` <a name="putSubnetMapping" id="@cdktf/provider-aws.lb.Lb.putSubnetMapping"></a>

```java
public void putSubnetMapping(IResolvable OR java.util.List<LbSubnetMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lb.Lb.putSubnetMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lb.Lb.putTimeouts"></a>

```java
public void putTimeouts(LbTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lb.Lb.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a>

---

##### `resetAccessLogs` <a name="resetAccessLogs" id="@cdktf/provider-aws.lb.Lb.resetAccessLogs"></a>

```java
public void resetAccessLogs()
```

##### `resetCustomerOwnedIpv4Pool` <a name="resetCustomerOwnedIpv4Pool" id="@cdktf/provider-aws.lb.Lb.resetCustomerOwnedIpv4Pool"></a>

```java
public void resetCustomerOwnedIpv4Pool()
```

##### `resetDesyncMitigationMode` <a name="resetDesyncMitigationMode" id="@cdktf/provider-aws.lb.Lb.resetDesyncMitigationMode"></a>

```java
public void resetDesyncMitigationMode()
```

##### `resetDropInvalidHeaderFields` <a name="resetDropInvalidHeaderFields" id="@cdktf/provider-aws.lb.Lb.resetDropInvalidHeaderFields"></a>

```java
public void resetDropInvalidHeaderFields()
```

##### `resetEnableCrossZoneLoadBalancing` <a name="resetEnableCrossZoneLoadBalancing" id="@cdktf/provider-aws.lb.Lb.resetEnableCrossZoneLoadBalancing"></a>

```java
public void resetEnableCrossZoneLoadBalancing()
```

##### `resetEnableDeletionProtection` <a name="resetEnableDeletionProtection" id="@cdktf/provider-aws.lb.Lb.resetEnableDeletionProtection"></a>

```java
public void resetEnableDeletionProtection()
```

##### `resetEnableHttp2` <a name="resetEnableHttp2" id="@cdktf/provider-aws.lb.Lb.resetEnableHttp2"></a>

```java
public void resetEnableHttp2()
```

##### `resetEnableWafFailOpen` <a name="resetEnableWafFailOpen" id="@cdktf/provider-aws.lb.Lb.resetEnableWafFailOpen"></a>

```java
public void resetEnableWafFailOpen()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lb.Lb.resetId"></a>

```java
public void resetId()
```

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktf/provider-aws.lb.Lb.resetIdleTimeout"></a>

```java
public void resetIdleTimeout()
```

##### `resetInternal` <a name="resetInternal" id="@cdktf/provider-aws.lb.Lb.resetInternal"></a>

```java
public void resetInternal()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-aws.lb.Lb.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetLoadBalancerType` <a name="resetLoadBalancerType" id="@cdktf/provider-aws.lb.Lb.resetLoadBalancerType"></a>

```java
public void resetLoadBalancerType()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.lb.Lb.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.lb.Lb.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPreserveHostHeader` <a name="resetPreserveHostHeader" id="@cdktf/provider-aws.lb.Lb.resetPreserveHostHeader"></a>

```java
public void resetPreserveHostHeader()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.lb.Lb.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnetMapping` <a name="resetSubnetMapping" id="@cdktf/provider-aws.lb.Lb.resetSubnetMapping"></a>

```java
public void resetSubnetMapping()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-aws.lb.Lb.resetSubnets"></a>

```java
public void resetSubnets()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lb.Lb.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.lb.Lb.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lb.Lb.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.Lb.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lb.Lb.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb.Lb;

Lb.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lb.Lb.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lb.Lb.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb.Lb;

Lb.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lb.Lb.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lb.Lb.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb.Lb;

Lb.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lb.Lb.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.accessLogs">accessLogs</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference">LbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.arnSuffix">arnSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.subnetMapping">subnetMapping</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList">LbSubnetMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference">LbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.accessLogsInput">accessLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.customerOwnedIpv4PoolInput">customerOwnedIpv4PoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.desyncMitigationModeInput">desyncMitigationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.dropInvalidHeaderFieldsInput">dropInvalidHeaderFieldsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableCrossZoneLoadBalancingInput">enableCrossZoneLoadBalancingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableDeletionProtectionInput">enableDeletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableHttp2Input">enableHttp2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableWafFailOpenInput">enableWafFailOpenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.internalInput">internalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.loadBalancerTypeInput">loadBalancerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.preserveHostHeaderInput">preserveHostHeaderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.subnetMappingInput">subnetMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.desyncMitigationMode">desyncMitigationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.dropInvalidHeaderFields">dropInvalidHeaderFields</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableCrossZoneLoadBalancing">enableCrossZoneLoadBalancing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableDeletionProtection">enableDeletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableHttp2">enableHttp2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableWafFailOpen">enableWafFailOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.internal">internal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.loadBalancerType">loadBalancerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.preserveHostHeader">preserveHostHeader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lb.Lb.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lb.Lb.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lb.Lb.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lb.Lb.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lb.Lb.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lb.Lb.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lb.Lb.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lb.Lb.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lb.Lb.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lb.Lb.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lb.Lb.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lb.Lb.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lb.Lb.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lb.Lb.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLogs`<sup>Required</sup> <a name="accessLogs" id="@cdktf/provider-aws.lb.Lb.property.accessLogs"></a>

```java
public LbAccessLogsOutputReference getAccessLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference">LbAccessLogsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lb.Lb.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `arnSuffix`<sup>Required</sup> <a name="arnSuffix" id="@cdktf/provider-aws.lb.Lb.property.arnSuffix"></a>

```java
public java.lang.String getArnSuffix();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.lb.Lb.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `subnetMapping`<sup>Required</sup> <a name="subnetMapping" id="@cdktf/provider-aws.lb.Lb.property.subnetMapping"></a>

```java
public LbSubnetMappingList getSubnetMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbSubnetMappingList">LbSubnetMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lb.Lb.property.timeouts"></a>

```java
public LbTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference">LbTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.lb.Lb.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.lb.Lb.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `accessLogsInput`<sup>Optional</sup> <a name="accessLogsInput" id="@cdktf/provider-aws.lb.Lb.property.accessLogsInput"></a>

```java
public LbAccessLogs getAccessLogsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a>

---

##### `customerOwnedIpv4PoolInput`<sup>Optional</sup> <a name="customerOwnedIpv4PoolInput" id="@cdktf/provider-aws.lb.Lb.property.customerOwnedIpv4PoolInput"></a>

```java
public java.lang.String getCustomerOwnedIpv4PoolInput();
```

- *Type:* java.lang.String

---

##### `desyncMitigationModeInput`<sup>Optional</sup> <a name="desyncMitigationModeInput" id="@cdktf/provider-aws.lb.Lb.property.desyncMitigationModeInput"></a>

```java
public java.lang.String getDesyncMitigationModeInput();
```

- *Type:* java.lang.String

---

##### `dropInvalidHeaderFieldsInput`<sup>Optional</sup> <a name="dropInvalidHeaderFieldsInput" id="@cdktf/provider-aws.lb.Lb.property.dropInvalidHeaderFieldsInput"></a>

```java
public java.lang.Object getDropInvalidHeaderFieldsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableCrossZoneLoadBalancingInput`<sup>Optional</sup> <a name="enableCrossZoneLoadBalancingInput" id="@cdktf/provider-aws.lb.Lb.property.enableCrossZoneLoadBalancingInput"></a>

```java
public java.lang.Object getEnableCrossZoneLoadBalancingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDeletionProtectionInput`<sup>Optional</sup> <a name="enableDeletionProtectionInput" id="@cdktf/provider-aws.lb.Lb.property.enableDeletionProtectionInput"></a>

```java
public java.lang.Object getEnableDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttp2Input`<sup>Optional</sup> <a name="enableHttp2Input" id="@cdktf/provider-aws.lb.Lb.property.enableHttp2Input"></a>

```java
public java.lang.Object getEnableHttp2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableWafFailOpenInput`<sup>Optional</sup> <a name="enableWafFailOpenInput" id="@cdktf/provider-aws.lb.Lb.property.enableWafFailOpenInput"></a>

```java
public java.lang.Object getEnableWafFailOpenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lb.Lb.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktf/provider-aws.lb.Lb.property.idleTimeoutInput"></a>

```java
public java.lang.Number getIdleTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `internalInput`<sup>Optional</sup> <a name="internalInput" id="@cdktf/provider-aws.lb.Lb.property.internalInput"></a>

```java
public java.lang.Object getInternalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.lb.Lb.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerTypeInput`<sup>Optional</sup> <a name="loadBalancerTypeInput" id="@cdktf/provider-aws.lb.Lb.property.loadBalancerTypeInput"></a>

```java
public java.lang.String getLoadBalancerTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lb.Lb.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.lb.Lb.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `preserveHostHeaderInput`<sup>Optional</sup> <a name="preserveHostHeaderInput" id="@cdktf/provider-aws.lb.Lb.property.preserveHostHeaderInput"></a>

```java
public java.lang.Object getPreserveHostHeaderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.lb.Lb.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetMappingInput`<sup>Optional</sup> <a name="subnetMappingInput" id="@cdktf/provider-aws.lb.Lb.property.subnetMappingInput"></a>

```java
public java.lang.Object getSubnetMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.lb.Lb.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.lb.Lb.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lb.Lb.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lb.Lb.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `customerOwnedIpv4Pool`<sup>Required</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/provider-aws.lb.Lb.property.customerOwnedIpv4Pool"></a>

```java
public java.lang.String getCustomerOwnedIpv4Pool();
```

- *Type:* java.lang.String

---

##### `desyncMitigationMode`<sup>Required</sup> <a name="desyncMitigationMode" id="@cdktf/provider-aws.lb.Lb.property.desyncMitigationMode"></a>

```java
public java.lang.String getDesyncMitigationMode();
```

- *Type:* java.lang.String

---

##### `dropInvalidHeaderFields`<sup>Required</sup> <a name="dropInvalidHeaderFields" id="@cdktf/provider-aws.lb.Lb.property.dropInvalidHeaderFields"></a>

```java
public java.lang.Object getDropInvalidHeaderFields();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableCrossZoneLoadBalancing`<sup>Required</sup> <a name="enableCrossZoneLoadBalancing" id="@cdktf/provider-aws.lb.Lb.property.enableCrossZoneLoadBalancing"></a>

```java
public java.lang.Object getEnableCrossZoneLoadBalancing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDeletionProtection`<sup>Required</sup> <a name="enableDeletionProtection" id="@cdktf/provider-aws.lb.Lb.property.enableDeletionProtection"></a>

```java
public java.lang.Object getEnableDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttp2`<sup>Required</sup> <a name="enableHttp2" id="@cdktf/provider-aws.lb.Lb.property.enableHttp2"></a>

```java
public java.lang.Object getEnableHttp2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableWafFailOpen`<sup>Required</sup> <a name="enableWafFailOpen" id="@cdktf/provider-aws.lb.Lb.property.enableWafFailOpen"></a>

```java
public java.lang.Object getEnableWafFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lb.Lb.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktf/provider-aws.lb.Lb.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-aws.lb.Lb.property.internal"></a>

```java
public java.lang.Object getInternal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.lb.Lb.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `loadBalancerType`<sup>Required</sup> <a name="loadBalancerType" id="@cdktf/provider-aws.lb.Lb.property.loadBalancerType"></a>

```java
public java.lang.String getLoadBalancerType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lb.Lb.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.lb.Lb.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `preserveHostHeader`<sup>Required</sup> <a name="preserveHostHeader" id="@cdktf/provider-aws.lb.Lb.property.preserveHostHeader"></a>

```java
public java.lang.Object getPreserveHostHeader();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.lb.Lb.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.lb.Lb.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lb.Lb.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lb.Lb.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lb.Lb.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LbAccessLogs <a name="LbAccessLogs" id="@cdktf/provider-aws.lb.LbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lb.LbAccessLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb.LbAccessLogs;

LbAccessLogs.builder()
    .bucket(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#bucket Lb#bucket}. |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enabled Lb#enabled}. |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#prefix Lb#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.lb.LbAccessLogs.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#bucket Lb#bucket}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lb.LbAccessLogs.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enabled Lb#enabled}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.lb.LbAccessLogs.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#prefix Lb#prefix}.

---

### LbConfig <a name="LbConfig" id="@cdktf/provider-aws.lb.LbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lb.LbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb.LbConfig;

LbConfig.builder()
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
//  .accessLogs(LbAccessLogs)
//  .customerOwnedIpv4Pool(java.lang.String)
//  .desyncMitigationMode(java.lang.String)
//  .dropInvalidHeaderFields(java.lang.Boolean)
//  .dropInvalidHeaderFields(IResolvable)
//  .enableCrossZoneLoadBalancing(java.lang.Boolean)
//  .enableCrossZoneLoadBalancing(IResolvable)
//  .enableDeletionProtection(java.lang.Boolean)
//  .enableDeletionProtection(IResolvable)
//  .enableHttp2(java.lang.Boolean)
//  .enableHttp2(IResolvable)
//  .enableWafFailOpen(java.lang.Boolean)
//  .enableWafFailOpen(IResolvable)
//  .id(java.lang.String)
//  .idleTimeout(java.lang.Number)
//  .internal(java.lang.Boolean)
//  .internal(IResolvable)
//  .ipAddressType(java.lang.String)
//  .loadBalancerType(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .preserveHostHeader(java.lang.Boolean)
//  .preserveHostHeader(IResolvable)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnetMapping(IResolvable)
//  .subnetMapping(java.util.List<LbSubnetMapping>)
//  .subnets(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LbTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.accessLogs">accessLogs</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.desyncMitigationMode">desyncMitigationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#desync_mitigation_mode Lb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.dropInvalidHeaderFields">dropInvalidHeaderFields</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#drop_invalid_header_fields Lb#drop_invalid_header_fields}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.enableCrossZoneLoadBalancing">enableCrossZoneLoadBalancing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.enableDeletionProtection">enableDeletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_deletion_protection Lb#enable_deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.enableHttp2">enableHttp2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_http2 Lb#enable_http2}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.enableWafFailOpen">enableWafFailOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_waf_fail_open Lb#enable_waf_fail_open}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#id Lb#id}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#idle_timeout Lb#idle_timeout}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.internal">internal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#internal Lb#internal}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#ip_address_type Lb#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.loadBalancerType">loadBalancerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#load_balancer_type Lb#load_balancer_type}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name Lb#name}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name_prefix Lb#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.preserveHostHeader">preserveHostHeader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#preserve_host_header Lb#preserve_host_header}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#security_groups Lb#security_groups}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.subnetMapping">subnetMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>></code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnets Lb#subnets}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags Lb#tags}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags_all Lb#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lb.LbConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lb.LbConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lb.LbConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lb.LbConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lb.LbConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lb.LbConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lb.LbConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLogs`<sup>Optional</sup> <a name="accessLogs" id="@cdktf/provider-aws.lb.LbConfig.property.accessLogs"></a>

```java
public LbAccessLogs getAccessLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#access_logs Lb#access_logs}

---

##### `customerOwnedIpv4Pool`<sup>Optional</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/provider-aws.lb.LbConfig.property.customerOwnedIpv4Pool"></a>

```java
public java.lang.String getCustomerOwnedIpv4Pool();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}.

---

##### `desyncMitigationMode`<sup>Optional</sup> <a name="desyncMitigationMode" id="@cdktf/provider-aws.lb.LbConfig.property.desyncMitigationMode"></a>

```java
public java.lang.String getDesyncMitigationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#desync_mitigation_mode Lb#desync_mitigation_mode}.

---

##### `dropInvalidHeaderFields`<sup>Optional</sup> <a name="dropInvalidHeaderFields" id="@cdktf/provider-aws.lb.LbConfig.property.dropInvalidHeaderFields"></a>

```java
public java.lang.Object getDropInvalidHeaderFields();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#drop_invalid_header_fields Lb#drop_invalid_header_fields}.

---

##### `enableCrossZoneLoadBalancing`<sup>Optional</sup> <a name="enableCrossZoneLoadBalancing" id="@cdktf/provider-aws.lb.LbConfig.property.enableCrossZoneLoadBalancing"></a>

```java
public java.lang.Object getEnableCrossZoneLoadBalancing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}.

---

##### `enableDeletionProtection`<sup>Optional</sup> <a name="enableDeletionProtection" id="@cdktf/provider-aws.lb.LbConfig.property.enableDeletionProtection"></a>

```java
public java.lang.Object getEnableDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_deletion_protection Lb#enable_deletion_protection}.

---

##### `enableHttp2`<sup>Optional</sup> <a name="enableHttp2" id="@cdktf/provider-aws.lb.LbConfig.property.enableHttp2"></a>

```java
public java.lang.Object getEnableHttp2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_http2 Lb#enable_http2}.

---

##### `enableWafFailOpen`<sup>Optional</sup> <a name="enableWafFailOpen" id="@cdktf/provider-aws.lb.LbConfig.property.enableWafFailOpen"></a>

```java
public java.lang.Object getEnableWafFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_waf_fail_open Lb#enable_waf_fail_open}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lb.LbConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#id Lb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-aws.lb.LbConfig.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#idle_timeout Lb#idle_timeout}.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-aws.lb.LbConfig.property.internal"></a>

```java
public java.lang.Object getInternal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#internal Lb#internal}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.lb.LbConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#ip_address_type Lb#ip_address_type}.

---

##### `loadBalancerType`<sup>Optional</sup> <a name="loadBalancerType" id="@cdktf/provider-aws.lb.LbConfig.property.loadBalancerType"></a>

```java
public java.lang.String getLoadBalancerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#load_balancer_type Lb#load_balancer_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lb.LbConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name Lb#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.lb.LbConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name_prefix Lb#name_prefix}.

---

##### `preserveHostHeader`<sup>Optional</sup> <a name="preserveHostHeader" id="@cdktf/provider-aws.lb.LbConfig.property.preserveHostHeader"></a>

```java
public java.lang.Object getPreserveHostHeader();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#preserve_host_header Lb#preserve_host_header}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.lb.LbConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#security_groups Lb#security_groups}.

---

##### `subnetMapping`<sup>Optional</sup> <a name="subnetMapping" id="@cdktf/provider-aws.lb.LbConfig.property.subnetMapping"></a>

```java
public java.lang.Object getSubnetMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>>

subnet_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnet_mapping Lb#subnet_mapping}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.lb.LbConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnets Lb#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lb.LbConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags Lb#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lb.LbConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags_all Lb#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lb.LbConfig.property.timeouts"></a>

```java
public LbTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#timeouts Lb#timeouts}

---

### LbSubnetMapping <a name="LbSubnetMapping" id="@cdktf/provider-aws.lb.LbSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lb.LbSubnetMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb.LbSubnetMapping;

LbSubnetMapping.builder()
    .subnetId(java.lang.String)
//  .allocationId(java.lang.String)
//  .ipv6Address(java.lang.String)
//  .privateIpv4Address(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMapping.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnet_id Lb#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMapping.property.allocationId">allocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#allocation_id Lb#allocation_id}. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMapping.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#ipv6_address Lb#ipv6_address}. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMapping.property.privateIpv4Address">privateIpv4Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#private_ipv4_address Lb#private_ipv4_address}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.lb.LbSubnetMapping.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnet_id Lb#subnet_id}.

---

##### `allocationId`<sup>Optional</sup> <a name="allocationId" id="@cdktf/provider-aws.lb.LbSubnetMapping.property.allocationId"></a>

```java
public java.lang.String getAllocationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#allocation_id Lb#allocation_id}.

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-aws.lb.LbSubnetMapping.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#ipv6_address Lb#ipv6_address}.

---

##### `privateIpv4Address`<sup>Optional</sup> <a name="privateIpv4Address" id="@cdktf/provider-aws.lb.LbSubnetMapping.property.privateIpv4Address"></a>

```java
public java.lang.String getPrivateIpv4Address();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#private_ipv4_address Lb#private_ipv4_address}.

---

### LbTimeouts <a name="LbTimeouts" id="@cdktf/provider-aws.lb.LbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lb.LbTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb.LbTimeouts;

LbTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#create Lb#create}. |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#delete Lb#delete}. |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#update Lb#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lb.LbTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#create Lb#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lb.LbTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#delete Lb#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lb.LbTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#update Lb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbAccessLogsOutputReference <a name="LbAccessLogsOutputReference" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb.LbAccessLogsOutputReference;

new LbAccessLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.internalValue"></a>

```java
public LbAccessLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a>

---


### LbSubnetMappingList <a name="LbSubnetMappingList" id="@cdktf/provider-aws.lb.LbSubnetMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb.LbSubnetMappingList;

new LbSubnetMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lb.LbSubnetMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lb.LbSubnetMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lb.LbSubnetMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lb.LbSubnetMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lb.LbSubnetMappingList.get"></a>

```java
public LbSubnetMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lb.LbSubnetMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lb.LbSubnetMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lb.LbSubnetMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lb.LbSubnetMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>>

---


### LbSubnetMappingOutputReference <a name="LbSubnetMappingOutputReference" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb.LbSubnetMappingOutputReference;

new LbSubnetMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resetAllocationId">resetAllocationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resetPrivateIpv4Address">resetPrivateIpv4Address</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocationId` <a name="resetAllocationId" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resetAllocationId"></a>

```java
public void resetAllocationId()
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```

##### `resetPrivateIpv4Address` <a name="resetPrivateIpv4Address" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resetPrivateIpv4Address"></a>

```java
public void resetPrivateIpv4Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.outpostId">outpostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.allocationIdInput">allocationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.privateIpv4AddressInput">privateIpv4AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.allocationId">allocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.privateIpv4Address">privateIpv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.outpostId"></a>

```java
public java.lang.String getOutpostId();
```

- *Type:* java.lang.String

---

##### `allocationIdInput`<sup>Optional</sup> <a name="allocationIdInput" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.allocationIdInput"></a>

```java
public java.lang.String getAllocationIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `privateIpv4AddressInput`<sup>Optional</sup> <a name="privateIpv4AddressInput" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.privateIpv4AddressInput"></a>

```java
public java.lang.String getPrivateIpv4AddressInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `allocationId`<sup>Required</sup> <a name="allocationId" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.allocationId"></a>

```java
public java.lang.String getAllocationId();
```

- *Type:* java.lang.String

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `privateIpv4Address`<sup>Required</sup> <a name="privateIpv4Address" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.privateIpv4Address"></a>

```java
public java.lang.String getPrivateIpv4Address();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a> OR com.hashicorp.cdktf.IResolvable

---


### LbTimeoutsOutputReference <a name="LbTimeoutsOutputReference" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb.LbTimeoutsOutputReference;

new LbTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---




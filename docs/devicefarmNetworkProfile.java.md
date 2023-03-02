# `devicefarmNetworkProfile` Submodule <a name="`devicefarmNetworkProfile` Submodule" id="@cdktf/provider-aws.devicefarmNetworkProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmNetworkProfile <a name="DevicefarmNetworkProfile" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile aws_devicefarm_network_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_network_profile.DevicefarmNetworkProfile;

DevicefarmNetworkProfile.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .projectArn(java.lang.String)
//  .description(java.lang.String)
//  .downlinkBandwidthBits(java.lang.Number)
//  .downlinkDelayMs(java.lang.Number)
//  .downlinkJitterMs(java.lang.Number)
//  .downlinkLossPercent(java.lang.Number)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .type(java.lang.String)
//  .uplinkBandwidthBits(java.lang.Number)
//  .uplinkDelayMs(java.lang.Number)
//  .uplinkJitterMs(java.lang.Number)
//  .uplinkLossPercent(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.projectArn">projectArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkBandwidthBits">downlinkBandwidthBits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkDelayMs">downlinkDelayMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkJitterMs">downlinkJitterMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkLossPercent">downlinkLossPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkBandwidthBits">uplinkBandwidthBits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkDelayMs">uplinkDelayMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkJitterMs">uplinkJitterMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkLossPercent">uplinkLossPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}.

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.projectArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}.

---

##### `downlinkBandwidthBits`<sup>Optional</sup> <a name="downlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkBandwidthBits"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}.

---

##### `downlinkDelayMs`<sup>Optional</sup> <a name="downlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkDelayMs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}.

---

##### `downlinkJitterMs`<sup>Optional</sup> <a name="downlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkJitterMs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}.

---

##### `downlinkLossPercent`<sup>Optional</sup> <a name="downlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkLossPercent"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}.

---

##### `uplinkBandwidthBits`<sup>Optional</sup> <a name="uplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkBandwidthBits"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}.

---

##### `uplinkDelayMs`<sup>Optional</sup> <a name="uplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkDelayMs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}.

---

##### `uplinkJitterMs`<sup>Optional</sup> <a name="uplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkJitterMs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}.

---

##### `uplinkLossPercent`<sup>Optional</sup> <a name="uplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkLossPercent"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkBandwidthBits">resetDownlinkBandwidthBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkDelayMs">resetDownlinkDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkJitterMs">resetDownlinkJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkLossPercent">resetDownlinkLossPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkBandwidthBits">resetUplinkBandwidthBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkDelayMs">resetUplinkDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkJitterMs">resetUplinkJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkLossPercent">resetUplinkLossPercent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDownlinkBandwidthBits` <a name="resetDownlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkBandwidthBits"></a>

```java
public void resetDownlinkBandwidthBits()
```

##### `resetDownlinkDelayMs` <a name="resetDownlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkDelayMs"></a>

```java
public void resetDownlinkDelayMs()
```

##### `resetDownlinkJitterMs` <a name="resetDownlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkJitterMs"></a>

```java
public void resetDownlinkJitterMs()
```

##### `resetDownlinkLossPercent` <a name="resetDownlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkLossPercent"></a>

```java
public void resetDownlinkLossPercent()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetType"></a>

```java
public void resetType()
```

##### `resetUplinkBandwidthBits` <a name="resetUplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkBandwidthBits"></a>

```java
public void resetUplinkBandwidthBits()
```

##### `resetUplinkDelayMs` <a name="resetUplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkDelayMs"></a>

```java
public void resetUplinkDelayMs()
```

##### `resetUplinkJitterMs` <a name="resetUplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkJitterMs"></a>

```java
public void resetUplinkJitterMs()
```

##### `resetUplinkLossPercent` <a name="resetUplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkLossPercent"></a>

```java
public void resetUplinkLossPercent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_network_profile.DevicefarmNetworkProfile;

DevicefarmNetworkProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_network_profile.DevicefarmNetworkProfile;

DevicefarmNetworkProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_network_profile.DevicefarmNetworkProfile;

DevicefarmNetworkProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBitsInput">downlinkBandwidthBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMsInput">downlinkDelayMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMsInput">downlinkJitterMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercentInput">downlinkLossPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArnInput">projectArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBitsInput">uplinkBandwidthBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMsInput">uplinkDelayMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMsInput">uplinkJitterMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercentInput">uplinkLossPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBits">downlinkBandwidthBits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMs">downlinkDelayMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMs">downlinkJitterMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercent">downlinkLossPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArn">projectArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBits">uplinkBandwidthBits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMs">uplinkDelayMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMs">uplinkJitterMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercent">uplinkLossPercent</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `downlinkBandwidthBitsInput`<sup>Optional</sup> <a name="downlinkBandwidthBitsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBitsInput"></a>

```java
public java.lang.Number getDownlinkBandwidthBitsInput();
```

- *Type:* java.lang.Number

---

##### `downlinkDelayMsInput`<sup>Optional</sup> <a name="downlinkDelayMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMsInput"></a>

```java
public java.lang.Number getDownlinkDelayMsInput();
```

- *Type:* java.lang.Number

---

##### `downlinkJitterMsInput`<sup>Optional</sup> <a name="downlinkJitterMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMsInput"></a>

```java
public java.lang.Number getDownlinkJitterMsInput();
```

- *Type:* java.lang.Number

---

##### `downlinkLossPercentInput`<sup>Optional</sup> <a name="downlinkLossPercentInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercentInput"></a>

```java
public java.lang.Number getDownlinkLossPercentInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectArnInput`<sup>Optional</sup> <a name="projectArnInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArnInput"></a>

```java
public java.lang.String getProjectArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uplinkBandwidthBitsInput`<sup>Optional</sup> <a name="uplinkBandwidthBitsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBitsInput"></a>

```java
public java.lang.Number getUplinkBandwidthBitsInput();
```

- *Type:* java.lang.Number

---

##### `uplinkDelayMsInput`<sup>Optional</sup> <a name="uplinkDelayMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMsInput"></a>

```java
public java.lang.Number getUplinkDelayMsInput();
```

- *Type:* java.lang.Number

---

##### `uplinkJitterMsInput`<sup>Optional</sup> <a name="uplinkJitterMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMsInput"></a>

```java
public java.lang.Number getUplinkJitterMsInput();
```

- *Type:* java.lang.Number

---

##### `uplinkLossPercentInput`<sup>Optional</sup> <a name="uplinkLossPercentInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercentInput"></a>

```java
public java.lang.Number getUplinkLossPercentInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `downlinkBandwidthBits`<sup>Required</sup> <a name="downlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBits"></a>

```java
public java.lang.Number getDownlinkBandwidthBits();
```

- *Type:* java.lang.Number

---

##### `downlinkDelayMs`<sup>Required</sup> <a name="downlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMs"></a>

```java
public java.lang.Number getDownlinkDelayMs();
```

- *Type:* java.lang.Number

---

##### `downlinkJitterMs`<sup>Required</sup> <a name="downlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMs"></a>

```java
public java.lang.Number getDownlinkJitterMs();
```

- *Type:* java.lang.Number

---

##### `downlinkLossPercent`<sup>Required</sup> <a name="downlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercent"></a>

```java
public java.lang.Number getDownlinkLossPercent();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArn"></a>

```java
public java.lang.String getProjectArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uplinkBandwidthBits`<sup>Required</sup> <a name="uplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBits"></a>

```java
public java.lang.Number getUplinkBandwidthBits();
```

- *Type:* java.lang.Number

---

##### `uplinkDelayMs`<sup>Required</sup> <a name="uplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMs"></a>

```java
public java.lang.Number getUplinkDelayMs();
```

- *Type:* java.lang.Number

---

##### `uplinkJitterMs`<sup>Required</sup> <a name="uplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMs"></a>

```java
public java.lang.Number getUplinkJitterMs();
```

- *Type:* java.lang.Number

---

##### `uplinkLossPercent`<sup>Required</sup> <a name="uplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercent"></a>

```java
public java.lang.Number getUplinkLossPercent();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmNetworkProfileConfig <a name="DevicefarmNetworkProfileConfig" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_network_profile.DevicefarmNetworkProfileConfig;

DevicefarmNetworkProfileConfig.builder()
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
    .name(java.lang.String)
    .projectArn(java.lang.String)
//  .description(java.lang.String)
//  .downlinkBandwidthBits(java.lang.Number)
//  .downlinkDelayMs(java.lang.Number)
//  .downlinkJitterMs(java.lang.Number)
//  .downlinkLossPercent(java.lang.Number)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .type(java.lang.String)
//  .uplinkBandwidthBits(java.lang.Number)
//  .uplinkDelayMs(java.lang.Number)
//  .uplinkJitterMs(java.lang.Number)
//  .uplinkLossPercent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.projectArn">projectArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkBandwidthBits">downlinkBandwidthBits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkDelayMs">downlinkDelayMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkJitterMs">downlinkJitterMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkLossPercent">downlinkLossPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkBandwidthBits">uplinkBandwidthBits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkDelayMs">uplinkDelayMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkJitterMs">uplinkJitterMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkLossPercent">uplinkLossPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}.

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.projectArn"></a>

```java
public java.lang.String getProjectArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}.

---

##### `downlinkBandwidthBits`<sup>Optional</sup> <a name="downlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkBandwidthBits"></a>

```java
public java.lang.Number getDownlinkBandwidthBits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}.

---

##### `downlinkDelayMs`<sup>Optional</sup> <a name="downlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkDelayMs"></a>

```java
public java.lang.Number getDownlinkDelayMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}.

---

##### `downlinkJitterMs`<sup>Optional</sup> <a name="downlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkJitterMs"></a>

```java
public java.lang.Number getDownlinkJitterMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}.

---

##### `downlinkLossPercent`<sup>Optional</sup> <a name="downlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkLossPercent"></a>

```java
public java.lang.Number getDownlinkLossPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}.

---

##### `uplinkBandwidthBits`<sup>Optional</sup> <a name="uplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkBandwidthBits"></a>

```java
public java.lang.Number getUplinkBandwidthBits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}.

---

##### `uplinkDelayMs`<sup>Optional</sup> <a name="uplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkDelayMs"></a>

```java
public java.lang.Number getUplinkDelayMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}.

---

##### `uplinkJitterMs`<sup>Optional</sup> <a name="uplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkJitterMs"></a>

```java
public java.lang.Number getUplinkJitterMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}.

---

##### `uplinkLossPercent`<sup>Optional</sup> <a name="uplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkLossPercent"></a>

```java
public java.lang.Number getUplinkLossPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}.

---




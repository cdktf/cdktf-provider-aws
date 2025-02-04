# `sesv2ConfigurationSet` Submodule <a name="`sesv2ConfigurationSet` Submodule" id="@cdktf/provider-aws.sesv2ConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2ConfigurationSet <a name="Sesv2ConfigurationSet" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set aws_sesv2_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSet;

Sesv2ConfigurationSet.Builder.create(Construct scope, java.lang.String id)
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
    .configurationSetName(java.lang.String)
//  .deliveryOptions(Sesv2ConfigurationSetDeliveryOptions)
//  .id(java.lang.String)
//  .reputationOptions(Sesv2ConfigurationSetReputationOptions)
//  .sendingOptions(Sesv2ConfigurationSetSendingOptions)
//  .suppressionOptions(Sesv2ConfigurationSetSuppressionOptions)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .trackingOptions(Sesv2ConfigurationSetTrackingOptions)
//  .vdmOptions(Sesv2ConfigurationSetVdmOptions)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#configuration_set_name Sesv2ConfigurationSet#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a></code> | delivery_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#id Sesv2ConfigurationSet#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.reputationOptions">reputationOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a></code> | reputation_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.sendingOptions">sendingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a></code> | sending_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.suppressionOptions">suppressionOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a></code> | suppression_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#tags Sesv2ConfigurationSet#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#tags_all Sesv2ConfigurationSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a></code> | tracking_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.vdmOptions">vdmOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a></code> | vdm_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.configurationSetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#configuration_set_name Sesv2ConfigurationSet#configuration_set_name}.

---

##### `deliveryOptions`<sup>Optional</sup> <a name="deliveryOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.deliveryOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

delivery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#delivery_options Sesv2ConfigurationSet#delivery_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#id Sesv2ConfigurationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reputationOptions`<sup>Optional</sup> <a name="reputationOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.reputationOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

reputation_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#reputation_options Sesv2ConfigurationSet#reputation_options}

---

##### `sendingOptions`<sup>Optional</sup> <a name="sendingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.sendingOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

sending_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#sending_options Sesv2ConfigurationSet#sending_options}

---

##### `suppressionOptions`<sup>Optional</sup> <a name="suppressionOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.suppressionOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

suppression_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#suppression_options Sesv2ConfigurationSet#suppression_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#tags Sesv2ConfigurationSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#tags_all Sesv2ConfigurationSet#tags_all}.

---

##### `trackingOptions`<sup>Optional</sup> <a name="trackingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.trackingOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

tracking_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#tracking_options Sesv2ConfigurationSet#tracking_options}

---

##### `vdmOptions`<sup>Optional</sup> <a name="vdmOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.Initializer.parameter.vdmOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a>

vdm_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#vdm_options Sesv2ConfigurationSet#vdm_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putDeliveryOptions">putDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putReputationOptions">putReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSendingOptions">putSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSuppressionOptions">putSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putTrackingOptions">putTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putVdmOptions">putVdmOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetDeliveryOptions">resetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetReputationOptions">resetReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetSendingOptions">resetSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetSuppressionOptions">resetSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTrackingOptions">resetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetVdmOptions">resetVdmOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeliveryOptions` <a name="putDeliveryOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putDeliveryOptions"></a>

```java
public void putDeliveryOptions(Sesv2ConfigurationSetDeliveryOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putDeliveryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

---

##### `putReputationOptions` <a name="putReputationOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putReputationOptions"></a>

```java
public void putReputationOptions(Sesv2ConfigurationSetReputationOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putReputationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

---

##### `putSendingOptions` <a name="putSendingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSendingOptions"></a>

```java
public void putSendingOptions(Sesv2ConfigurationSetSendingOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSendingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

---

##### `putSuppressionOptions` <a name="putSuppressionOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSuppressionOptions"></a>

```java
public void putSuppressionOptions(Sesv2ConfigurationSetSuppressionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putSuppressionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

---

##### `putTrackingOptions` <a name="putTrackingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putTrackingOptions"></a>

```java
public void putTrackingOptions(Sesv2ConfigurationSetTrackingOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putTrackingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

---

##### `putVdmOptions` <a name="putVdmOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putVdmOptions"></a>

```java
public void putVdmOptions(Sesv2ConfigurationSetVdmOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.putVdmOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a>

---

##### `resetDeliveryOptions` <a name="resetDeliveryOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetDeliveryOptions"></a>

```java
public void resetDeliveryOptions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetId"></a>

```java
public void resetId()
```

##### `resetReputationOptions` <a name="resetReputationOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetReputationOptions"></a>

```java
public void resetReputationOptions()
```

##### `resetSendingOptions` <a name="resetSendingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetSendingOptions"></a>

```java
public void resetSendingOptions()
```

##### `resetSuppressionOptions` <a name="resetSuppressionOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetSuppressionOptions"></a>

```java
public void resetSuppressionOptions()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTrackingOptions` <a name="resetTrackingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetTrackingOptions"></a>

```java
public void resetTrackingOptions()
```

##### `resetVdmOptions` <a name="resetVdmOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.resetVdmOptions"></a>

```java
public void resetVdmOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Sesv2ConfigurationSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSet;

Sesv2ConfigurationSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSet;

Sesv2ConfigurationSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSet;

Sesv2ConfigurationSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSet;

Sesv2ConfigurationSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Sesv2ConfigurationSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Sesv2ConfigurationSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Sesv2ConfigurationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Sesv2ConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Sesv2ConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference">Sesv2ConfigurationSetDeliveryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.reputationOptions">reputationOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference">Sesv2ConfigurationSetReputationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.sendingOptions">sendingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference">Sesv2ConfigurationSetSendingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.suppressionOptions">suppressionOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference">Sesv2ConfigurationSetSuppressionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference">Sesv2ConfigurationSetTrackingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.vdmOptions">vdmOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference">Sesv2ConfigurationSetVdmOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.deliveryOptionsInput">deliveryOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.reputationOptionsInput">reputationOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.sendingOptionsInput">sendingOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.suppressionOptionsInput">suppressionOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.trackingOptionsInput">trackingOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.vdmOptionsInput">vdmOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `deliveryOptions`<sup>Required</sup> <a name="deliveryOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.deliveryOptions"></a>

```java
public Sesv2ConfigurationSetDeliveryOptionsOutputReference getDeliveryOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference">Sesv2ConfigurationSetDeliveryOptionsOutputReference</a>

---

##### `reputationOptions`<sup>Required</sup> <a name="reputationOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.reputationOptions"></a>

```java
public Sesv2ConfigurationSetReputationOptionsOutputReference getReputationOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference">Sesv2ConfigurationSetReputationOptionsOutputReference</a>

---

##### `sendingOptions`<sup>Required</sup> <a name="sendingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.sendingOptions"></a>

```java
public Sesv2ConfigurationSetSendingOptionsOutputReference getSendingOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference">Sesv2ConfigurationSetSendingOptionsOutputReference</a>

---

##### `suppressionOptions`<sup>Required</sup> <a name="suppressionOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.suppressionOptions"></a>

```java
public Sesv2ConfigurationSetSuppressionOptionsOutputReference getSuppressionOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference">Sesv2ConfigurationSetSuppressionOptionsOutputReference</a>

---

##### `trackingOptions`<sup>Required</sup> <a name="trackingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.trackingOptions"></a>

```java
public Sesv2ConfigurationSetTrackingOptionsOutputReference getTrackingOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference">Sesv2ConfigurationSetTrackingOptionsOutputReference</a>

---

##### `vdmOptions`<sup>Required</sup> <a name="vdmOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.vdmOptions"></a>

```java
public Sesv2ConfigurationSetVdmOptionsOutputReference getVdmOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference">Sesv2ConfigurationSetVdmOptionsOutputReference</a>

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.configurationSetNameInput"></a>

```java
public java.lang.String getConfigurationSetNameInput();
```

- *Type:* java.lang.String

---

##### `deliveryOptionsInput`<sup>Optional</sup> <a name="deliveryOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.deliveryOptionsInput"></a>

```java
public Sesv2ConfigurationSetDeliveryOptions getDeliveryOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `reputationOptionsInput`<sup>Optional</sup> <a name="reputationOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.reputationOptionsInput"></a>

```java
public Sesv2ConfigurationSetReputationOptions getReputationOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

---

##### `sendingOptionsInput`<sup>Optional</sup> <a name="sendingOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.sendingOptionsInput"></a>

```java
public Sesv2ConfigurationSetSendingOptions getSendingOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

---

##### `suppressionOptionsInput`<sup>Optional</sup> <a name="suppressionOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.suppressionOptionsInput"></a>

```java
public Sesv2ConfigurationSetSuppressionOptions getSuppressionOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `trackingOptionsInput`<sup>Optional</sup> <a name="trackingOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.trackingOptionsInput"></a>

```java
public Sesv2ConfigurationSetTrackingOptions getTrackingOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

---

##### `vdmOptionsInput`<sup>Optional</sup> <a name="vdmOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.vdmOptionsInput"></a>

```java
public Sesv2ConfigurationSetVdmOptions getVdmOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2ConfigurationSetConfig <a name="Sesv2ConfigurationSetConfig" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetConfig;

Sesv2ConfigurationSetConfig.builder()
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
    .configurationSetName(java.lang.String)
//  .deliveryOptions(Sesv2ConfigurationSetDeliveryOptions)
//  .id(java.lang.String)
//  .reputationOptions(Sesv2ConfigurationSetReputationOptions)
//  .sendingOptions(Sesv2ConfigurationSetSendingOptions)
//  .suppressionOptions(Sesv2ConfigurationSetSuppressionOptions)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .trackingOptions(Sesv2ConfigurationSetTrackingOptions)
//  .vdmOptions(Sesv2ConfigurationSetVdmOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#configuration_set_name Sesv2ConfigurationSet#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a></code> | delivery_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#id Sesv2ConfigurationSet#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.reputationOptions">reputationOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a></code> | reputation_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.sendingOptions">sendingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a></code> | sending_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.suppressionOptions">suppressionOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a></code> | suppression_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#tags Sesv2ConfigurationSet#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#tags_all Sesv2ConfigurationSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a></code> | tracking_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.vdmOptions">vdmOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a></code> | vdm_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#configuration_set_name Sesv2ConfigurationSet#configuration_set_name}.

---

##### `deliveryOptions`<sup>Optional</sup> <a name="deliveryOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.deliveryOptions"></a>

```java
public Sesv2ConfigurationSetDeliveryOptions getDeliveryOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

delivery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#delivery_options Sesv2ConfigurationSet#delivery_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#id Sesv2ConfigurationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reputationOptions`<sup>Optional</sup> <a name="reputationOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.reputationOptions"></a>

```java
public Sesv2ConfigurationSetReputationOptions getReputationOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

reputation_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#reputation_options Sesv2ConfigurationSet#reputation_options}

---

##### `sendingOptions`<sup>Optional</sup> <a name="sendingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.sendingOptions"></a>

```java
public Sesv2ConfigurationSetSendingOptions getSendingOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

sending_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#sending_options Sesv2ConfigurationSet#sending_options}

---

##### `suppressionOptions`<sup>Optional</sup> <a name="suppressionOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.suppressionOptions"></a>

```java
public Sesv2ConfigurationSetSuppressionOptions getSuppressionOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

suppression_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#suppression_options Sesv2ConfigurationSet#suppression_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#tags Sesv2ConfigurationSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#tags_all Sesv2ConfigurationSet#tags_all}.

---

##### `trackingOptions`<sup>Optional</sup> <a name="trackingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.trackingOptions"></a>

```java
public Sesv2ConfigurationSetTrackingOptions getTrackingOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

tracking_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#tracking_options Sesv2ConfigurationSet#tracking_options}

---

##### `vdmOptions`<sup>Optional</sup> <a name="vdmOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetConfig.property.vdmOptions"></a>

```java
public Sesv2ConfigurationSetVdmOptions getVdmOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a>

vdm_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#vdm_options Sesv2ConfigurationSet#vdm_options}

---

### Sesv2ConfigurationSetDeliveryOptions <a name="Sesv2ConfigurationSetDeliveryOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetDeliveryOptions;

Sesv2ConfigurationSetDeliveryOptions.builder()
//  .maxDeliverySeconds(java.lang.Number)
//  .sendingPoolName(java.lang.String)
//  .tlsPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.maxDeliverySeconds">maxDeliverySeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#max_delivery_seconds Sesv2ConfigurationSet#max_delivery_seconds}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.sendingPoolName">sendingPoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#sending_pool_name Sesv2ConfigurationSet#sending_pool_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#tls_policy Sesv2ConfigurationSet#tls_policy}. |

---

##### `maxDeliverySeconds`<sup>Optional</sup> <a name="maxDeliverySeconds" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.maxDeliverySeconds"></a>

```java
public java.lang.Number getMaxDeliverySeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#max_delivery_seconds Sesv2ConfigurationSet#max_delivery_seconds}.

---

##### `sendingPoolName`<sup>Optional</sup> <a name="sendingPoolName" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.sendingPoolName"></a>

```java
public java.lang.String getSendingPoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#sending_pool_name Sesv2ConfigurationSet#sending_pool_name}.

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions.property.tlsPolicy"></a>

```java
public java.lang.String getTlsPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#tls_policy Sesv2ConfigurationSet#tls_policy}.

---

### Sesv2ConfigurationSetReputationOptions <a name="Sesv2ConfigurationSetReputationOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetReputationOptions;

Sesv2ConfigurationSetReputationOptions.builder()
//  .reputationMetricsEnabled(java.lang.Boolean)
//  .reputationMetricsEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions.property.reputationMetricsEnabled">reputationMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#reputation_metrics_enabled Sesv2ConfigurationSet#reputation_metrics_enabled}. |

---

##### `reputationMetricsEnabled`<sup>Optional</sup> <a name="reputationMetricsEnabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions.property.reputationMetricsEnabled"></a>

```java
public java.lang.Object getReputationMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#reputation_metrics_enabled Sesv2ConfigurationSet#reputation_metrics_enabled}.

---

### Sesv2ConfigurationSetSendingOptions <a name="Sesv2ConfigurationSetSendingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetSendingOptions;

Sesv2ConfigurationSetSendingOptions.builder()
//  .sendingEnabled(java.lang.Boolean)
//  .sendingEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions.property.sendingEnabled">sendingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#sending_enabled Sesv2ConfigurationSet#sending_enabled}. |

---

##### `sendingEnabled`<sup>Optional</sup> <a name="sendingEnabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions.property.sendingEnabled"></a>

```java
public java.lang.Object getSendingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#sending_enabled Sesv2ConfigurationSet#sending_enabled}.

---

### Sesv2ConfigurationSetSuppressionOptions <a name="Sesv2ConfigurationSetSuppressionOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetSuppressionOptions;

Sesv2ConfigurationSetSuppressionOptions.builder()
//  .suppressedReasons(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions.property.suppressedReasons">suppressedReasons</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#suppressed_reasons Sesv2ConfigurationSet#suppressed_reasons}. |

---

##### `suppressedReasons`<sup>Optional</sup> <a name="suppressedReasons" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions.property.suppressedReasons"></a>

```java
public java.util.List<java.lang.String> getSuppressedReasons();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#suppressed_reasons Sesv2ConfigurationSet#suppressed_reasons}.

---

### Sesv2ConfigurationSetTrackingOptions <a name="Sesv2ConfigurationSetTrackingOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetTrackingOptions;

Sesv2ConfigurationSetTrackingOptions.builder()
    .customRedirectDomain(java.lang.String)
//  .httpsPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions.property.customRedirectDomain">customRedirectDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#custom_redirect_domain Sesv2ConfigurationSet#custom_redirect_domain}. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions.property.httpsPolicy">httpsPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#https_policy Sesv2ConfigurationSet#https_policy}. |

---

##### `customRedirectDomain`<sup>Required</sup> <a name="customRedirectDomain" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions.property.customRedirectDomain"></a>

```java
public java.lang.String getCustomRedirectDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#custom_redirect_domain Sesv2ConfigurationSet#custom_redirect_domain}.

---

##### `httpsPolicy`<sup>Optional</sup> <a name="httpsPolicy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions.property.httpsPolicy"></a>

```java
public java.lang.String getHttpsPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#https_policy Sesv2ConfigurationSet#https_policy}.

---

### Sesv2ConfigurationSetVdmOptions <a name="Sesv2ConfigurationSetVdmOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetVdmOptions;

Sesv2ConfigurationSetVdmOptions.builder()
//  .dashboardOptions(Sesv2ConfigurationSetVdmOptionsDashboardOptions)
//  .guardianOptions(Sesv2ConfigurationSetVdmOptionsGuardianOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions.property.dashboardOptions">dashboardOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a></code> | dashboard_options block. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions.property.guardianOptions">guardianOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a></code> | guardian_options block. |

---

##### `dashboardOptions`<sup>Optional</sup> <a name="dashboardOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions.property.dashboardOptions"></a>

```java
public Sesv2ConfigurationSetVdmOptionsDashboardOptions getDashboardOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a>

dashboard_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#dashboard_options Sesv2ConfigurationSet#dashboard_options}

---

##### `guardianOptions`<sup>Optional</sup> <a name="guardianOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions.property.guardianOptions"></a>

```java
public Sesv2ConfigurationSetVdmOptionsGuardianOptions getGuardianOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a>

guardian_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#guardian_options Sesv2ConfigurationSet#guardian_options}

---

### Sesv2ConfigurationSetVdmOptionsDashboardOptions <a name="Sesv2ConfigurationSetVdmOptionsDashboardOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetVdmOptionsDashboardOptions;

Sesv2ConfigurationSetVdmOptionsDashboardOptions.builder()
//  .engagementMetrics(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions.property.engagementMetrics">engagementMetrics</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#engagement_metrics Sesv2ConfigurationSet#engagement_metrics}. |

---

##### `engagementMetrics`<sup>Optional</sup> <a name="engagementMetrics" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions.property.engagementMetrics"></a>

```java
public java.lang.String getEngagementMetrics();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#engagement_metrics Sesv2ConfigurationSet#engagement_metrics}.

---

### Sesv2ConfigurationSetVdmOptionsGuardianOptions <a name="Sesv2ConfigurationSetVdmOptionsGuardianOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetVdmOptionsGuardianOptions;

Sesv2ConfigurationSetVdmOptionsGuardianOptions.builder()
//  .optimizedSharedDelivery(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions.property.optimizedSharedDelivery">optimizedSharedDelivery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#optimized_shared_delivery Sesv2ConfigurationSet#optimized_shared_delivery}. |

---

##### `optimizedSharedDelivery`<sup>Optional</sup> <a name="optimizedSharedDelivery" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions.property.optimizedSharedDelivery"></a>

```java
public java.lang.String getOptimizedSharedDelivery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/sesv2_configuration_set#optimized_shared_delivery Sesv2ConfigurationSet#optimized_shared_delivery}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2ConfigurationSetDeliveryOptionsOutputReference <a name="Sesv2ConfigurationSetDeliveryOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetDeliveryOptionsOutputReference;

new Sesv2ConfigurationSetDeliveryOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetMaxDeliverySeconds">resetMaxDeliverySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName">resetSendingPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy">resetTlsPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxDeliverySeconds` <a name="resetMaxDeliverySeconds" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetMaxDeliverySeconds"></a>

```java
public void resetMaxDeliverySeconds()
```

##### `resetSendingPoolName` <a name="resetSendingPoolName" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName"></a>

```java
public void resetSendingPoolName()
```

##### `resetTlsPolicy` <a name="resetTlsPolicy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy"></a>

```java
public void resetTlsPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySecondsInput">maxDeliverySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput">sendingPoolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput">tlsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySeconds">maxDeliverySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName">sendingPoolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxDeliverySecondsInput`<sup>Optional</sup> <a name="maxDeliverySecondsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySecondsInput"></a>

```java
public java.lang.Number getMaxDeliverySecondsInput();
```

- *Type:* java.lang.Number

---

##### `sendingPoolNameInput`<sup>Optional</sup> <a name="sendingPoolNameInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput"></a>

```java
public java.lang.String getSendingPoolNameInput();
```

- *Type:* java.lang.String

---

##### `tlsPolicyInput`<sup>Optional</sup> <a name="tlsPolicyInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput"></a>

```java
public java.lang.String getTlsPolicyInput();
```

- *Type:* java.lang.String

---

##### `maxDeliverySeconds`<sup>Required</sup> <a name="maxDeliverySeconds" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySeconds"></a>

```java
public java.lang.Number getMaxDeliverySeconds();
```

- *Type:* java.lang.Number

---

##### `sendingPoolName`<sup>Required</sup> <a name="sendingPoolName" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName"></a>

```java
public java.lang.String getSendingPoolName();
```

- *Type:* java.lang.String

---

##### `tlsPolicy`<sup>Required</sup> <a name="tlsPolicy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```java
public java.lang.String getTlsPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```java
public Sesv2ConfigurationSetDeliveryOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetDeliveryOptions">Sesv2ConfigurationSetDeliveryOptions</a>

---


### Sesv2ConfigurationSetReputationOptionsOutputReference <a name="Sesv2ConfigurationSetReputationOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetReputationOptionsOutputReference;

new Sesv2ConfigurationSetReputationOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled">resetReputationMetricsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReputationMetricsEnabled` <a name="resetReputationMetricsEnabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled"></a>

```java
public void resetReputationMetricsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.lastFreshStart">lastFreshStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput">reputationMetricsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled">reputationMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastFreshStart`<sup>Required</sup> <a name="lastFreshStart" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.lastFreshStart"></a>

```java
public java.lang.String getLastFreshStart();
```

- *Type:* java.lang.String

---

##### `reputationMetricsEnabledInput`<sup>Optional</sup> <a name="reputationMetricsEnabledInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput"></a>

```java
public java.lang.Object getReputationMetricsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reputationMetricsEnabled`<sup>Required</sup> <a name="reputationMetricsEnabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled"></a>

```java
public java.lang.Object getReputationMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptionsOutputReference.property.internalValue"></a>

```java
public Sesv2ConfigurationSetReputationOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetReputationOptions">Sesv2ConfigurationSetReputationOptions</a>

---


### Sesv2ConfigurationSetSendingOptionsOutputReference <a name="Sesv2ConfigurationSetSendingOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetSendingOptionsOutputReference;

new Sesv2ConfigurationSetSendingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resetSendingEnabled">resetSendingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSendingEnabled` <a name="resetSendingEnabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.resetSendingEnabled"></a>

```java
public void resetSendingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput">sendingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabled">sendingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sendingEnabledInput`<sup>Optional</sup> <a name="sendingEnabledInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput"></a>

```java
public java.lang.Object getSendingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendingEnabled`<sup>Required</sup> <a name="sendingEnabled" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabled"></a>

```java
public java.lang.Object getSendingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptionsOutputReference.property.internalValue"></a>

```java
public Sesv2ConfigurationSetSendingOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSendingOptions">Sesv2ConfigurationSetSendingOptions</a>

---


### Sesv2ConfigurationSetSuppressionOptionsOutputReference <a name="Sesv2ConfigurationSetSuppressionOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetSuppressionOptionsOutputReference;

new Sesv2ConfigurationSetSuppressionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons">resetSuppressedReasons</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSuppressedReasons` <a name="resetSuppressedReasons" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons"></a>

```java
public void resetSuppressedReasons()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput">suppressedReasonsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons">suppressedReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `suppressedReasonsInput`<sup>Optional</sup> <a name="suppressedReasonsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput"></a>

```java
public java.util.List<java.lang.String> getSuppressedReasonsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `suppressedReasons`<sup>Required</sup> <a name="suppressedReasons" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons"></a>

```java
public java.util.List<java.lang.String> getSuppressedReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptionsOutputReference.property.internalValue"></a>

```java
public Sesv2ConfigurationSetSuppressionOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetSuppressionOptions">Sesv2ConfigurationSetSuppressionOptions</a>

---


### Sesv2ConfigurationSetTrackingOptionsOutputReference <a name="Sesv2ConfigurationSetTrackingOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetTrackingOptionsOutputReference;

new Sesv2ConfigurationSetTrackingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.resetHttpsPolicy">resetHttpsPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpsPolicy` <a name="resetHttpsPolicy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.resetHttpsPolicy"></a>

```java
public void resetHttpsPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput">customRedirectDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.httpsPolicyInput">httpsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">customRedirectDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.httpsPolicy">httpsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRedirectDomainInput`<sup>Optional</sup> <a name="customRedirectDomainInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput"></a>

```java
public java.lang.String getCustomRedirectDomainInput();
```

- *Type:* java.lang.String

---

##### `httpsPolicyInput`<sup>Optional</sup> <a name="httpsPolicyInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.httpsPolicyInput"></a>

```java
public java.lang.String getHttpsPolicyInput();
```

- *Type:* java.lang.String

---

##### `customRedirectDomain`<sup>Required</sup> <a name="customRedirectDomain" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```java
public java.lang.String getCustomRedirectDomain();
```

- *Type:* java.lang.String

---

##### `httpsPolicy`<sup>Required</sup> <a name="httpsPolicy" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.httpsPolicy"></a>

```java
public java.lang.String getHttpsPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```java
public Sesv2ConfigurationSetTrackingOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetTrackingOptions">Sesv2ConfigurationSetTrackingOptions</a>

---


### Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference <a name="Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference;

new Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resetEngagementMetrics">resetEngagementMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEngagementMetrics` <a name="resetEngagementMetrics" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resetEngagementMetrics"></a>

```java
public void resetEngagementMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetricsInput">engagementMetricsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics">engagementMetrics</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `engagementMetricsInput`<sup>Optional</sup> <a name="engagementMetricsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetricsInput"></a>

```java
public java.lang.String getEngagementMetricsInput();
```

- *Type:* java.lang.String

---

##### `engagementMetrics`<sup>Required</sup> <a name="engagementMetrics" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics"></a>

```java
public java.lang.String getEngagementMetrics();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue"></a>

```java
public Sesv2ConfigurationSetVdmOptionsDashboardOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a>

---


### Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference <a name="Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference;

new Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resetOptimizedSharedDelivery">resetOptimizedSharedDelivery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptimizedSharedDelivery` <a name="resetOptimizedSharedDelivery" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resetOptimizedSharedDelivery"></a>

```java
public void resetOptimizedSharedDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDeliveryInput">optimizedSharedDeliveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery">optimizedSharedDelivery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `optimizedSharedDeliveryInput`<sup>Optional</sup> <a name="optimizedSharedDeliveryInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDeliveryInput"></a>

```java
public java.lang.String getOptimizedSharedDeliveryInput();
```

- *Type:* java.lang.String

---

##### `optimizedSharedDelivery`<sup>Required</sup> <a name="optimizedSharedDelivery" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery"></a>

```java
public java.lang.String getOptimizedSharedDelivery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue"></a>

```java
public Sesv2ConfigurationSetVdmOptionsGuardianOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a>

---


### Sesv2ConfigurationSetVdmOptionsOutputReference <a name="Sesv2ConfigurationSetVdmOptionsOutputReference" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_configuration_set.Sesv2ConfigurationSetVdmOptionsOutputReference;

new Sesv2ConfigurationSetVdmOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.putDashboardOptions">putDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.putGuardianOptions">putGuardianOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resetDashboardOptions">resetDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resetGuardianOptions">resetGuardianOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDashboardOptions` <a name="putDashboardOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.putDashboardOptions"></a>

```java
public void putDashboardOptions(Sesv2ConfigurationSetVdmOptionsDashboardOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.putDashboardOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a>

---

##### `putGuardianOptions` <a name="putGuardianOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.putGuardianOptions"></a>

```java
public void putGuardianOptions(Sesv2ConfigurationSetVdmOptionsGuardianOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.putGuardianOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a>

---

##### `resetDashboardOptions` <a name="resetDashboardOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resetDashboardOptions"></a>

```java
public void resetDashboardOptions()
```

##### `resetGuardianOptions` <a name="resetGuardianOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.resetGuardianOptions"></a>

```java
public void resetGuardianOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptions">dashboardOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference">Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptions">guardianOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference">Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptionsInput">dashboardOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptionsInput">guardianOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dashboardOptions`<sup>Required</sup> <a name="dashboardOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptions"></a>

```java
public Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference getDashboardOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference">Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference</a>

---

##### `guardianOptions`<sup>Required</sup> <a name="guardianOptions" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptions"></a>

```java
public Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference getGuardianOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference">Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference</a>

---

##### `dashboardOptionsInput`<sup>Optional</sup> <a name="dashboardOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptionsInput"></a>

```java
public Sesv2ConfigurationSetVdmOptionsDashboardOptions getDashboardOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsDashboardOptions">Sesv2ConfigurationSetVdmOptionsDashboardOptions</a>

---

##### `guardianOptionsInput`<sup>Optional</sup> <a name="guardianOptionsInput" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptionsInput"></a>

```java
public Sesv2ConfigurationSetVdmOptionsGuardianOptions getGuardianOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsGuardianOptions">Sesv2ConfigurationSetVdmOptionsGuardianOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptionsOutputReference.property.internalValue"></a>

```java
public Sesv2ConfigurationSetVdmOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2ConfigurationSet.Sesv2ConfigurationSetVdmOptions">Sesv2ConfigurationSetVdmOptions</a>

---




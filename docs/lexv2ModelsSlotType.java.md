# `lexv2ModelsSlotType` Submodule <a name="`lexv2ModelsSlotType` Submodule" id="@cdktf/provider-aws.lexv2ModelsSlotType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lexv2ModelsSlotType <a name="Lexv2ModelsSlotType" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type aws_lexv2models_slot_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotType;

Lexv2ModelsSlotType.Builder.create(Construct scope, java.lang.String id)
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
    .botId(java.lang.String)
    .botVersion(java.lang.String)
    .localeId(java.lang.String)
    .name(java.lang.String)
//  .compositeSlotTypeSetting(IResolvable)
//  .compositeSlotTypeSetting(java.util.List<Lexv2ModelsSlotTypeCompositeSlotTypeSetting>)
//  .description(java.lang.String)
//  .externalSourceSetting(IResolvable)
//  .externalSourceSetting(java.util.List<Lexv2ModelsSlotTypeExternalSourceSetting>)
//  .parentSlotTypeSignature(java.lang.String)
//  .slotTypeValues(IResolvable)
//  .slotTypeValues(java.util.List<Lexv2ModelsSlotTypeSlotTypeValues>)
//  .timeouts(Lexv2ModelsSlotTypeTimeouts)
//  .valueSelectionSetting(IResolvable)
//  .valueSelectionSetting(java.util.List<Lexv2ModelsSlotTypeValueSelectionSetting>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.botId">botId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#bot_id Lexv2ModelsSlotType#bot_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.botVersion">botVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#bot_version Lexv2ModelsSlotType#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.localeId">localeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#locale_id Lexv2ModelsSlotType#locale_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.compositeSlotTypeSetting">compositeSlotTypeSetting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>></code> | composite_slot_type_setting block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#description Lexv2ModelsSlotType#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.externalSourceSetting">externalSourceSetting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>></code> | external_source_setting block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.parentSlotTypeSignature">parentSlotTypeSignature</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#parent_slot_type_signature Lexv2ModelsSlotType#parent_slot_type_signature}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.slotTypeValues">slotTypeValues</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>></code> | slot_type_values block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.valueSelectionSetting">valueSelectionSetting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>></code> | value_selection_setting block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.botId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#bot_id Lexv2ModelsSlotType#bot_id}.

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.botVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#bot_version Lexv2ModelsSlotType#bot_version}.

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.localeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#locale_id Lexv2ModelsSlotType#locale_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}.

---

##### `compositeSlotTypeSetting`<sup>Optional</sup> <a name="compositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.compositeSlotTypeSetting"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>>

composite_slot_type_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#composite_slot_type_setting Lexv2ModelsSlotType#composite_slot_type_setting}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#description Lexv2ModelsSlotType#description}.

---

##### `externalSourceSetting`<sup>Optional</sup> <a name="externalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.externalSourceSetting"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>>

external_source_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#external_source_setting Lexv2ModelsSlotType#external_source_setting}

---

##### `parentSlotTypeSignature`<sup>Optional</sup> <a name="parentSlotTypeSignature" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.parentSlotTypeSignature"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#parent_slot_type_signature Lexv2ModelsSlotType#parent_slot_type_signature}.

---

##### `slotTypeValues`<sup>Optional</sup> <a name="slotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.slotTypeValues"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>>

slot_type_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#slot_type_values Lexv2ModelsSlotType#slot_type_values}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#timeouts Lexv2ModelsSlotType#timeouts}

---

##### `valueSelectionSetting`<sup>Optional</sup> <a name="valueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.Initializer.parameter.valueSelectionSetting"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>>

value_selection_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#value_selection_setting Lexv2ModelsSlotType#value_selection_setting}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putCompositeSlotTypeSetting">putCompositeSlotTypeSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putExternalSourceSetting">putExternalSourceSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putSlotTypeValues">putSlotTypeValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putValueSelectionSetting">putValueSelectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetCompositeSlotTypeSetting">resetCompositeSlotTypeSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetExternalSourceSetting">resetExternalSourceSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetParentSlotTypeSignature">resetParentSlotTypeSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetSlotTypeValues">resetSlotTypeValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetValueSelectionSetting">resetValueSelectionSetting</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCompositeSlotTypeSetting` <a name="putCompositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putCompositeSlotTypeSetting"></a>

```java
public void putCompositeSlotTypeSetting(IResolvable OR java.util.List<Lexv2ModelsSlotTypeCompositeSlotTypeSetting> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putCompositeSlotTypeSetting.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>>

---

##### `putExternalSourceSetting` <a name="putExternalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putExternalSourceSetting"></a>

```java
public void putExternalSourceSetting(IResolvable OR java.util.List<Lexv2ModelsSlotTypeExternalSourceSetting> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putExternalSourceSetting.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>>

---

##### `putSlotTypeValues` <a name="putSlotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putSlotTypeValues"></a>

```java
public void putSlotTypeValues(IResolvable OR java.util.List<Lexv2ModelsSlotTypeSlotTypeValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putSlotTypeValues.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putTimeouts"></a>

```java
public void putTimeouts(Lexv2ModelsSlotTypeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a>

---

##### `putValueSelectionSetting` <a name="putValueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putValueSelectionSetting"></a>

```java
public void putValueSelectionSetting(IResolvable OR java.util.List<Lexv2ModelsSlotTypeValueSelectionSetting> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.putValueSelectionSetting.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>>

---

##### `resetCompositeSlotTypeSetting` <a name="resetCompositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetCompositeSlotTypeSetting"></a>

```java
public void resetCompositeSlotTypeSetting()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExternalSourceSetting` <a name="resetExternalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetExternalSourceSetting"></a>

```java
public void resetExternalSourceSetting()
```

##### `resetParentSlotTypeSignature` <a name="resetParentSlotTypeSignature" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetParentSlotTypeSignature"></a>

```java
public void resetParentSlotTypeSignature()
```

##### `resetSlotTypeValues` <a name="resetSlotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetSlotTypeValues"></a>

```java
public void resetSlotTypeValues()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValueSelectionSetting` <a name="resetValueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.resetValueSelectionSetting"></a>

```java
public void resetValueSelectionSetting()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Lexv2ModelsSlotType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotType;

Lexv2ModelsSlotType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotType;

Lexv2ModelsSlotType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotType;

Lexv2ModelsSlotType.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotType;

Lexv2ModelsSlotType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Lexv2ModelsSlotType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Lexv2ModelsSlotType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Lexv2ModelsSlotType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Lexv2ModelsSlotType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Lexv2ModelsSlotType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.compositeSlotTypeSetting">compositeSlotTypeSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList">Lexv2ModelsSlotTypeCompositeSlotTypeSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.externalSourceSetting">externalSourceSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList">Lexv2ModelsSlotTypeExternalSourceSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeId">slotTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeValues">slotTypeValues</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList">Lexv2ModelsSlotTypeSlotTypeValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference">Lexv2ModelsSlotTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.valueSelectionSetting">valueSelectionSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList">Lexv2ModelsSlotTypeValueSelectionSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botIdInput">botIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botVersionInput">botVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.compositeSlotTypeSettingInput">compositeSlotTypeSettingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.externalSourceSettingInput">externalSourceSettingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.localeIdInput">localeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.parentSlotTypeSignatureInput">parentSlotTypeSignatureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeValuesInput">slotTypeValuesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.valueSelectionSettingInput">valueSelectionSettingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botId">botId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botVersion">botVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.localeId">localeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.parentSlotTypeSignature">parentSlotTypeSignature</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compositeSlotTypeSetting`<sup>Required</sup> <a name="compositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.compositeSlotTypeSetting"></a>

```java
public Lexv2ModelsSlotTypeCompositeSlotTypeSettingList getCompositeSlotTypeSetting();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList">Lexv2ModelsSlotTypeCompositeSlotTypeSettingList</a>

---

##### `externalSourceSetting`<sup>Required</sup> <a name="externalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.externalSourceSetting"></a>

```java
public Lexv2ModelsSlotTypeExternalSourceSettingList getExternalSourceSetting();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList">Lexv2ModelsSlotTypeExternalSourceSettingList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `slotTypeId`<sup>Required</sup> <a name="slotTypeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeId"></a>

```java
public java.lang.String getSlotTypeId();
```

- *Type:* java.lang.String

---

##### `slotTypeValues`<sup>Required</sup> <a name="slotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeValues"></a>

```java
public Lexv2ModelsSlotTypeSlotTypeValuesList getSlotTypeValues();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList">Lexv2ModelsSlotTypeSlotTypeValuesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.timeouts"></a>

```java
public Lexv2ModelsSlotTypeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference">Lexv2ModelsSlotTypeTimeoutsOutputReference</a>

---

##### `valueSelectionSetting`<sup>Required</sup> <a name="valueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.valueSelectionSetting"></a>

```java
public Lexv2ModelsSlotTypeValueSelectionSettingList getValueSelectionSetting();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList">Lexv2ModelsSlotTypeValueSelectionSettingList</a>

---

##### `botIdInput`<sup>Optional</sup> <a name="botIdInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botIdInput"></a>

```java
public java.lang.String getBotIdInput();
```

- *Type:* java.lang.String

---

##### `botVersionInput`<sup>Optional</sup> <a name="botVersionInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botVersionInput"></a>

```java
public java.lang.String getBotVersionInput();
```

- *Type:* java.lang.String

---

##### `compositeSlotTypeSettingInput`<sup>Optional</sup> <a name="compositeSlotTypeSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.compositeSlotTypeSettingInput"></a>

```java
public java.lang.Object getCompositeSlotTypeSettingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `externalSourceSettingInput`<sup>Optional</sup> <a name="externalSourceSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.externalSourceSettingInput"></a>

```java
public java.lang.Object getExternalSourceSettingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>>

---

##### `localeIdInput`<sup>Optional</sup> <a name="localeIdInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.localeIdInput"></a>

```java
public java.lang.String getLocaleIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentSlotTypeSignatureInput`<sup>Optional</sup> <a name="parentSlotTypeSignatureInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.parentSlotTypeSignatureInput"></a>

```java
public java.lang.String getParentSlotTypeSignatureInput();
```

- *Type:* java.lang.String

---

##### `slotTypeValuesInput`<sup>Optional</sup> <a name="slotTypeValuesInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.slotTypeValuesInput"></a>

```java
public java.lang.Object getSlotTypeValuesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a>

---

##### `valueSelectionSettingInput`<sup>Optional</sup> <a name="valueSelectionSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.valueSelectionSettingInput"></a>

```java
public java.lang.Object getValueSelectionSettingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>>

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botId"></a>

```java
public java.lang.String getBotId();
```

- *Type:* java.lang.String

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.botVersion"></a>

```java
public java.lang.String getBotVersion();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.localeId"></a>

```java
public java.lang.String getLocaleId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentSlotTypeSignature`<sup>Required</sup> <a name="parentSlotTypeSignature" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.parentSlotTypeSignature"></a>

```java
public java.lang.String getParentSlotTypeSignature();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Lexv2ModelsSlotTypeCompositeSlotTypeSetting <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeCompositeSlotTypeSetting;

Lexv2ModelsSlotTypeCompositeSlotTypeSetting.builder()
//  .subSlots(IResolvable)
//  .subSlots(java.util.List<Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting.property.subSlots">subSlots</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>></code> | sub_slots block. |

---

##### `subSlots`<sup>Optional</sup> <a name="subSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting.property.subSlots"></a>

```java
public java.lang.Object getSubSlots();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>>

sub_slots block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#sub_slots Lexv2ModelsSlotType#sub_slots}

---

### Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots;

Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.builder()
    .name(java.lang.String)
    .slotTypeId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.property.slotTypeId">slotTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#slot_type_id Lexv2ModelsSlotType#slot_type_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}.

---

##### `slotTypeId`<sup>Required</sup> <a name="slotTypeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots.property.slotTypeId"></a>

```java
public java.lang.String getSlotTypeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#slot_type_id Lexv2ModelsSlotType#slot_type_id}.

---

### Lexv2ModelsSlotTypeConfig <a name="Lexv2ModelsSlotTypeConfig" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeConfig;

Lexv2ModelsSlotTypeConfig.builder()
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
    .botId(java.lang.String)
    .botVersion(java.lang.String)
    .localeId(java.lang.String)
    .name(java.lang.String)
//  .compositeSlotTypeSetting(IResolvable)
//  .compositeSlotTypeSetting(java.util.List<Lexv2ModelsSlotTypeCompositeSlotTypeSetting>)
//  .description(java.lang.String)
//  .externalSourceSetting(IResolvable)
//  .externalSourceSetting(java.util.List<Lexv2ModelsSlotTypeExternalSourceSetting>)
//  .parentSlotTypeSignature(java.lang.String)
//  .slotTypeValues(IResolvable)
//  .slotTypeValues(java.util.List<Lexv2ModelsSlotTypeSlotTypeValues>)
//  .timeouts(Lexv2ModelsSlotTypeTimeouts)
//  .valueSelectionSetting(IResolvable)
//  .valueSelectionSetting(java.util.List<Lexv2ModelsSlotTypeValueSelectionSetting>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.botId">botId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#bot_id Lexv2ModelsSlotType#bot_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.botVersion">botVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#bot_version Lexv2ModelsSlotType#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.localeId">localeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#locale_id Lexv2ModelsSlotType#locale_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.compositeSlotTypeSetting">compositeSlotTypeSetting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>></code> | composite_slot_type_setting block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#description Lexv2ModelsSlotType#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.externalSourceSetting">externalSourceSetting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>></code> | external_source_setting block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.parentSlotTypeSignature">parentSlotTypeSignature</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#parent_slot_type_signature Lexv2ModelsSlotType#parent_slot_type_signature}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.slotTypeValues">slotTypeValues</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>></code> | slot_type_values block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.valueSelectionSetting">valueSelectionSetting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>></code> | value_selection_setting block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.botId"></a>

```java
public java.lang.String getBotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#bot_id Lexv2ModelsSlotType#bot_id}.

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.botVersion"></a>

```java
public java.lang.String getBotVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#bot_version Lexv2ModelsSlotType#bot_version}.

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.localeId"></a>

```java
public java.lang.String getLocaleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#locale_id Lexv2ModelsSlotType#locale_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}.

---

##### `compositeSlotTypeSetting`<sup>Optional</sup> <a name="compositeSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.compositeSlotTypeSetting"></a>

```java
public java.lang.Object getCompositeSlotTypeSetting();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>>

composite_slot_type_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#composite_slot_type_setting Lexv2ModelsSlotType#composite_slot_type_setting}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#description Lexv2ModelsSlotType#description}.

---

##### `externalSourceSetting`<sup>Optional</sup> <a name="externalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.externalSourceSetting"></a>

```java
public java.lang.Object getExternalSourceSetting();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>>

external_source_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#external_source_setting Lexv2ModelsSlotType#external_source_setting}

---

##### `parentSlotTypeSignature`<sup>Optional</sup> <a name="parentSlotTypeSignature" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.parentSlotTypeSignature"></a>

```java
public java.lang.String getParentSlotTypeSignature();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#parent_slot_type_signature Lexv2ModelsSlotType#parent_slot_type_signature}.

---

##### `slotTypeValues`<sup>Optional</sup> <a name="slotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.slotTypeValues"></a>

```java
public java.lang.Object getSlotTypeValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>>

slot_type_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#slot_type_values Lexv2ModelsSlotType#slot_type_values}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.timeouts"></a>

```java
public Lexv2ModelsSlotTypeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#timeouts Lexv2ModelsSlotType#timeouts}

---

##### `valueSelectionSetting`<sup>Optional</sup> <a name="valueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeConfig.property.valueSelectionSetting"></a>

```java
public java.lang.Object getValueSelectionSetting();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>>

value_selection_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#value_selection_setting Lexv2ModelsSlotType#value_selection_setting}

---

### Lexv2ModelsSlotTypeExternalSourceSetting <a name="Lexv2ModelsSlotTypeExternalSourceSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeExternalSourceSetting;

Lexv2ModelsSlotTypeExternalSourceSetting.builder()
//  .grammarSlotTypeSetting(IResolvable)
//  .grammarSlotTypeSetting(java.util.List<Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting.property.grammarSlotTypeSetting">grammarSlotTypeSetting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>></code> | grammar_slot_type_setting block. |

---

##### `grammarSlotTypeSetting`<sup>Optional</sup> <a name="grammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting.property.grammarSlotTypeSetting"></a>

```java
public java.lang.Object getGrammarSlotTypeSetting();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>>

grammar_slot_type_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#grammar_slot_type_setting Lexv2ModelsSlotType#grammar_slot_type_setting}

---

### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting;

Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting.builder()
//  .source(IResolvable)
//  .source(java.util.List<Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting.property.source">source</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>></code> | source block. |

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting.property.source"></a>

```java
public java.lang.Object getSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#source Lexv2ModelsSlotType#source}

---

### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource;

Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.builder()
    .kmsKeyArn(java.lang.String)
    .s3BucketName(java.lang.String)
    .s3ObjectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#kms_key_arn Lexv2ModelsSlotType#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#s3_bucket_name Lexv2ModelsSlotType#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.s3ObjectKey">s3ObjectKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#s3_object_key Lexv2ModelsSlotType#s3_object_key}. |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#kms_key_arn Lexv2ModelsSlotType#kms_key_arn}.

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#s3_bucket_name Lexv2ModelsSlotType#s3_bucket_name}.

---

##### `s3ObjectKey`<sup>Required</sup> <a name="s3ObjectKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource.property.s3ObjectKey"></a>

```java
public java.lang.String getS3ObjectKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#s3_object_key Lexv2ModelsSlotType#s3_object_key}.

---

### Lexv2ModelsSlotTypeSlotTypeValues <a name="Lexv2ModelsSlotTypeSlotTypeValues" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeSlotTypeValues;

Lexv2ModelsSlotTypeSlotTypeValues.builder()
//  .sampleValue(IResolvable)
//  .sampleValue(java.util.List<Lexv2ModelsSlotTypeSlotTypeValuesSampleValue>)
//  .synonyms(IResolvable)
//  .synonyms(java.util.List<Lexv2ModelsSlotTypeSlotTypeValuesSynonyms>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.property.sampleValue">sampleValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>></code> | sample_value block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.property.synonyms">synonyms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>></code> | synonyms block. |

---

##### `sampleValue`<sup>Optional</sup> <a name="sampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.property.sampleValue"></a>

```java
public java.lang.Object getSampleValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>>

sample_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#sample_value Lexv2ModelsSlotType#sample_value}

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues.property.synonyms"></a>

```java
public java.lang.Object getSynonyms();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>>

synonyms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#synonyms Lexv2ModelsSlotType#synonyms}

---

### Lexv2ModelsSlotTypeSlotTypeValuesSampleValue <a name="Lexv2ModelsSlotTypeSlotTypeValuesSampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue;

Lexv2ModelsSlotTypeSlotTypeValuesSampleValue.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}.

---

### Lexv2ModelsSlotTypeSlotTypeValuesSynonyms <a name="Lexv2ModelsSlotTypeSlotTypeValuesSynonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms;

Lexv2ModelsSlotTypeSlotTypeValuesSynonyms.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}.

---

### Lexv2ModelsSlotTypeTimeouts <a name="Lexv2ModelsSlotTypeTimeouts" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeTimeouts;

Lexv2ModelsSlotTypeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#create Lexv2ModelsSlotType#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#delete Lexv2ModelsSlotType#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#update Lexv2ModelsSlotType#update}

---

### Lexv2ModelsSlotTypeValueSelectionSetting <a name="Lexv2ModelsSlotTypeValueSelectionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeValueSelectionSetting;

Lexv2ModelsSlotTypeValueSelectionSetting.builder()
    .resolutionStrategy(java.lang.String)
//  .advancedRecognitionSetting(IResolvable)
//  .advancedRecognitionSetting(java.util.List<Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting>)
//  .regexFilter(IResolvable)
//  .regexFilter(java.util.List<Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.resolutionStrategy">resolutionStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#resolution_strategy Lexv2ModelsSlotType#resolution_strategy}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.advancedRecognitionSetting">advancedRecognitionSetting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>></code> | advanced_recognition_setting block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.regexFilter">regexFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>></code> | regex_filter block. |

---

##### `resolutionStrategy`<sup>Required</sup> <a name="resolutionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.resolutionStrategy"></a>

```java
public java.lang.String getResolutionStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#resolution_strategy Lexv2ModelsSlotType#resolution_strategy}.

---

##### `advancedRecognitionSetting`<sup>Optional</sup> <a name="advancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.advancedRecognitionSetting"></a>

```java
public java.lang.Object getAdvancedRecognitionSetting();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>>

advanced_recognition_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#advanced_recognition_setting Lexv2ModelsSlotType#advanced_recognition_setting}

---

##### `regexFilter`<sup>Optional</sup> <a name="regexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting.property.regexFilter"></a>

```java
public java.lang.Object getRegexFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>>

regex_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#regex_filter Lexv2ModelsSlotType#regex_filter}

---

### Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting <a name="Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting;

Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting.builder()
//  .audioRecognitionStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting.property.audioRecognitionStrategy">audioRecognitionStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#audio_recognition_strategy Lexv2ModelsSlotType#audio_recognition_strategy}. |

---

##### `audioRecognitionStrategy`<sup>Optional</sup> <a name="audioRecognitionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting.property.audioRecognitionStrategy"></a>

```java
public java.lang.String getAudioRecognitionStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#audio_recognition_strategy Lexv2ModelsSlotType#audio_recognition_strategy}.

---

### Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter <a name="Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter;

Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter.builder()
    .pattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#pattern Lexv2ModelsSlotType#pattern}. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/lexv2models_slot_type#pattern Lexv2ModelsSlotType#pattern}.

---

## Classes <a name="Classes" id="Classes"></a>

### Lexv2ModelsSlotTypeCompositeSlotTypeSettingList <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList;

new Lexv2ModelsSlotTypeCompositeSlotTypeSettingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.get"></a>

```java
public Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>>

---


### Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference;

new Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.putSubSlots">putSubSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resetSubSlots">resetSubSlots</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubSlots` <a name="putSubSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.putSubSlots"></a>

```java
public void putSubSlots(IResolvable OR java.util.List<Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.putSubSlots.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>>

---

##### `resetSubSlots` <a name="resetSubSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.resetSubSlots"></a>

```java
public void resetSubSlots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.subSlots">subSlots</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.subSlotsInput">subSlotsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subSlots`<sup>Required</sup> <a name="subSlots" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.subSlots"></a>

```java
public Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList getSubSlots();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList</a>

---

##### `subSlotsInput`<sup>Optional</sup> <a name="subSlotsInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.subSlotsInput"></a>

```java
public java.lang.Object getSubSlotsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSetting">Lexv2ModelsSlotTypeCompositeSlotTypeSetting</a>

---


### Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList;

new Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.get"></a>

```java
public Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>>

---


### Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference <a name="Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference;

new Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.slotTypeIdInput">slotTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.slotTypeId">slotTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `slotTypeIdInput`<sup>Optional</sup> <a name="slotTypeIdInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.slotTypeIdInput"></a>

```java
public java.lang.String getSlotTypeIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `slotTypeId`<sup>Required</sup> <a name="slotTypeId" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.slotTypeId"></a>

```java
public java.lang.String getSlotTypeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots">Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots</a>

---


### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList;

new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.get"></a>

```java
public Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>>

---


### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference;

new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.putSource"></a>

```java
public void putSource(IResolvable OR java.util.List<Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.putSource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>>

---

##### `resetSource` <a name="resetSource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.sourceInput">sourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.source"></a>

```java
public Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList getSource();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.sourceInput"></a>

```java
public java.lang.Object getSourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>

---


### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList;

new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.get"></a>

```java
public Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>>

---


### Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference <a name="Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference;

new Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3ObjectKeyInput">s3ObjectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3ObjectKey">s3ObjectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3ObjectKeyInput`<sup>Optional</sup> <a name="s3ObjectKeyInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3ObjectKeyInput"></a>

```java
public java.lang.String getS3ObjectKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3ObjectKey`<sup>Required</sup> <a name="s3ObjectKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.s3ObjectKey"></a>

```java
public java.lang.String getS3ObjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource</a>

---


### Lexv2ModelsSlotTypeExternalSourceSettingList <a name="Lexv2ModelsSlotTypeExternalSourceSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeExternalSourceSettingList;

new Lexv2ModelsSlotTypeExternalSourceSettingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.get"></a>

```java
public Lexv2ModelsSlotTypeExternalSourceSettingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>>

---


### Lexv2ModelsSlotTypeExternalSourceSettingOutputReference <a name="Lexv2ModelsSlotTypeExternalSourceSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference;

new Lexv2ModelsSlotTypeExternalSourceSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.putGrammarSlotTypeSetting">putGrammarSlotTypeSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resetGrammarSlotTypeSetting">resetGrammarSlotTypeSetting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrammarSlotTypeSetting` <a name="putGrammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.putGrammarSlotTypeSetting"></a>

```java
public void putGrammarSlotTypeSetting(IResolvable OR java.util.List<Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.putGrammarSlotTypeSetting.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>>

---

##### `resetGrammarSlotTypeSetting` <a name="resetGrammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.resetGrammarSlotTypeSetting"></a>

```java
public void resetGrammarSlotTypeSetting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.grammarSlotTypeSetting">grammarSlotTypeSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.grammarSlotTypeSettingInput">grammarSlotTypeSettingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grammarSlotTypeSetting`<sup>Required</sup> <a name="grammarSlotTypeSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.grammarSlotTypeSetting"></a>

```java
public Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList getGrammarSlotTypeSetting();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList</a>

---

##### `grammarSlotTypeSettingInput`<sup>Optional</sup> <a name="grammarSlotTypeSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.grammarSlotTypeSettingInput"></a>

```java
public java.lang.Object getGrammarSlotTypeSettingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting">Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSettingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeExternalSourceSetting">Lexv2ModelsSlotTypeExternalSourceSetting</a>

---


### Lexv2ModelsSlotTypeSlotTypeValuesList <a name="Lexv2ModelsSlotTypeSlotTypeValuesList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeSlotTypeValuesList;

new Lexv2ModelsSlotTypeSlotTypeValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.get"></a>

```java
public Lexv2ModelsSlotTypeSlotTypeValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>>

---


### Lexv2ModelsSlotTypeSlotTypeValuesOutputReference <a name="Lexv2ModelsSlotTypeSlotTypeValuesOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference;

new Lexv2ModelsSlotTypeSlotTypeValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSampleValue">putSampleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSynonyms">putSynonyms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resetSampleValue">resetSampleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSampleValue` <a name="putSampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSampleValue"></a>

```java
public void putSampleValue(IResolvable OR java.util.List<Lexv2ModelsSlotTypeSlotTypeValuesSampleValue> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSampleValue.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>>

---

##### `putSynonyms` <a name="putSynonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSynonyms"></a>

```java
public void putSynonyms(IResolvable OR java.util.List<Lexv2ModelsSlotTypeSlotTypeValuesSynonyms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.putSynonyms.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>>

---

##### `resetSampleValue` <a name="resetSampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resetSampleValue"></a>

```java
public void resetSampleValue()
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.resetSynonyms"></a>

```java
public void resetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.sampleValue">sampleValue</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList">Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.synonyms">synonyms</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList">Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.sampleValueInput">sampleValueInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sampleValue`<sup>Required</sup> <a name="sampleValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.sampleValue"></a>

```java
public Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList getSampleValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList">Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList</a>

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.synonyms"></a>

```java
public Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList getSynonyms();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList">Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList</a>

---

##### `sampleValueInput`<sup>Optional</sup> <a name="sampleValueInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.sampleValueInput"></a>

```java
public java.lang.Object getSampleValueInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>>

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.synonymsInput"></a>

```java
public java.lang.Object getSynonymsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValues">Lexv2ModelsSlotTypeSlotTypeValues</a>

---


### Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList <a name="Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList;

new Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.get"></a>

```java
public Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>>

---


### Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference <a name="Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference;

new Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSampleValue">Lexv2ModelsSlotTypeSlotTypeValuesSampleValue</a>

---


### Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList <a name="Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList;

new Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.get"></a>

```java
public Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>>

---


### Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference <a name="Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference;

new Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeSlotTypeValuesSynonyms">Lexv2ModelsSlotTypeSlotTypeValuesSynonyms</a>

---


### Lexv2ModelsSlotTypeTimeoutsOutputReference <a name="Lexv2ModelsSlotTypeTimeoutsOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeTimeoutsOutputReference;

new Lexv2ModelsSlotTypeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeTimeouts">Lexv2ModelsSlotTypeTimeouts</a>

---


### Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList <a name="Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList;

new Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.get"></a>

```java
public Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>>

---


### Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference <a name="Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference;

new Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resetAudioRecognitionStrategy">resetAudioRecognitionStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudioRecognitionStrategy` <a name="resetAudioRecognitionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.resetAudioRecognitionStrategy"></a>

```java
public void resetAudioRecognitionStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.audioRecognitionStrategyInput">audioRecognitionStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.audioRecognitionStrategy">audioRecognitionStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audioRecognitionStrategyInput`<sup>Optional</sup> <a name="audioRecognitionStrategyInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.audioRecognitionStrategyInput"></a>

```java
public java.lang.String getAudioRecognitionStrategyInput();
```

- *Type:* java.lang.String

---

##### `audioRecognitionStrategy`<sup>Required</sup> <a name="audioRecognitionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.audioRecognitionStrategy"></a>

```java
public java.lang.String getAudioRecognitionStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>

---


### Lexv2ModelsSlotTypeValueSelectionSettingList <a name="Lexv2ModelsSlotTypeValueSelectionSettingList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeValueSelectionSettingList;

new Lexv2ModelsSlotTypeValueSelectionSettingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.get"></a>

```java
public Lexv2ModelsSlotTypeValueSelectionSettingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>>

---


### Lexv2ModelsSlotTypeValueSelectionSettingOutputReference <a name="Lexv2ModelsSlotTypeValueSelectionSettingOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference;

new Lexv2ModelsSlotTypeValueSelectionSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putAdvancedRecognitionSetting">putAdvancedRecognitionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putRegexFilter">putRegexFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resetAdvancedRecognitionSetting">resetAdvancedRecognitionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resetRegexFilter">resetRegexFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedRecognitionSetting` <a name="putAdvancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putAdvancedRecognitionSetting"></a>

```java
public void putAdvancedRecognitionSetting(IResolvable OR java.util.List<Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putAdvancedRecognitionSetting.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>>

---

##### `putRegexFilter` <a name="putRegexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putRegexFilter"></a>

```java
public void putRegexFilter(IResolvable OR java.util.List<Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.putRegexFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>>

---

##### `resetAdvancedRecognitionSetting` <a name="resetAdvancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resetAdvancedRecognitionSetting"></a>

```java
public void resetAdvancedRecognitionSetting()
```

##### `resetRegexFilter` <a name="resetRegexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.resetRegexFilter"></a>

```java
public void resetRegexFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.advancedRecognitionSetting">advancedRecognitionSetting</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.regexFilter">regexFilter</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.advancedRecognitionSettingInput">advancedRecognitionSettingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.regexFilterInput">regexFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.resolutionStrategyInput">resolutionStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.resolutionStrategy">resolutionStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advancedRecognitionSetting`<sup>Required</sup> <a name="advancedRecognitionSetting" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.advancedRecognitionSetting"></a>

```java
public Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList getAdvancedRecognitionSetting();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList</a>

---

##### `regexFilter`<sup>Required</sup> <a name="regexFilter" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.regexFilter"></a>

```java
public Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList getRegexFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList</a>

---

##### `advancedRecognitionSettingInput`<sup>Optional</sup> <a name="advancedRecognitionSettingInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.advancedRecognitionSettingInput"></a>

```java
public java.lang.Object getAdvancedRecognitionSettingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting">Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting</a>>

---

##### `regexFilterInput`<sup>Optional</sup> <a name="regexFilterInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.regexFilterInput"></a>

```java
public java.lang.Object getRegexFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>>

---

##### `resolutionStrategyInput`<sup>Optional</sup> <a name="resolutionStrategyInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.resolutionStrategyInput"></a>

```java
public java.lang.String getResolutionStrategyInput();
```

- *Type:* java.lang.String

---

##### `resolutionStrategy`<sup>Required</sup> <a name="resolutionStrategy" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.resolutionStrategy"></a>

```java
public java.lang.String getResolutionStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSetting">Lexv2ModelsSlotTypeValueSelectionSetting</a>

---


### Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList <a name="Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList;

new Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.get"></a>

```java
public Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>>

---


### Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference <a name="Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lexv2_models_slot_type.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference;

new Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.lexv2ModelsSlotType.Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter">Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter</a>

---




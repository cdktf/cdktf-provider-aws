# `appintegrationsDataIntegration` Submodule <a name="`appintegrationsDataIntegration` Submodule" id="@cdktf/provider-aws.appintegrationsDataIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsDataIntegration <a name="AppintegrationsDataIntegration" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration aws_appintegrations_data_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_data_integration.AppintegrationsDataIntegration;

AppintegrationsDataIntegration.Builder.create(Construct scope, java.lang.String id)
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
    .kmsKey(java.lang.String)
    .name(java.lang.String)
    .scheduleConfig(AppintegrationsDataIntegrationScheduleConfig)
    .sourceUri(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scheduleConfig">scheduleConfig</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | schedule_config block. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.sourceUri">sourceUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#id AppintegrationsDataIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#tags_all AppintegrationsDataIntegration#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}.

---

##### `scheduleConfig`<sup>Required</sup> <a name="scheduleConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scheduleConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

schedule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#schedule_config AppintegrationsDataIntegration#schedule_config}

---

##### `sourceUri`<sup>Required</sup> <a name="sourceUri" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.sourceUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#id AppintegrationsDataIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#tags_all AppintegrationsDataIntegration#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig">putScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScheduleConfig` <a name="putScheduleConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig"></a>

```java
public void putScheduleConfig(AppintegrationsDataIntegrationScheduleConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppintegrationsDataIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_data_integration.AppintegrationsDataIntegration;

AppintegrationsDataIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_data_integration.AppintegrationsDataIntegration;

AppintegrationsDataIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_data_integration.AppintegrationsDataIntegration;

AppintegrationsDataIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_data_integration.AppintegrationsDataIntegration;

AppintegrationsDataIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppintegrationsDataIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppintegrationsDataIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppintegrationsDataIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppintegrationsDataIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppintegrationsDataIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfig">scheduleConfig</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference">AppintegrationsDataIntegrationScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfigInput">scheduleConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUriInput">sourceUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUri">sourceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `scheduleConfig`<sup>Required</sup> <a name="scheduleConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfig"></a>

```java
public AppintegrationsDataIntegrationScheduleConfigOutputReference getScheduleConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference">AppintegrationsDataIntegrationScheduleConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleConfigInput`<sup>Optional</sup> <a name="scheduleConfigInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfigInput"></a>

```java
public AppintegrationsDataIntegrationScheduleConfig getScheduleConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

---

##### `sourceUriInput`<sup>Optional</sup> <a name="sourceUriInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUriInput"></a>

```java
public java.lang.String getSourceUriInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceUri`<sup>Required</sup> <a name="sourceUri" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUri"></a>

```java
public java.lang.String getSourceUri();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsDataIntegrationConfig <a name="AppintegrationsDataIntegrationConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_data_integration.AppintegrationsDataIntegrationConfig;

AppintegrationsDataIntegrationConfig.builder()
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
    .kmsKey(java.lang.String)
    .name(java.lang.String)
    .scheduleConfig(AppintegrationsDataIntegrationScheduleConfig)
    .sourceUri(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.scheduleConfig">scheduleConfig</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | schedule_config block. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.sourceUri">sourceUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#id AppintegrationsDataIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#tags_all AppintegrationsDataIntegration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}.

---

##### `scheduleConfig`<sup>Required</sup> <a name="scheduleConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.scheduleConfig"></a>

```java
public AppintegrationsDataIntegrationScheduleConfig getScheduleConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

schedule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#schedule_config AppintegrationsDataIntegration#schedule_config}

---

##### `sourceUri`<sup>Required</sup> <a name="sourceUri" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.sourceUri"></a>

```java
public java.lang.String getSourceUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#id AppintegrationsDataIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#tags_all AppintegrationsDataIntegration#tags_all}.

---

### AppintegrationsDataIntegrationScheduleConfig <a name="AppintegrationsDataIntegrationScheduleConfig" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_data_integration.AppintegrationsDataIntegrationScheduleConfig;

AppintegrationsDataIntegrationScheduleConfig.builder()
    .firstExecutionFrom(java.lang.String)
    .object(java.lang.String)
    .scheduleExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.firstExecutionFrom">firstExecutionFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#first_execution_from AppintegrationsDataIntegration#first_execution_from}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#object AppintegrationsDataIntegration#object}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#schedule_expression AppintegrationsDataIntegration#schedule_expression}. |

---

##### `firstExecutionFrom`<sup>Required</sup> <a name="firstExecutionFrom" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.firstExecutionFrom"></a>

```java
public java.lang.String getFirstExecutionFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#first_execution_from AppintegrationsDataIntegration#first_execution_from}.

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#object AppintegrationsDataIntegration#object}.

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/appintegrations_data_integration#schedule_expression AppintegrationsDataIntegration#schedule_expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsDataIntegrationScheduleConfigOutputReference <a name="AppintegrationsDataIntegrationScheduleConfigOutputReference" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appintegrations_data_integration.AppintegrationsDataIntegrationScheduleConfigOutputReference;

new AppintegrationsDataIntegrationScheduleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFromInput">firstExecutionFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom">firstExecutionFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `firstExecutionFromInput`<sup>Optional</sup> <a name="firstExecutionFromInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFromInput"></a>

```java
public java.lang.String getFirstExecutionFromInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `firstExecutionFrom`<sup>Required</sup> <a name="firstExecutionFrom" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom"></a>

```java
public java.lang.String getFirstExecutionFrom();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue"></a>

```java
public AppintegrationsDataIntegrationScheduleConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

---




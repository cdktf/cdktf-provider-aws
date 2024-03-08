# `quicksightTemplate` Submodule <a name="`quicksightTemplate` Submodule" id="@cdktf/provider-aws.quicksightTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTemplate <a name="QuicksightTemplate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template aws_quicksight_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplate;

QuicksightTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .templateId(java.lang.String)
    .versionDescription(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .definition(java.lang.Object)
//  .id(java.lang.String)
//  .permissions(IResolvable)
//  .permissions(java.util.List<QuicksightTemplatePermissions>)
//  .sourceEntity(QuicksightTemplateSourceEntity)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(QuicksightTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#name QuicksightTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.templateId">templateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#template_id QuicksightTemplate#template_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#version_description QuicksightTemplate#version_description}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#aws_account_id QuicksightTemplate#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.definition">definition</a></code> | <code>java.lang.Object</code> | definition block. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#id QuicksightTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.permissions">permissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>></code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a></code> | source_entity block. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#tags QuicksightTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#tags_all QuicksightTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts">QuicksightTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#name QuicksightTemplate#name}.

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.templateId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#template_id QuicksightTemplate#template_id}.

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.versionDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#version_description QuicksightTemplate#version_description}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#aws_account_id QuicksightTemplate#aws_account_id}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.definition"></a>

- *Type:* java.lang.Object

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#definition QuicksightTemplate#definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#id QuicksightTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.permissions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#permissions QuicksightTemplate#permissions}

---

##### `sourceEntity`<sup>Optional</sup> <a name="sourceEntity" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.sourceEntity"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

source_entity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#source_entity QuicksightTemplate#source_entity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#tags QuicksightTemplate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#tags_all QuicksightTemplate#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts">QuicksightTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#timeouts QuicksightTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putSourceEntity">putSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetSourceEntity">resetSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putPermissions"></a>

```java
public void putPermissions(IResolvable OR java.util.List<QuicksightTemplatePermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putPermissions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>>

---

##### `putSourceEntity` <a name="putSourceEntity" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putSourceEntity"></a>

```java
public void putSourceEntity(QuicksightTemplateSourceEntity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putSourceEntity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putTimeouts"></a>

```java
public void putTimeouts(QuicksightTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts">QuicksightTemplateTimeouts</a>

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetDefinition` <a name="resetDefinition" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetDefinition"></a>

```java
public void resetDefinition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetSourceEntity` <a name="resetSourceEntity" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetSourceEntity"></a>

```java
public void resetSourceEntity()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplate;

QuicksightTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplate;

QuicksightTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplate;

QuicksightTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplate;

QuicksightTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a QuicksightTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.definitionInput">definitionInput</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList">QuicksightTemplatePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference">QuicksightTemplateSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.sourceEntityArn">sourceEntityArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference">QuicksightTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.versionNumber">versionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.permissionsInput">permissionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.sourceEntityInput">sourceEntityInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.templateIdInput">templateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts">QuicksightTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.versionDescriptionInput">versionDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.definition">definition</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.templateId">templateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Required</sup> <a name="definitionInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.definitionInput"></a>

```java
public java.lang.Object getDefinitionInput();
```

- *Type:* java.lang.Object

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.permissions"></a>

```java
public QuicksightTemplatePermissionsList getPermissions();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList">QuicksightTemplatePermissionsList</a>

---

##### `sourceEntity`<sup>Required</sup> <a name="sourceEntity" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.sourceEntity"></a>

```java
public QuicksightTemplateSourceEntityOutputReference getSourceEntity();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference">QuicksightTemplateSourceEntityOutputReference</a>

---

##### `sourceEntityArn`<sup>Required</sup> <a name="sourceEntityArn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.sourceEntityArn"></a>

```java
public java.lang.String getSourceEntityArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.timeouts"></a>

```java
public QuicksightTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference">QuicksightTemplateTimeoutsOutputReference</a>

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.versionNumber"></a>

```java
public java.lang.Number getVersionNumber();
```

- *Type:* java.lang.Number

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.permissionsInput"></a>

```java
public java.lang.Object getPermissionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>>

---

##### `sourceEntityInput`<sup>Optional</sup> <a name="sourceEntityInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.sourceEntityInput"></a>

```java
public QuicksightTemplateSourceEntity getSourceEntityInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.templateIdInput"></a>

```java
public java.lang.String getTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts">QuicksightTemplateTimeouts</a>

---

##### `versionDescriptionInput`<sup>Optional</sup> <a name="versionDescriptionInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.versionDescriptionInput"></a>

```java
public java.lang.String getVersionDescriptionInput();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.definition"></a>

```java
public java.lang.Object getDefinition();
```

- *Type:* java.lang.Object

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.versionDescription"></a>

```java
public java.lang.String getVersionDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightTemplateConfig <a name="QuicksightTemplateConfig" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplateConfig;

QuicksightTemplateConfig.builder()
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
    .name(java.lang.String)
    .templateId(java.lang.String)
    .versionDescription(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .definition(java.lang.Object)
//  .id(java.lang.String)
//  .permissions(IResolvable)
//  .permissions(java.util.List<QuicksightTemplatePermissions>)
//  .sourceEntity(QuicksightTemplateSourceEntity)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(QuicksightTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#name QuicksightTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.templateId">templateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#template_id QuicksightTemplate#template_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#version_description QuicksightTemplate#version_description}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#aws_account_id QuicksightTemplate#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.definition">definition</a></code> | <code>java.lang.Object</code> | definition block. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#id QuicksightTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.permissions">permissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>></code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a></code> | source_entity block. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#tags QuicksightTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#tags_all QuicksightTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts">QuicksightTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#name QuicksightTemplate#name}.

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#template_id QuicksightTemplate#template_id}.

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.versionDescription"></a>

```java
public java.lang.String getVersionDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#version_description QuicksightTemplate#version_description}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#aws_account_id QuicksightTemplate#aws_account_id}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.definition"></a>

```java
public java.lang.Object getDefinition();
```

- *Type:* java.lang.Object

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#definition QuicksightTemplate#definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#id QuicksightTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.permissions"></a>

```java
public java.lang.Object getPermissions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#permissions QuicksightTemplate#permissions}

---

##### `sourceEntity`<sup>Optional</sup> <a name="sourceEntity" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.sourceEntity"></a>

```java
public QuicksightTemplateSourceEntity getSourceEntity();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

source_entity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#source_entity QuicksightTemplate#source_entity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#tags QuicksightTemplate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#tags_all QuicksightTemplate#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.timeouts"></a>

```java
public QuicksightTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts">QuicksightTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#timeouts QuicksightTemplate#timeouts}

---

### QuicksightTemplatePermissions <a name="QuicksightTemplatePermissions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplatePermissions;

QuicksightTemplatePermissions.builder()
    .actions(java.util.List<java.lang.String>)
    .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#principal QuicksightTemplate#principal}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#principal QuicksightTemplate#principal}.

---

### QuicksightTemplateSourceEntity <a name="QuicksightTemplateSourceEntity" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplateSourceEntity;

QuicksightTemplateSourceEntity.builder()
//  .sourceAnalysis(QuicksightTemplateSourceEntitySourceAnalysis)
//  .sourceTemplate(QuicksightTemplateSourceEntitySourceTemplate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity.property.sourceAnalysis">sourceAnalysis</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a></code> | source_analysis block. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a></code> | source_template block. |

---

##### `sourceAnalysis`<sup>Optional</sup> <a name="sourceAnalysis" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity.property.sourceAnalysis"></a>

```java
public QuicksightTemplateSourceEntitySourceAnalysis getSourceAnalysis();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a>

source_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#source_analysis QuicksightTemplate#source_analysis}

---

##### `sourceTemplate`<sup>Optional</sup> <a name="sourceTemplate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity.property.sourceTemplate"></a>

```java
public QuicksightTemplateSourceEntitySourceTemplate getSourceTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a>

source_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#source_template QuicksightTemplate#source_template}

---

### QuicksightTemplateSourceEntitySourceAnalysis <a name="QuicksightTemplateSourceEntitySourceAnalysis" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplateSourceEntitySourceAnalysis;

QuicksightTemplateSourceEntitySourceAnalysis.builder()
    .arn(java.lang.String)
    .dataSetReferences(IResolvable)
    .dataSetReferences(java.util.List<QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.property.dataSetReferences">dataSetReferences</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>></code> | data_set_references block. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}.

---

##### `dataSetReferences`<sup>Required</sup> <a name="dataSetReferences" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.property.dataSetReferences"></a>

```java
public java.lang.Object getDataSetReferences();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>>

data_set_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#data_set_references QuicksightTemplate#data_set_references}

---

### QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences <a name="QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences;

QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.builder()
    .dataSetArn(java.lang.String)
    .dataSetPlaceholder(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#data_set_arn QuicksightTemplate#data_set_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#data_set_placeholder QuicksightTemplate#data_set_placeholder}. |

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#data_set_arn QuicksightTemplate#data_set_arn}.

---

##### `dataSetPlaceholder`<sup>Required</sup> <a name="dataSetPlaceholder" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.property.dataSetPlaceholder"></a>

```java
public java.lang.String getDataSetPlaceholder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#data_set_placeholder QuicksightTemplate#data_set_placeholder}.

---

### QuicksightTemplateSourceEntitySourceTemplate <a name="QuicksightTemplateSourceEntitySourceTemplate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplateSourceEntitySourceTemplate;

QuicksightTemplateSourceEntitySourceTemplate.builder()
    .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}.

---

### QuicksightTemplateTimeouts <a name="QuicksightTemplateTimeouts" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplateTimeouts;

QuicksightTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#create QuicksightTemplate#create}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#delete QuicksightTemplate#delete}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#update QuicksightTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#create QuicksightTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#delete QuicksightTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/quicksight_template#update QuicksightTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightTemplatePermissionsList <a name="QuicksightTemplatePermissionsList" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplatePermissionsList;

new QuicksightTemplatePermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.get"></a>

```java
public QuicksightTemplatePermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>>

---


### QuicksightTemplatePermissionsOutputReference <a name="QuicksightTemplatePermissionsOutputReference" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplatePermissionsOutputReference;

new QuicksightTemplatePermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>

---


### QuicksightTemplateSourceEntityOutputReference <a name="QuicksightTemplateSourceEntityOutputReference" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplateSourceEntityOutputReference;

new QuicksightTemplateSourceEntityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceAnalysis">putSourceAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceTemplate">putSourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resetSourceAnalysis">resetSourceAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resetSourceTemplate">resetSourceTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceAnalysis` <a name="putSourceAnalysis" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceAnalysis"></a>

```java
public void putSourceAnalysis(QuicksightTemplateSourceEntitySourceAnalysis value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a>

---

##### `putSourceTemplate` <a name="putSourceTemplate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceTemplate"></a>

```java
public void putSourceTemplate(QuicksightTemplateSourceEntitySourceTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a>

---

##### `resetSourceAnalysis` <a name="resetSourceAnalysis" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resetSourceAnalysis"></a>

```java
public void resetSourceAnalysis()
```

##### `resetSourceTemplate` <a name="resetSourceTemplate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resetSourceTemplate"></a>

```java
public void resetSourceTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceAnalysis">sourceAnalysis</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference">QuicksightTemplateSourceEntitySourceAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference">QuicksightTemplateSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceAnalysisInput">sourceAnalysisInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceTemplateInput">sourceTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceAnalysis`<sup>Required</sup> <a name="sourceAnalysis" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceAnalysis"></a>

```java
public QuicksightTemplateSourceEntitySourceAnalysisOutputReference getSourceAnalysis();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference">QuicksightTemplateSourceEntitySourceAnalysisOutputReference</a>

---

##### `sourceTemplate`<sup>Required</sup> <a name="sourceTemplate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceTemplate"></a>

```java
public QuicksightTemplateSourceEntitySourceTemplateOutputReference getSourceTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference">QuicksightTemplateSourceEntitySourceTemplateOutputReference</a>

---

##### `sourceAnalysisInput`<sup>Optional</sup> <a name="sourceAnalysisInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceAnalysisInput"></a>

```java
public QuicksightTemplateSourceEntitySourceAnalysis getSourceAnalysisInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a>

---

##### `sourceTemplateInput`<sup>Optional</sup> <a name="sourceTemplateInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceTemplateInput"></a>

```java
public QuicksightTemplateSourceEntitySourceTemplate getSourceTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.internalValue"></a>

```java
public QuicksightTemplateSourceEntity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

---


### QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList <a name="QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList;

new QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.get"></a>

```java
public QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>>

---


### QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference <a name="QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference;

new QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetPlaceholderInput">dataSetPlaceholderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetArnInput"></a>

```java
public java.lang.String getDataSetArnInput();
```

- *Type:* java.lang.String

---

##### `dataSetPlaceholderInput`<sup>Optional</sup> <a name="dataSetPlaceholderInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetPlaceholderInput"></a>

```java
public java.lang.String getDataSetPlaceholderInput();
```

- *Type:* java.lang.String

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetArn"></a>

```java
public java.lang.String getDataSetArn();
```

- *Type:* java.lang.String

---

##### `dataSetPlaceholder`<sup>Required</sup> <a name="dataSetPlaceholder" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```java
public java.lang.String getDataSetPlaceholder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>

---


### QuicksightTemplateSourceEntitySourceAnalysisOutputReference <a name="QuicksightTemplateSourceEntitySourceAnalysisOutputReference" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplateSourceEntitySourceAnalysisOutputReference;

new QuicksightTemplateSourceEntitySourceAnalysisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.putDataSetReferences">putDataSetReferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSetReferences` <a name="putDataSetReferences" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.putDataSetReferences"></a>

```java
public void putDataSetReferences(IResolvable OR java.util.List<QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.putDataSetReferences.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.dataSetReferences">dataSetReferences</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.dataSetReferencesInput">dataSetReferencesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSetReferences`<sup>Required</sup> <a name="dataSetReferences" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.dataSetReferences"></a>

```java
public QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList getDataSetReferences();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `dataSetReferencesInput`<sup>Optional</sup> <a name="dataSetReferencesInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.dataSetReferencesInput"></a>

```java
public java.lang.Object getDataSetReferencesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.internalValue"></a>

```java
public QuicksightTemplateSourceEntitySourceAnalysis getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a>

---


### QuicksightTemplateSourceEntitySourceTemplateOutputReference <a name="QuicksightTemplateSourceEntitySourceTemplateOutputReference" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplateSourceEntitySourceTemplateOutputReference;

new QuicksightTemplateSourceEntitySourceTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```java
public QuicksightTemplateSourceEntitySourceTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a>

---


### QuicksightTemplateTimeoutsOutputReference <a name="QuicksightTemplateTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template.QuicksightTemplateTimeoutsOutputReference;

new QuicksightTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts">QuicksightTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts">QuicksightTemplateTimeouts</a>

---




# `quicksightTemplateAlias` Submodule <a name="`quicksightTemplateAlias` Submodule" id="@cdktf/provider-aws.quicksightTemplateAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTemplateAlias <a name="QuicksightTemplateAlias" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias aws_quicksight_template_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template_alias.QuicksightTemplateAlias;

QuicksightTemplateAlias.Builder.create(Construct scope, java.lang.String id)
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
    .aliasName(java.lang.String)
    .templateId(java.lang.String)
    .templateVersionNumber(java.lang.Number)
//  .awsAccountId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.aliasName">aliasName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#alias_name QuicksightTemplateAlias#alias_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.templateId">templateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#template_id QuicksightTemplateAlias#template_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.templateVersionNumber">templateVersionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#template_version_number QuicksightTemplateAlias#template_version_number}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#aws_account_id QuicksightTemplateAlias#aws_account_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.aliasName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#alias_name QuicksightTemplateAlias#alias_name}.

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.templateId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#template_id QuicksightTemplateAlias#template_id}.

---

##### `templateVersionNumber`<sup>Required</sup> <a name="templateVersionNumber" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.templateVersionNumber"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#template_version_number QuicksightTemplateAlias#template_version_number}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#aws_account_id QuicksightTemplateAlias#aws_account_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightTemplateAlias resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template_alias.QuicksightTemplateAlias;

QuicksightTemplateAlias.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template_alias.QuicksightTemplateAlias;

QuicksightTemplateAlias.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template_alias.QuicksightTemplateAlias;

QuicksightTemplateAlias.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template_alias.QuicksightTemplateAlias;

QuicksightTemplateAlias.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightTemplateAlias.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a QuicksightTemplateAlias resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightTemplateAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightTemplateAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightTemplateAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.aliasNameInput">aliasNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateIdInput">templateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateVersionNumberInput">templateVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateId">templateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateVersionNumber">templateVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.aliasNameInput"></a>

```java
public java.lang.String getAliasNameInput();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateIdInput"></a>

```java
public java.lang.String getTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `templateVersionNumberInput`<sup>Optional</sup> <a name="templateVersionNumberInput" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateVersionNumberInput"></a>

```java
public java.lang.Number getTemplateVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

---

##### `templateVersionNumber`<sup>Required</sup> <a name="templateVersionNumber" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateVersionNumber"></a>

```java
public java.lang.Number getTemplateVersionNumber();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightTemplateAliasConfig <a name="QuicksightTemplateAliasConfig" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_template_alias.QuicksightTemplateAliasConfig;

QuicksightTemplateAliasConfig.builder()
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
    .aliasName(java.lang.String)
    .templateId(java.lang.String)
    .templateVersionNumber(java.lang.Number)
//  .awsAccountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.aliasName">aliasName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#alias_name QuicksightTemplateAlias#alias_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.templateId">templateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#template_id QuicksightTemplateAlias#template_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.templateVersionNumber">templateVersionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#template_version_number QuicksightTemplateAlias#template_version_number}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#aws_account_id QuicksightTemplateAlias#aws_account_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.aliasName"></a>

```java
public java.lang.String getAliasName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#alias_name QuicksightTemplateAlias#alias_name}.

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#template_id QuicksightTemplateAlias#template_id}.

---

##### `templateVersionNumber`<sup>Required</sup> <a name="templateVersionNumber" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.templateVersionNumber"></a>

```java
public java.lang.Number getTemplateVersionNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#template_version_number QuicksightTemplateAlias#template_version_number}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/quicksight_template_alias#aws_account_id QuicksightTemplateAlias#aws_account_id}.

---




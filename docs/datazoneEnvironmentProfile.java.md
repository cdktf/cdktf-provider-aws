# `datazoneEnvironmentProfile` Submodule <a name="`datazoneEnvironmentProfile` Submodule" id="@cdktf/provider-aws.datazoneEnvironmentProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironmentProfile <a name="DatazoneEnvironmentProfile" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile aws_datazone_environment_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_environment_profile.DatazoneEnvironmentProfile;

DatazoneEnvironmentProfile.Builder.create(Construct scope, java.lang.String id)
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
    .awsAccountRegion(java.lang.String)
    .domainIdentifier(java.lang.String)
    .environmentBlueprintIdentifier(java.lang.String)
    .name(java.lang.String)
    .projectIdentifier(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .description(java.lang.String)
//  .userParameters(IResolvable)
//  .userParameters(java.util.List<DatazoneEnvironmentProfileUserParameters>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.awsAccountRegion">awsAccountRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#aws_account_region DatazoneEnvironmentProfile#aws_account_region}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#domain_identifier DatazoneEnvironmentProfile#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.environmentBlueprintIdentifier">environmentBlueprintIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier DatazoneEnvironmentProfile#environment_blueprint_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.projectIdentifier">projectIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#project_identifier DatazoneEnvironmentProfile#project_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#aws_account_id DatazoneEnvironmentProfile#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#description DatazoneEnvironmentProfile#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.userParameters">userParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>></code> | user_parameters block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsAccountRegion`<sup>Required</sup> <a name="awsAccountRegion" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.awsAccountRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#aws_account_region DatazoneEnvironmentProfile#aws_account_region}.

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.domainIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#domain_identifier DatazoneEnvironmentProfile#domain_identifier}.

---

##### `environmentBlueprintIdentifier`<sup>Required</sup> <a name="environmentBlueprintIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.environmentBlueprintIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier DatazoneEnvironmentProfile#environment_blueprint_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}.

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.projectIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#project_identifier DatazoneEnvironmentProfile#project_identifier}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#aws_account_id DatazoneEnvironmentProfile#aws_account_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#description DatazoneEnvironmentProfile#description}.

---

##### `userParameters`<sup>Optional</sup> <a name="userParameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.userParameters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>>

user_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#user_parameters DatazoneEnvironmentProfile#user_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.putUserParameters">putUserParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetUserParameters">resetUserParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putUserParameters` <a name="putUserParameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.putUserParameters"></a>

```java
public void putUserParameters(IResolvable OR java.util.List<DatazoneEnvironmentProfileUserParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.putUserParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>>

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetUserParameters` <a name="resetUserParameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetUserParameters"></a>

```java
public void resetUserParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatazoneEnvironmentProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_environment_profile.DatazoneEnvironmentProfile;

DatazoneEnvironmentProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_environment_profile.DatazoneEnvironmentProfile;

DatazoneEnvironmentProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_environment_profile.DatazoneEnvironmentProfile;

DatazoneEnvironmentProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_environment_profile.DatazoneEnvironmentProfile;

DatazoneEnvironmentProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatazoneEnvironmentProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatazoneEnvironmentProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatazoneEnvironmentProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatazoneEnvironmentProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironmentProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.userParameters">userParameters</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList">DatazoneEnvironmentProfileUserParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountRegionInput">awsAccountRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.environmentBlueprintIdentifierInput">environmentBlueprintIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.projectIdentifierInput">projectIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.userParametersInput">userParametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountRegion">awsAccountRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.environmentBlueprintIdentifier">environmentBlueprintIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.projectIdentifier">projectIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `userParameters`<sup>Required</sup> <a name="userParameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.userParameters"></a>

```java
public DatazoneEnvironmentProfileUserParametersList getUserParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList">DatazoneEnvironmentProfileUserParametersList</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `awsAccountRegionInput`<sup>Optional</sup> <a name="awsAccountRegionInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountRegionInput"></a>

```java
public java.lang.String getAwsAccountRegionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.domainIdentifierInput"></a>

```java
public java.lang.String getDomainIdentifierInput();
```

- *Type:* java.lang.String

---

##### `environmentBlueprintIdentifierInput`<sup>Optional</sup> <a name="environmentBlueprintIdentifierInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.environmentBlueprintIdentifierInput"></a>

```java
public java.lang.String getEnvironmentBlueprintIdentifierInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdentifierInput`<sup>Optional</sup> <a name="projectIdentifierInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.projectIdentifierInput"></a>

```java
public java.lang.String getProjectIdentifierInput();
```

- *Type:* java.lang.String

---

##### `userParametersInput`<sup>Optional</sup> <a name="userParametersInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.userParametersInput"></a>

```java
public java.lang.Object getUserParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `awsAccountRegion`<sup>Required</sup> <a name="awsAccountRegion" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountRegion"></a>

```java
public java.lang.String getAwsAccountRegion();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

---

##### `environmentBlueprintIdentifier`<sup>Required</sup> <a name="environmentBlueprintIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.environmentBlueprintIdentifier"></a>

```java
public java.lang.String getEnvironmentBlueprintIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.projectIdentifier"></a>

```java
public java.lang.String getProjectIdentifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentProfileConfig <a name="DatazoneEnvironmentProfileConfig" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_environment_profile.DatazoneEnvironmentProfileConfig;

DatazoneEnvironmentProfileConfig.builder()
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
    .awsAccountRegion(java.lang.String)
    .domainIdentifier(java.lang.String)
    .environmentBlueprintIdentifier(java.lang.String)
    .name(java.lang.String)
    .projectIdentifier(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .description(java.lang.String)
//  .userParameters(IResolvable)
//  .userParameters(java.util.List<DatazoneEnvironmentProfileUserParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.awsAccountRegion">awsAccountRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#aws_account_region DatazoneEnvironmentProfile#aws_account_region}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#domain_identifier DatazoneEnvironmentProfile#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.environmentBlueprintIdentifier">environmentBlueprintIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier DatazoneEnvironmentProfile#environment_blueprint_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.projectIdentifier">projectIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#project_identifier DatazoneEnvironmentProfile#project_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#aws_account_id DatazoneEnvironmentProfile#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#description DatazoneEnvironmentProfile#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.userParameters">userParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>></code> | user_parameters block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsAccountRegion`<sup>Required</sup> <a name="awsAccountRegion" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.awsAccountRegion"></a>

```java
public java.lang.String getAwsAccountRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#aws_account_region DatazoneEnvironmentProfile#aws_account_region}.

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#domain_identifier DatazoneEnvironmentProfile#domain_identifier}.

---

##### `environmentBlueprintIdentifier`<sup>Required</sup> <a name="environmentBlueprintIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.environmentBlueprintIdentifier"></a>

```java
public java.lang.String getEnvironmentBlueprintIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier DatazoneEnvironmentProfile#environment_blueprint_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}.

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.projectIdentifier"></a>

```java
public java.lang.String getProjectIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#project_identifier DatazoneEnvironmentProfile#project_identifier}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#aws_account_id DatazoneEnvironmentProfile#aws_account_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#description DatazoneEnvironmentProfile#description}.

---

##### `userParameters`<sup>Optional</sup> <a name="userParameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.userParameters"></a>

```java
public java.lang.Object getUserParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>>

user_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#user_parameters DatazoneEnvironmentProfile#user_parameters}

---

### DatazoneEnvironmentProfileUserParameters <a name="DatazoneEnvironmentProfileUserParameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_environment_profile.DatazoneEnvironmentProfileUserParameters;

DatazoneEnvironmentProfileUserParameters.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#value DatazoneEnvironmentProfile#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/datazone_environment_profile#value DatazoneEnvironmentProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentProfileUserParametersList <a name="DatazoneEnvironmentProfileUserParametersList" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_environment_profile.DatazoneEnvironmentProfileUserParametersList;

new DatazoneEnvironmentProfileUserParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.get"></a>

```java
public DatazoneEnvironmentProfileUserParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>>

---


### DatazoneEnvironmentProfileUserParametersOutputReference <a name="DatazoneEnvironmentProfileUserParametersOutputReference" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_environment_profile.DatazoneEnvironmentProfileUserParametersOutputReference;

new DatazoneEnvironmentProfileUserParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>

---




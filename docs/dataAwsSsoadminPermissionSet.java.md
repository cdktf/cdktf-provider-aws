# `dataAwsSsoadminPermissionSet` Submodule <a name="`dataAwsSsoadminPermissionSet` Submodule" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsoadminPermissionSet <a name="DataAwsSsoadminPermissionSet" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set aws_ssoadmin_permission_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_permission_set.DataAwsSsoadminPermissionSet;

DataAwsSsoadminPermissionSet.Builder.create(Construct scope, java.lang.String id)
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
    .instanceArn(java.lang.String)
//  .arn(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#instance_arn DataAwsSsoadminPermissionSet#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#arn DataAwsSsoadminPermissionSet#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#id DataAwsSsoadminPermissionSet#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#name DataAwsSsoadminPermissionSet#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#tags DataAwsSsoadminPermissionSet#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#instance_arn DataAwsSsoadminPermissionSet#instance_arn}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#arn DataAwsSsoadminPermissionSet#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#id DataAwsSsoadminPermissionSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#name DataAwsSsoadminPermissionSet#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#region DataAwsSsoadminPermissionSet#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#tags DataAwsSsoadminPermissionSet#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetArn` <a name="resetArn" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.resetArn"></a>

```java
public void resetArn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsoadminPermissionSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_permission_set.DataAwsSsoadminPermissionSet;

DataAwsSsoadminPermissionSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_permission_set.DataAwsSsoadminPermissionSet;

DataAwsSsoadminPermissionSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_permission_set.DataAwsSsoadminPermissionSet;

DataAwsSsoadminPermissionSet.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_permission_set.DataAwsSsoadminPermissionSet;

DataAwsSsoadminPermissionSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsSsoadminPermissionSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsSsoadminPermissionSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsSsoadminPermissionSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsSsoadminPermissionSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsoadminPermissionSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.relayState">relayState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `relayState`<sup>Required</sup> <a name="relayState" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.relayState"></a>

```java
public java.lang.String getRelayState();
```

- *Type:* java.lang.String

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsoadminPermissionSetConfig <a name="DataAwsSsoadminPermissionSetConfig" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssoadmin_permission_set.DataAwsSsoadminPermissionSetConfig;

DataAwsSsoadminPermissionSetConfig.builder()
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
    .instanceArn(java.lang.String)
//  .arn(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#instance_arn DataAwsSsoadminPermissionSet#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#arn DataAwsSsoadminPermissionSet#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#id DataAwsSsoadminPermissionSet#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#name DataAwsSsoadminPermissionSet#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#tags DataAwsSsoadminPermissionSet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#instance_arn DataAwsSsoadminPermissionSet#instance_arn}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#arn DataAwsSsoadminPermissionSet#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#id DataAwsSsoadminPermissionSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#name DataAwsSsoadminPermissionSet#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#region DataAwsSsoadminPermissionSet#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSsoadminPermissionSet.DataAwsSsoadminPermissionSetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ssoadmin_permission_set#tags DataAwsSsoadminPermissionSet#tags}.

---




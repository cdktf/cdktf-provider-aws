# `dataAwsOutpostsOutpostInstanceType` Submodule <a name="`dataAwsOutpostsOutpostInstanceType` Submodule" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOutpostsOutpostInstanceType <a name="DataAwsOutpostsOutpostInstanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type aws_outposts_outpost_instance_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_outposts_outpost_instance_type.DataAwsOutpostsOutpostInstanceType;

DataAwsOutpostsOutpostInstanceType.Builder.create(Construct scope, java.lang.String id)
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
    .arn(java.lang.String)
//  .id(java.lang.String)
//  .instanceType(java.lang.String)
//  .preferredInstanceTypes(java.util.List<java.lang.String>)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#arn DataAwsOutpostsOutpostInstanceType#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#id DataAwsOutpostsOutpostInstanceType#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#instance_type DataAwsOutpostsOutpostInstanceType#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.preferredInstanceTypes">preferredInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#preferred_instance_types DataAwsOutpostsOutpostInstanceType#preferred_instance_types}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#arn DataAwsOutpostsOutpostInstanceType#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#id DataAwsOutpostsOutpostInstanceType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#instance_type DataAwsOutpostsOutpostInstanceType#instance_type}.

---

##### `preferredInstanceTypes`<sup>Optional</sup> <a name="preferredInstanceTypes" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.preferredInstanceTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#preferred_instance_types DataAwsOutpostsOutpostInstanceType#preferred_instance_types}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#region DataAwsOutpostsOutpostInstanceType#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetPreferredInstanceTypes">resetPreferredInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetPreferredInstanceTypes` <a name="resetPreferredInstanceTypes" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetPreferredInstanceTypes"></a>

```java
public void resetPreferredInstanceTypes()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOutpostsOutpostInstanceType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_outposts_outpost_instance_type.DataAwsOutpostsOutpostInstanceType;

DataAwsOutpostsOutpostInstanceType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_outposts_outpost_instance_type.DataAwsOutpostsOutpostInstanceType;

DataAwsOutpostsOutpostInstanceType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_outposts_outpost_instance_type.DataAwsOutpostsOutpostInstanceType;

DataAwsOutpostsOutpostInstanceType.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_outposts_outpost_instance_type.DataAwsOutpostsOutpostInstanceType;

DataAwsOutpostsOutpostInstanceType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsOutpostsOutpostInstanceType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsOutpostsOutpostInstanceType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsOutpostsOutpostInstanceType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsOutpostsOutpostInstanceType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOutpostsOutpostInstanceType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypesInput">preferredInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypes">preferredInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `preferredInstanceTypesInput`<sup>Optional</sup> <a name="preferredInstanceTypesInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getPreferredInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `preferredInstanceTypes`<sup>Required</sup> <a name="preferredInstanceTypes" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getPreferredInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOutpostsOutpostInstanceTypeConfig <a name="DataAwsOutpostsOutpostInstanceTypeConfig" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_outposts_outpost_instance_type.DataAwsOutpostsOutpostInstanceTypeConfig;

DataAwsOutpostsOutpostInstanceTypeConfig.builder()
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
    .arn(java.lang.String)
//  .id(java.lang.String)
//  .instanceType(java.lang.String)
//  .preferredInstanceTypes(java.util.List<java.lang.String>)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#arn DataAwsOutpostsOutpostInstanceType#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#id DataAwsOutpostsOutpostInstanceType#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#instance_type DataAwsOutpostsOutpostInstanceType#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.preferredInstanceTypes">preferredInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#preferred_instance_types DataAwsOutpostsOutpostInstanceType#preferred_instance_types}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#arn DataAwsOutpostsOutpostInstanceType#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#id DataAwsOutpostsOutpostInstanceType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#instance_type DataAwsOutpostsOutpostInstanceType#instance_type}.

---

##### `preferredInstanceTypes`<sup>Optional</sup> <a name="preferredInstanceTypes" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.preferredInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getPreferredInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#preferred_instance_types DataAwsOutpostsOutpostInstanceType#preferred_instance_types}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/outposts_outpost_instance_type#region DataAwsOutpostsOutpostInstanceType#region}

---




# `dataAwsAppconfigConfigurationProfile` Submodule <a name="`dataAwsAppconfigConfigurationProfile` Submodule" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppconfigConfigurationProfile <a name="DataAwsAppconfigConfigurationProfile" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile aws_appconfig_configuration_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appconfig_configuration_profile.DataAwsAppconfigConfigurationProfile;

DataAwsAppconfigConfigurationProfile.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
    .configurationProfileId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#application_id DataAwsAppconfigConfigurationProfile#application_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.configurationProfileId">configurationProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#configuration_profile_id DataAwsAppconfigConfigurationProfile#configuration_profile_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#id DataAwsAppconfigConfigurationProfile#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#tags DataAwsAppconfigConfigurationProfile#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#application_id DataAwsAppconfigConfigurationProfile#application_id}.

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.configurationProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#configuration_profile_id DataAwsAppconfigConfigurationProfile#configuration_profile_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#id DataAwsAppconfigConfigurationProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#tags DataAwsAppconfigConfigurationProfile#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appconfig_configuration_profile.DataAwsAppconfigConfigurationProfile;

DataAwsAppconfigConfigurationProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appconfig_configuration_profile.DataAwsAppconfigConfigurationProfile;

DataAwsAppconfigConfigurationProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appconfig_configuration_profile.DataAwsAppconfigConfigurationProfile;

DataAwsAppconfigConfigurationProfile.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.retrievalRoleArn">retrievalRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.validator">validator</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList">DataAwsAppconfigConfigurationProfileValidatorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.configurationProfileIdInput">configurationProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.configurationProfileId">configurationProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `retrievalRoleArn`<sup>Required</sup> <a name="retrievalRoleArn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.retrievalRoleArn"></a>

```java
public java.lang.String getRetrievalRoleArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `validator`<sup>Required</sup> <a name="validator" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.validator"></a>

```java
public DataAwsAppconfigConfigurationProfileValidatorList getValidator();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList">DataAwsAppconfigConfigurationProfileValidatorList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `configurationProfileIdInput`<sup>Optional</sup> <a name="configurationProfileIdInput" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.configurationProfileIdInput"></a>

```java
public java.lang.String getConfigurationProfileIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.configurationProfileId"></a>

```java
public java.lang.String getConfigurationProfileId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppconfigConfigurationProfileConfig <a name="DataAwsAppconfigConfigurationProfileConfig" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appconfig_configuration_profile.DataAwsAppconfigConfigurationProfileConfig;

DataAwsAppconfigConfigurationProfileConfig.builder()
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
    .applicationId(java.lang.String)
    .configurationProfileId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#application_id DataAwsAppconfigConfigurationProfile#application_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.configurationProfileId">configurationProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#configuration_profile_id DataAwsAppconfigConfigurationProfile#configuration_profile_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#id DataAwsAppconfigConfigurationProfile#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#tags DataAwsAppconfigConfigurationProfile#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#application_id DataAwsAppconfigConfigurationProfile#application_id}.

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.configurationProfileId"></a>

```java
public java.lang.String getConfigurationProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#configuration_profile_id DataAwsAppconfigConfigurationProfile#configuration_profile_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#id DataAwsAppconfigConfigurationProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#tags DataAwsAppconfigConfigurationProfile#tags}.

---

### DataAwsAppconfigConfigurationProfileValidator <a name="DataAwsAppconfigConfigurationProfileValidator" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appconfig_configuration_profile.DataAwsAppconfigConfigurationProfileValidator;

DataAwsAppconfigConfigurationProfileValidator.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppconfigConfigurationProfileValidatorList <a name="DataAwsAppconfigConfigurationProfileValidatorList" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appconfig_configuration_profile.DataAwsAppconfigConfigurationProfileValidatorList;

new DataAwsAppconfigConfigurationProfileValidatorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.get"></a>

```java
public DataAwsAppconfigConfigurationProfileValidatorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAppconfigConfigurationProfileValidatorOutputReference <a name="DataAwsAppconfigConfigurationProfileValidatorOutputReference" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appconfig_configuration_profile.DataAwsAppconfigConfigurationProfileValidatorOutputReference;

new DataAwsAppconfigConfigurationProfileValidatorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator">DataAwsAppconfigConfigurationProfileValidator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.internalValue"></a>

```java
public DataAwsAppconfigConfigurationProfileValidator getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator">DataAwsAppconfigConfigurationProfileValidator</a>

---




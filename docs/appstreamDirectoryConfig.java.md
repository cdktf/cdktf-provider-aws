# `appstreamDirectoryConfig` Submodule <a name="`appstreamDirectoryConfig` Submodule" id="@cdktf/provider-aws.appstreamDirectoryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamDirectoryConfig <a name="AppstreamDirectoryConfig" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config aws_appstream_directory_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_directory_config.AppstreamDirectoryConfig;

AppstreamDirectoryConfig.Builder.create(Construct scope, java.lang.String id)
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
    .directoryName(java.lang.String)
    .organizationalUnitDistinguishedNames(java.util.List<java.lang.String>)
    .serviceAccountCredentials(AppstreamDirectoryConfigServiceAccountCredentials)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.directoryName">directoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.organizationalUnitDistinguishedNames">organizationalUnitDistinguishedNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | service_account_credentials block. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#id AppstreamDirectoryConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.directoryName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}.

---

##### `organizationalUnitDistinguishedNames`<sup>Required</sup> <a name="organizationalUnitDistinguishedNames" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.organizationalUnitDistinguishedNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}.

---

##### `serviceAccountCredentials`<sup>Required</sup> <a name="serviceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.serviceAccountCredentials"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

service_account_credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#service_account_credentials AppstreamDirectoryConfig#service_account_credentials}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#id AppstreamDirectoryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials">putServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putServiceAccountCredentials` <a name="putServiceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials"></a>

```java
public void putServiceAccountCredentials(AppstreamDirectoryConfigServiceAccountCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_directory_config.AppstreamDirectoryConfig;

AppstreamDirectoryConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_directory_config.AppstreamDirectoryConfig;

AppstreamDirectoryConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_directory_config.AppstreamDirectoryConfig;

AppstreamDirectoryConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference">AppstreamDirectoryConfigServiceAccountCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryNameInput">directoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNamesInput">organizationalUnitDistinguishedNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentialsInput">serviceAccountCredentialsInput</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryName">directoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNames">organizationalUnitDistinguishedNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `serviceAccountCredentials`<sup>Required</sup> <a name="serviceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentials"></a>

```java
public AppstreamDirectoryConfigServiceAccountCredentialsOutputReference getServiceAccountCredentials();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference">AppstreamDirectoryConfigServiceAccountCredentialsOutputReference</a>

---

##### `directoryNameInput`<sup>Optional</sup> <a name="directoryNameInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryNameInput"></a>

```java
public java.lang.String getDirectoryNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitDistinguishedNamesInput`<sup>Optional</sup> <a name="organizationalUnitDistinguishedNamesInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNamesInput"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitDistinguishedNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAccountCredentialsInput`<sup>Optional</sup> <a name="serviceAccountCredentialsInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentialsInput"></a>

```java
public AppstreamDirectoryConfigServiceAccountCredentials getServiceAccountCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryName"></a>

```java
public java.lang.String getDirectoryName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organizationalUnitDistinguishedNames`<sup>Required</sup> <a name="organizationalUnitDistinguishedNames" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNames"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitDistinguishedNames();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamDirectoryConfigConfig <a name="AppstreamDirectoryConfigConfig" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_directory_config.AppstreamDirectoryConfigConfig;

AppstreamDirectoryConfigConfig.builder()
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
    .directoryName(java.lang.String)
    .organizationalUnitDistinguishedNames(java.util.List<java.lang.String>)
    .serviceAccountCredentials(AppstreamDirectoryConfigServiceAccountCredentials)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.directoryName">directoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.organizationalUnitDistinguishedNames">organizationalUnitDistinguishedNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | service_account_credentials block. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#id AppstreamDirectoryConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.directoryName"></a>

```java
public java.lang.String getDirectoryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}.

---

##### `organizationalUnitDistinguishedNames`<sup>Required</sup> <a name="organizationalUnitDistinguishedNames" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.organizationalUnitDistinguishedNames"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitDistinguishedNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}.

---

##### `serviceAccountCredentials`<sup>Required</sup> <a name="serviceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.serviceAccountCredentials"></a>

```java
public AppstreamDirectoryConfigServiceAccountCredentials getServiceAccountCredentials();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

service_account_credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#service_account_credentials AppstreamDirectoryConfig#service_account_credentials}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#id AppstreamDirectoryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AppstreamDirectoryConfigServiceAccountCredentials <a name="AppstreamDirectoryConfigServiceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_directory_config.AppstreamDirectoryConfigServiceAccountCredentials;

AppstreamDirectoryConfigServiceAccountCredentials.builder()
    .accountName(java.lang.String)
    .accountPassword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_name AppstreamDirectoryConfig#account_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountPassword">accountPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_password AppstreamDirectoryConfig#account_password}. |

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_name AppstreamDirectoryConfig#account_name}.

---

##### `accountPassword`<sup>Required</sup> <a name="accountPassword" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountPassword"></a>

```java
public java.lang.String getAccountPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_password AppstreamDirectoryConfig#account_password}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamDirectoryConfigServiceAccountCredentialsOutputReference <a name="AppstreamDirectoryConfigServiceAccountCredentialsOutputReference" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appstream_directory_config.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference;

new AppstreamDirectoryConfigServiceAccountCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPasswordInput">accountPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPassword">accountPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `accountPasswordInput`<sup>Optional</sup> <a name="accountPasswordInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPasswordInput"></a>

```java
public java.lang.String getAccountPasswordInput();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `accountPassword`<sup>Required</sup> <a name="accountPassword" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPassword"></a>

```java
public java.lang.String getAccountPassword();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.internalValue"></a>

```java
public AppstreamDirectoryConfigServiceAccountCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---




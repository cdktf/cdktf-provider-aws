# `macie2ClassificationExportConfiguration` Submodule <a name="`macie2ClassificationExportConfiguration` Submodule" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2ClassificationExportConfiguration <a name="Macie2ClassificationExportConfiguration" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration aws_macie2_classification_export_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_classification_export_configuration.Macie2ClassificationExportConfiguration;

Macie2ClassificationExportConfiguration.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .s3Destination(Macie2ClassificationExportConfigurationS3Destination)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | s3_destination block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `s3Destination`<sup>Optional</sup> <a name="s3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.s3Destination"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#s3_destination Macie2ClassificationExportConfiguration#s3_destination}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination">putS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetS3Destination">resetS3Destination</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putS3Destination` <a name="putS3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination"></a>

```java
public void putS3Destination(Macie2ClassificationExportConfigurationS3Destination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetS3Destination` <a name="resetS3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetS3Destination"></a>

```java
public void resetS3Destination()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_classification_export_configuration.Macie2ClassificationExportConfiguration;

Macie2ClassificationExportConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_classification_export_configuration.Macie2ClassificationExportConfiguration;

Macie2ClassificationExportConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_classification_export_configuration.Macie2ClassificationExportConfiguration;

Macie2ClassificationExportConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference">Macie2ClassificationExportConfigurationS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3DestinationInput">s3DestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3Destination"></a>

```java
public Macie2ClassificationExportConfigurationS3DestinationOutputReference getS3Destination();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference">Macie2ClassificationExportConfigurationS3DestinationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `s3DestinationInput`<sup>Optional</sup> <a name="s3DestinationInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3DestinationInput"></a>

```java
public Macie2ClassificationExportConfigurationS3Destination getS3DestinationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2ClassificationExportConfigurationConfig <a name="Macie2ClassificationExportConfigurationConfig" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_classification_export_configuration.Macie2ClassificationExportConfigurationConfig;

Macie2ClassificationExportConfigurationConfig.builder()
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
//  .id(java.lang.String)
//  .s3Destination(Macie2ClassificationExportConfigurationS3Destination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | s3_destination block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `s3Destination`<sup>Optional</sup> <a name="s3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.s3Destination"></a>

```java
public Macie2ClassificationExportConfigurationS3Destination getS3Destination();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#s3_destination Macie2ClassificationExportConfiguration#s3_destination}

---

### Macie2ClassificationExportConfigurationS3Destination <a name="Macie2ClassificationExportConfigurationS3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_classification_export_configuration.Macie2ClassificationExportConfigurationS3Destination;

Macie2ClassificationExportConfigurationS3Destination.builder()
    .bucketName(java.lang.String)
    .kmsKeyArn(java.lang.String)
//  .keyPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#bucket_name Macie2ClassificationExportConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#kms_key_arn Macie2ClassificationExportConfiguration#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#key_prefix Macie2ClassificationExportConfiguration#key_prefix}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#bucket_name Macie2ClassificationExportConfiguration#bucket_name}.

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#kms_key_arn Macie2ClassificationExportConfiguration#kms_key_arn}.

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.keyPrefix"></a>

```java
public java.lang.String getKeyPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#key_prefix Macie2ClassificationExportConfiguration#key_prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### Macie2ClassificationExportConfigurationS3DestinationOutputReference <a name="Macie2ClassificationExportConfigurationS3DestinationOutputReference" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_classification_export_configuration.Macie2ClassificationExportConfigurationS3DestinationOutputReference;

new Macie2ClassificationExportConfigurationS3DestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resetKeyPrefix"></a>

```java
public void resetKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefixInput"></a>

```java
public java.lang.String getKeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefix"></a>

```java
public java.lang.String getKeyPrefix();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.internalValue"></a>

```java
public Macie2ClassificationExportConfigurationS3Destination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---




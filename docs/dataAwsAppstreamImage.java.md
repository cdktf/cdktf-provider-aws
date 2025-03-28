# `dataAwsAppstreamImage` Submodule <a name="`dataAwsAppstreamImage` Submodule" id="@cdktf/provider-aws.dataAwsAppstreamImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppstreamImage <a name="DataAwsAppstreamImage" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image aws_appstream_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImage;

DataAwsAppstreamImage.Builder.create(Construct scope, java.lang.String id)
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
//  .arn(java.lang.String)
//  .mostRecent(java.lang.Boolean)
//  .mostRecent(IResolvable)
//  .name(java.lang.String)
//  .nameRegex(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#arn DataAwsAppstreamImage#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#most_recent DataAwsAppstreamImage#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#name DataAwsAppstreamImage#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#name_regex DataAwsAppstreamImage#name_regex}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#type DataAwsAppstreamImage#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#arn DataAwsAppstreamImage#arn}.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.mostRecent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#most_recent DataAwsAppstreamImage#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#name DataAwsAppstreamImage#name}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.nameRegex"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#name_regex DataAwsAppstreamImage#name_regex}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#type DataAwsAppstreamImage#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetArn` <a name="resetArn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetArn"></a>

```java
public void resetArn()
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetMostRecent"></a>

```java
public void resetMostRecent()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetName"></a>

```java
public void resetName()
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetNameRegex"></a>

```java
public void resetNameRegex()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsAppstreamImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImage;

DataAwsAppstreamImage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImage;

DataAwsAppstreamImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImage;

DataAwsAppstreamImage.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImage;

DataAwsAppstreamImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsAppstreamImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsAppstreamImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsAppstreamImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsAppstreamImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAppstreamImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.applications">applications</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList">DataAwsAppstreamImageApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.appstreamAgentVersion">appstreamAgentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.baseImageArn">baseImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.imageBuilderName">imageBuilderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.imageBuilderSupported">imageBuilderSupported</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.imagePermissions">imagePermissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList">DataAwsAppstreamImageImagePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.publicBaseImageReleasedDate">publicBaseImageReleasedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.stateChangeReason">stateChangeReason</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList">DataAwsAppstreamImageStateChangeReasonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.mostRecentInput">mostRecentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.nameRegexInput">nameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.applications"></a>

```java
public DataAwsAppstreamImageApplicationsList getApplications();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList">DataAwsAppstreamImageApplicationsList</a>

---

##### `appstreamAgentVersion`<sup>Required</sup> <a name="appstreamAgentVersion" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.appstreamAgentVersion"></a>

```java
public java.lang.String getAppstreamAgentVersion();
```

- *Type:* java.lang.String

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.baseImageArn"></a>

```java
public java.lang.String getBaseImageArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `imageBuilderName`<sup>Required</sup> <a name="imageBuilderName" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.imageBuilderName"></a>

```java
public java.lang.String getImageBuilderName();
```

- *Type:* java.lang.String

---

##### `imageBuilderSupported`<sup>Required</sup> <a name="imageBuilderSupported" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.imageBuilderSupported"></a>

```java
public IResolvable getImageBuilderSupported();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `imagePermissions`<sup>Required</sup> <a name="imagePermissions" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.imagePermissions"></a>

```java
public DataAwsAppstreamImageImagePermissionsList getImagePermissions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList">DataAwsAppstreamImageImagePermissionsList</a>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `publicBaseImageReleasedDate`<sup>Required</sup> <a name="publicBaseImageReleasedDate" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.publicBaseImageReleasedDate"></a>

```java
public java.lang.String getPublicBaseImageReleasedDate();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateChangeReason`<sup>Required</sup> <a name="stateChangeReason" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.stateChangeReason"></a>

```java
public DataAwsAppstreamImageStateChangeReasonList getStateChangeReason();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList">DataAwsAppstreamImageStateChangeReasonList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.mostRecentInput"></a>

```java
public java.lang.Object getMostRecentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.nameRegexInput"></a>

```java
public java.lang.String getNameRegexInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppstreamImageApplications <a name="DataAwsAppstreamImageApplications" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageApplications;

DataAwsAppstreamImageApplications.builder()
    .build();
```


### DataAwsAppstreamImageApplicationsIconS3Location <a name="DataAwsAppstreamImageApplicationsIconS3Location" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3Location.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageApplicationsIconS3Location;

DataAwsAppstreamImageApplicationsIconS3Location.builder()
    .build();
```


### DataAwsAppstreamImageConfig <a name="DataAwsAppstreamImageConfig" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageConfig;

DataAwsAppstreamImageConfig.builder()
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
//  .arn(java.lang.String)
//  .mostRecent(java.lang.Boolean)
//  .mostRecent(IResolvable)
//  .name(java.lang.String)
//  .nameRegex(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#arn DataAwsAppstreamImage#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#most_recent DataAwsAppstreamImage#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#name DataAwsAppstreamImage#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#name_regex DataAwsAppstreamImage#name_regex}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#type DataAwsAppstreamImage#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#arn DataAwsAppstreamImage#arn}.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#most_recent DataAwsAppstreamImage#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#name DataAwsAppstreamImage#name}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#name_regex DataAwsAppstreamImage#name_regex}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#type DataAwsAppstreamImage#type}.

---

### DataAwsAppstreamImageImagePermissions <a name="DataAwsAppstreamImageImagePermissions" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageImagePermissions;

DataAwsAppstreamImageImagePermissions.builder()
    .build();
```


### DataAwsAppstreamImageStateChangeReason <a name="DataAwsAppstreamImageStateChangeReason" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReason.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageStateChangeReason;

DataAwsAppstreamImageStateChangeReason.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppstreamImageApplicationsIconS3LocationList <a name="DataAwsAppstreamImageApplicationsIconS3LocationList" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageApplicationsIconS3LocationList;

new DataAwsAppstreamImageApplicationsIconS3LocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.get"></a>

```java
public DataAwsAppstreamImageApplicationsIconS3LocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAppstreamImageApplicationsIconS3LocationOutputReference <a name="DataAwsAppstreamImageApplicationsIconS3LocationOutputReference" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference;

new DataAwsAppstreamImageApplicationsIconS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3Location">DataAwsAppstreamImageApplicationsIconS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.internalValue"></a>

```java
public DataAwsAppstreamImageApplicationsIconS3Location getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3Location">DataAwsAppstreamImageApplicationsIconS3Location</a>

---


### DataAwsAppstreamImageApplicationsList <a name="DataAwsAppstreamImageApplicationsList" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageApplicationsList;

new DataAwsAppstreamImageApplicationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.get"></a>

```java
public DataAwsAppstreamImageApplicationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAppstreamImageApplicationsOutputReference <a name="DataAwsAppstreamImageApplicationsOutputReference" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageApplicationsOutputReference;

new DataAwsAppstreamImageApplicationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.appBlockArn">appBlockArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.iconS3Location">iconS3Location</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList">DataAwsAppstreamImageApplicationsIconS3LocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.instanceFamilies">instanceFamilies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.launchParameters">launchParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.launchPath">launchPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.platforms">platforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplications">DataAwsAppstreamImageApplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appBlockArn`<sup>Required</sup> <a name="appBlockArn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.appBlockArn"></a>

```java
public java.lang.String getAppBlockArn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `iconS3Location`<sup>Required</sup> <a name="iconS3Location" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.iconS3Location"></a>

```java
public DataAwsAppstreamImageApplicationsIconS3LocationList getIconS3Location();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList">DataAwsAppstreamImageApplicationsIconS3LocationList</a>

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

---

##### `instanceFamilies`<sup>Required</sup> <a name="instanceFamilies" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.instanceFamilies"></a>

```java
public java.util.List<java.lang.String> getInstanceFamilies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `launchParameters`<sup>Required</sup> <a name="launchParameters" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.launchParameters"></a>

```java
public java.lang.String getLaunchParameters();
```

- *Type:* java.lang.String

---

##### `launchPath`<sup>Required</sup> <a name="launchPath" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.launchPath"></a>

```java
public java.lang.String getLaunchPath();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.platforms"></a>

```java
public java.util.List<java.lang.String> getPlatforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.internalValue"></a>

```java
public DataAwsAppstreamImageApplications getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplications">DataAwsAppstreamImageApplications</a>

---


### DataAwsAppstreamImageImagePermissionsList <a name="DataAwsAppstreamImageImagePermissionsList" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageImagePermissionsList;

new DataAwsAppstreamImageImagePermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.get"></a>

```java
public DataAwsAppstreamImageImagePermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAppstreamImageImagePermissionsOutputReference <a name="DataAwsAppstreamImageImagePermissionsOutputReference" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageImagePermissionsOutputReference;

new DataAwsAppstreamImageImagePermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.allowFleet">allowFleet</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.allowImageBuilder">allowImageBuilder</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissions">DataAwsAppstreamImageImagePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowFleet`<sup>Required</sup> <a name="allowFleet" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.allowFleet"></a>

```java
public IResolvable getAllowFleet();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowImageBuilder`<sup>Required</sup> <a name="allowImageBuilder" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.allowImageBuilder"></a>

```java
public IResolvable getAllowImageBuilder();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.internalValue"></a>

```java
public DataAwsAppstreamImageImagePermissions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissions">DataAwsAppstreamImageImagePermissions</a>

---


### DataAwsAppstreamImageStateChangeReasonList <a name="DataAwsAppstreamImageStateChangeReasonList" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageStateChangeReasonList;

new DataAwsAppstreamImageStateChangeReasonList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.get"></a>

```java
public DataAwsAppstreamImageStateChangeReasonOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAppstreamImageStateChangeReasonOutputReference <a name="DataAwsAppstreamImageStateChangeReasonOutputReference" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appstream_image.DataAwsAppstreamImageStateChangeReasonOutputReference;

new DataAwsAppstreamImageStateChangeReasonOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReason">DataAwsAppstreamImageStateChangeReason</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.internalValue"></a>

```java
public DataAwsAppstreamImageStateChangeReason getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReason">DataAwsAppstreamImageStateChangeReason</a>

---




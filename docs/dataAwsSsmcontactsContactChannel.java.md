# `data_aws_ssmcontacts_contact_channel`

Refer to the Terraform Registory for docs: [`data_aws_ssmcontacts_contact_channel`](https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/ssmcontacts_contact_channel).

# `dataAwsSsmcontactsContactChannel` Submodule <a name="`dataAwsSsmcontactsContactChannel` Submodule" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmcontactsContactChannel <a name="DataAwsSsmcontactsContactChannel" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/ssmcontacts_contact_channel aws_ssmcontacts_contact_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssmcontacts_contact_channel.DataAwsSsmcontactsContactChannel;

DataAwsSsmcontactsContactChannel.Builder.create(Construct scope, java.lang.String id)
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
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/ssmcontacts_contact_channel#arn DataAwsSsmcontactsContactChannel#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/ssmcontacts_contact_channel#id DataAwsSsmcontactsContactChannel#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/ssmcontacts_contact_channel#arn DataAwsSsmcontactsContactChannel#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/ssmcontacts_contact_channel#id DataAwsSsmcontactsContactChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssmcontacts_contact_channel.DataAwsSsmcontactsContactChannel;

DataAwsSsmcontactsContactChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssmcontacts_contact_channel.DataAwsSsmcontactsContactChannel;

DataAwsSsmcontactsContactChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssmcontacts_contact_channel.DataAwsSsmcontactsContactChannel;

DataAwsSsmcontactsContactChannel.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.activationStatus">activationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.contactId">contactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.deliveryAddress">deliveryAddress</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList">DataAwsSsmcontactsContactChannelDeliveryAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `activationStatus`<sup>Required</sup> <a name="activationStatus" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.activationStatus"></a>

```java
public java.lang.String getActivationStatus();
```

- *Type:* java.lang.String

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.contactId"></a>

```java
public java.lang.String getContactId();
```

- *Type:* java.lang.String

---

##### `deliveryAddress`<sup>Required</sup> <a name="deliveryAddress" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.deliveryAddress"></a>

```java
public DataAwsSsmcontactsContactChannelDeliveryAddressList getDeliveryAddress();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList">DataAwsSsmcontactsContactChannelDeliveryAddressList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmcontactsContactChannelConfig <a name="DataAwsSsmcontactsContactChannelConfig" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssmcontacts_contact_channel.DataAwsSsmcontactsContactChannelConfig;

DataAwsSsmcontactsContactChannelConfig.builder()
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
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/ssmcontacts_contact_channel#arn DataAwsSsmcontactsContactChannel#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/ssmcontacts_contact_channel#id DataAwsSsmcontactsContactChannel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/ssmcontacts_contact_channel#arn DataAwsSsmcontactsContactChannel#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/ssmcontacts_contact_channel#id DataAwsSsmcontactsContactChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsSsmcontactsContactChannelDeliveryAddress <a name="DataAwsSsmcontactsContactChannelDeliveryAddress" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssmcontacts_contact_channel.DataAwsSsmcontactsContactChannelDeliveryAddress;

DataAwsSsmcontactsContactChannelDeliveryAddress.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmcontactsContactChannelDeliveryAddressList <a name="DataAwsSsmcontactsContactChannelDeliveryAddressList" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssmcontacts_contact_channel.DataAwsSsmcontactsContactChannelDeliveryAddressList;

new DataAwsSsmcontactsContactChannelDeliveryAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.get"></a>

```java
public DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference <a name="DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ssmcontacts_contact_channel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference;

new DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.simpleAddress">simpleAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddress">DataAwsSsmcontactsContactChannelDeliveryAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `simpleAddress`<sup>Required</sup> <a name="simpleAddress" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.simpleAddress"></a>

```java
public java.lang.String getSimpleAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.internalValue"></a>

```java
public DataAwsSsmcontactsContactChannelDeliveryAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddress">DataAwsSsmcontactsContactChannelDeliveryAddress</a>

---




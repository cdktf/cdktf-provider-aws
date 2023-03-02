# `ssoadminInstanceAccessControlAttributes` Submodule <a name="`ssoadminInstanceAccessControlAttributes` Submodule" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminInstanceAccessControlAttributes <a name="SsoadminInstanceAccessControlAttributes" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes aws_ssoadmin_instance_access_control_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_instance_access_control_attributes.SsoadminInstanceAccessControlAttributes;

SsoadminInstanceAccessControlAttributes.Builder.create(Construct scope, java.lang.String id)
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
    .attribute(IResolvable)
    .attribute(java.util.List<SsoadminInstanceAccessControlAttributesAttribute>)
    .instanceArn(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.attribute">attribute</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>></code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#instance_arn SsoadminInstanceAccessControlAttributes#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#id SsoadminInstanceAccessControlAttributes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.attribute"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>>

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#attribute SsoadminInstanceAccessControlAttributes#attribute}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#instance_arn SsoadminInstanceAccessControlAttributes#instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#id SsoadminInstanceAccessControlAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.putAttribute">putAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAttribute` <a name="putAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.putAttribute"></a>

```java
public void putAttribute(IResolvable OR java.util.List<SsoadminInstanceAccessControlAttributesAttribute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.putAttribute.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_instance_access_control_attributes.SsoadminInstanceAccessControlAttributes;

SsoadminInstanceAccessControlAttributes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_instance_access_control_attributes.SsoadminInstanceAccessControlAttributes;

SsoadminInstanceAccessControlAttributes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_instance_access_control_attributes.SsoadminInstanceAccessControlAttributes;

SsoadminInstanceAccessControlAttributes.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList">SsoadminInstanceAccessControlAttributesAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attributeInput">attributeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attribute"></a>

```java
public SsoadminInstanceAccessControlAttributesAttributeList getAttribute();
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList">SsoadminInstanceAccessControlAttributesAttributeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attributeInput"></a>

```java
public java.lang.Object getAttributeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminInstanceAccessControlAttributesAttribute <a name="SsoadminInstanceAccessControlAttributesAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_instance_access_control_attributes.SsoadminInstanceAccessControlAttributesAttribute;

SsoadminInstanceAccessControlAttributesAttribute.builder()
    .key(java.lang.String)
    .value(IResolvable)
    .value(java.util.List<SsoadminInstanceAccessControlAttributesAttributeValue>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#key SsoadminInstanceAccessControlAttributes#key}. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.value">value</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>></code> | value block. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#key SsoadminInstanceAccessControlAttributes#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>>

value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#value SsoadminInstanceAccessControlAttributes#value}

---

### SsoadminInstanceAccessControlAttributesAttributeValue <a name="SsoadminInstanceAccessControlAttributesAttributeValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_instance_access_control_attributes.SsoadminInstanceAccessControlAttributesAttributeValue;

SsoadminInstanceAccessControlAttributesAttributeValue.builder()
    .source(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue.property.source">source</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#source SsoadminInstanceAccessControlAttributes#source}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue.property.source"></a>

```java
public java.util.List<java.lang.String> getSource();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#source SsoadminInstanceAccessControlAttributes#source}.

---

### SsoadminInstanceAccessControlAttributesConfig <a name="SsoadminInstanceAccessControlAttributesConfig" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_instance_access_control_attributes.SsoadminInstanceAccessControlAttributesConfig;

SsoadminInstanceAccessControlAttributesConfig.builder()
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
    .attribute(IResolvable)
    .attribute(java.util.List<SsoadminInstanceAccessControlAttributesAttribute>)
    .instanceArn(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.attribute">attribute</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>></code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#instance_arn SsoadminInstanceAccessControlAttributes#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#id SsoadminInstanceAccessControlAttributes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.attribute"></a>

```java
public java.lang.Object getAttribute();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>>

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#attribute SsoadminInstanceAccessControlAttributes#attribute}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#instance_arn SsoadminInstanceAccessControlAttributes#instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#id SsoadminInstanceAccessControlAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminInstanceAccessControlAttributesAttributeList <a name="SsoadminInstanceAccessControlAttributesAttributeList" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_instance_access_control_attributes.SsoadminInstanceAccessControlAttributesAttributeList;

new SsoadminInstanceAccessControlAttributesAttributeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.get"></a>

```java
public SsoadminInstanceAccessControlAttributesAttributeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>>

---


### SsoadminInstanceAccessControlAttributesAttributeOutputReference <a name="SsoadminInstanceAccessControlAttributesAttributeOutputReference" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_instance_access_control_attributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference;

new SsoadminInstanceAccessControlAttributesAttributeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.putValue">putValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.putValue"></a>

```java
public void putValue(IResolvable OR java.util.List<SsoadminInstanceAccessControlAttributesAttributeValue> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.putValue.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList">SsoadminInstanceAccessControlAttributesAttributeValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.valueInput">valueInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.value"></a>

```java
public SsoadminInstanceAccessControlAttributesAttributeValueList getValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList">SsoadminInstanceAccessControlAttributesAttributeValueList</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.valueInput"></a>

```java
public java.lang.Object getValueInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a> OR com.hashicorp.cdktf.IResolvable

---


### SsoadminInstanceAccessControlAttributesAttributeValueList <a name="SsoadminInstanceAccessControlAttributesAttributeValueList" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_instance_access_control_attributes.SsoadminInstanceAccessControlAttributesAttributeValueList;

new SsoadminInstanceAccessControlAttributesAttributeValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.get"></a>

```java
public SsoadminInstanceAccessControlAttributesAttributeValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>>

---


### SsoadminInstanceAccessControlAttributesAttributeValueOutputReference <a name="SsoadminInstanceAccessControlAttributesAttributeValueOutputReference" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssoadmin_instance_access_control_attributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference;

new SsoadminInstanceAccessControlAttributesAttributeValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.source">source</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.sourceInput"></a>

```java
public java.util.List<java.lang.String> getSourceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.source"></a>

```java
public java.util.List<java.lang.String> getSource();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a> OR com.hashicorp.cdktf.IResolvable

---




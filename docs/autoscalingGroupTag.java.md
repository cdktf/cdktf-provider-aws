# `autoscalingGroupTag` Submodule <a name="`autoscalingGroupTag` Submodule" id="@cdktf/provider-aws.autoscalingGroupTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingGroupTagA <a name="AutoscalingGroupTagA" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag aws_autoscaling_group_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group_tag.AutoscalingGroupTagA;

AutoscalingGroupTagA.Builder.create(Construct scope, java.lang.String id)
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
    .autoscalingGroupName(java.lang.String)
    .tag(AutoscalingGroupTagTag)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.autoscalingGroupName">autoscalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#autoscaling_group_name AutoscalingGroupTagA#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.tag">tag</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a></code> | tag block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#id AutoscalingGroupTagA#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.autoscalingGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#autoscaling_group_name AutoscalingGroupTagA#autoscaling_group_name}.

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.tag"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#tag AutoscalingGroupTagA#tag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#id AutoscalingGroupTagA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTag` <a name="putTag" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.putTag"></a>

```java
public void putTag(AutoscalingGroupTagTag value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group_tag.AutoscalingGroupTagA;

AutoscalingGroupTagA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group_tag.AutoscalingGroupTagA;

AutoscalingGroupTagA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group_tag.AutoscalingGroupTagA;

AutoscalingGroupTagA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference">AutoscalingGroupTagTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.autoscalingGroupNameInput">autoscalingGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.tagInput">tagInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.tag"></a>

```java
public AutoscalingGroupTagTagOutputReference getTag();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference">AutoscalingGroupTagTagOutputReference</a>

---

##### `autoscalingGroupNameInput`<sup>Optional</sup> <a name="autoscalingGroupNameInput" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.autoscalingGroupNameInput"></a>

```java
public java.lang.String getAutoscalingGroupNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.tagInput"></a>

```java
public AutoscalingGroupTagTag getTagInput();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.autoscalingGroupName"></a>

```java
public java.lang.String getAutoscalingGroupName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingGroupTagAConfig <a name="AutoscalingGroupTagAConfig" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group_tag.AutoscalingGroupTagAConfig;

AutoscalingGroupTagAConfig.builder()
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
    .autoscalingGroupName(java.lang.String)
    .tag(AutoscalingGroupTagTag)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#autoscaling_group_name AutoscalingGroupTagA#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a></code> | tag block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#id AutoscalingGroupTagA#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.autoscalingGroupName"></a>

```java
public java.lang.String getAutoscalingGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#autoscaling_group_name AutoscalingGroupTagA#autoscaling_group_name}.

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.tag"></a>

```java
public AutoscalingGroupTagTag getTag();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#tag AutoscalingGroupTagA#tag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#id AutoscalingGroupTagA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AutoscalingGroupTagTag <a name="AutoscalingGroupTagTag" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group_tag.AutoscalingGroupTagTag;

AutoscalingGroupTagTag.builder()
    .key(java.lang.String)
    .propagateAtLaunch(java.lang.Boolean)
    .propagateAtLaunch(IResolvable)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#key AutoscalingGroupTagA#key}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.property.propagateAtLaunch">propagateAtLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#propagate_at_launch AutoscalingGroupTagA#propagate_at_launch}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#value AutoscalingGroupTagA#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#key AutoscalingGroupTagA#key}.

---

##### `propagateAtLaunch`<sup>Required</sup> <a name="propagateAtLaunch" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.property.propagateAtLaunch"></a>

```java
public java.lang.Object getPropagateAtLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#propagate_at_launch AutoscalingGroupTagA#propagate_at_launch}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#value AutoscalingGroupTagA#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingGroupTagTagOutputReference <a name="AutoscalingGroupTagTagOutputReference" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.autoscaling_group_tag.AutoscalingGroupTagTagOutputReference;

new AutoscalingGroupTagTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.propagateAtLaunchInput">propagateAtLaunchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.propagateAtLaunch">propagateAtLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `propagateAtLaunchInput`<sup>Optional</sup> <a name="propagateAtLaunchInput" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.propagateAtLaunchInput"></a>

```java
public java.lang.Object getPropagateAtLaunchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `propagateAtLaunch`<sup>Required</sup> <a name="propagateAtLaunch" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.propagateAtLaunch"></a>

```java
public java.lang.Object getPropagateAtLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.internalValue"></a>

```java
public AutoscalingGroupTagTag getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

---




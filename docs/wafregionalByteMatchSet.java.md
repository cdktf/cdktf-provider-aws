# `wafregionalByteMatchSet` Submodule <a name="`wafregionalByteMatchSet` Submodule" id="@cdktf/provider-aws.wafregionalByteMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalByteMatchSet <a name="WafregionalByteMatchSet" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set aws_wafregional_byte_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_byte_match_set.WafregionalByteMatchSet;

WafregionalByteMatchSet.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .byteMatchTuples(IResolvable)
//  .byteMatchTuples(java.util.List<WafregionalByteMatchSetByteMatchTuples>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#name WafregionalByteMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.byteMatchTuples">byteMatchTuples</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>></code> | byte_match_tuples block. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#id WafregionalByteMatchSet#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#name WafregionalByteMatchSet#name}.

---

##### `byteMatchTuples`<sup>Optional</sup> <a name="byteMatchTuples" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.byteMatchTuples"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>>

byte_match_tuples block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#byte_match_tuples WafregionalByteMatchSet#byte_match_tuples}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#id WafregionalByteMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.putByteMatchTuples">putByteMatchTuples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.resetByteMatchTuples">resetByteMatchTuples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putByteMatchTuples` <a name="putByteMatchTuples" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.putByteMatchTuples"></a>

```java
public void putByteMatchTuples(IResolvable OR java.util.List<WafregionalByteMatchSetByteMatchTuples> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.putByteMatchTuples.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>>

---

##### `resetByteMatchTuples` <a name="resetByteMatchTuples" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.resetByteMatchTuples"></a>

```java
public void resetByteMatchTuples()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_byte_match_set.WafregionalByteMatchSet;

WafregionalByteMatchSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_byte_match_set.WafregionalByteMatchSet;

WafregionalByteMatchSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_byte_match_set.WafregionalByteMatchSet;

WafregionalByteMatchSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.byteMatchTuples">byteMatchTuples</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList">WafregionalByteMatchSetByteMatchTuplesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.byteMatchTuplesInput">byteMatchTuplesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `byteMatchTuples`<sup>Required</sup> <a name="byteMatchTuples" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.byteMatchTuples"></a>

```java
public WafregionalByteMatchSetByteMatchTuplesList getByteMatchTuples();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList">WafregionalByteMatchSetByteMatchTuplesList</a>

---

##### `byteMatchTuplesInput`<sup>Optional</sup> <a name="byteMatchTuplesInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.byteMatchTuplesInput"></a>

```java
public java.lang.Object getByteMatchTuplesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalByteMatchSetByteMatchTuples <a name="WafregionalByteMatchSetByteMatchTuples" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_byte_match_set.WafregionalByteMatchSetByteMatchTuples;

WafregionalByteMatchSetByteMatchTuples.builder()
    .fieldToMatch(WafregionalByteMatchSetByteMatchTuplesFieldToMatch)
    .positionalConstraint(java.lang.String)
    .textTransformation(java.lang.String)
//  .targetString(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.positionalConstraint">positionalConstraint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#positional_constraint WafregionalByteMatchSet#positional_constraint}. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.textTransformation">textTransformation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#text_transformation WafregionalByteMatchSet#text_transformation}. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.targetString">targetString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#target_string WafregionalByteMatchSet#target_string}. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.fieldToMatch"></a>

```java
public WafregionalByteMatchSetByteMatchTuplesFieldToMatch getFieldToMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#field_to_match WafregionalByteMatchSet#field_to_match}

---

##### `positionalConstraint`<sup>Required</sup> <a name="positionalConstraint" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.positionalConstraint"></a>

```java
public java.lang.String getPositionalConstraint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#positional_constraint WafregionalByteMatchSet#positional_constraint}.

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.textTransformation"></a>

```java
public java.lang.String getTextTransformation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#text_transformation WafregionalByteMatchSet#text_transformation}.

---

##### `targetString`<sup>Optional</sup> <a name="targetString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples.property.targetString"></a>

```java
public java.lang.String getTargetString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#target_string WafregionalByteMatchSet#target_string}.

---

### WafregionalByteMatchSetByteMatchTuplesFieldToMatch <a name="WafregionalByteMatchSetByteMatchTuplesFieldToMatch" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_byte_match_set.WafregionalByteMatchSetByteMatchTuplesFieldToMatch;

WafregionalByteMatchSetByteMatchTuplesFieldToMatch.builder()
    .type(java.lang.String)
//  .data(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#type WafregionalByteMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch.property.data">data</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#data WafregionalByteMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#type WafregionalByteMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#data WafregionalByteMatchSet#data}.

---

### WafregionalByteMatchSetConfig <a name="WafregionalByteMatchSetConfig" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_byte_match_set.WafregionalByteMatchSetConfig;

WafregionalByteMatchSetConfig.builder()
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
    .name(java.lang.String)
//  .byteMatchTuples(IResolvable)
//  .byteMatchTuples(java.util.List<WafregionalByteMatchSetByteMatchTuples>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#name WafregionalByteMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.byteMatchTuples">byteMatchTuples</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>></code> | byte_match_tuples block. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#id WafregionalByteMatchSet#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#name WafregionalByteMatchSet#name}.

---

##### `byteMatchTuples`<sup>Optional</sup> <a name="byteMatchTuples" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.byteMatchTuples"></a>

```java
public java.lang.Object getByteMatchTuples();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>>

byte_match_tuples block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#byte_match_tuples WafregionalByteMatchSet#byte_match_tuples}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set#id WafregionalByteMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference <a name="WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_byte_match_set.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference;

new WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resetData"></a>

```java
public void resetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.internalValue"></a>

```java
public WafregionalByteMatchSetByteMatchTuplesFieldToMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a>

---


### WafregionalByteMatchSetByteMatchTuplesList <a name="WafregionalByteMatchSetByteMatchTuplesList" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_byte_match_set.WafregionalByteMatchSetByteMatchTuplesList;

new WafregionalByteMatchSetByteMatchTuplesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.get"></a>

```java
public WafregionalByteMatchSetByteMatchTuplesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a>>

---


### WafregionalByteMatchSetByteMatchTuplesOutputReference <a name="WafregionalByteMatchSetByteMatchTuplesOutputReference" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_byte_match_set.WafregionalByteMatchSetByteMatchTuplesOutputReference;

new WafregionalByteMatchSetByteMatchTuplesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.resetTargetString">resetTargetString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch"></a>

```java
public void putFieldToMatch(WafregionalByteMatchSetByteMatchTuplesFieldToMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a>

---

##### `resetTargetString` <a name="resetTargetString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.resetTargetString"></a>

```java
public void resetTargetString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference">WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraintInput">positionalConstraintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.targetStringInput">targetStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.textTransformationInput">textTransformationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraint">positionalConstraint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.targetString">targetString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.textTransformation">textTransformation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatch"></a>

```java
public WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference getFieldToMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference">WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatchInput"></a>

```java
public WafregionalByteMatchSetByteMatchTuplesFieldToMatch getFieldToMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesFieldToMatch">WafregionalByteMatchSetByteMatchTuplesFieldToMatch</a>

---

##### `positionalConstraintInput`<sup>Optional</sup> <a name="positionalConstraintInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraintInput"></a>

```java
public java.lang.String getPositionalConstraintInput();
```

- *Type:* java.lang.String

---

##### `targetStringInput`<sup>Optional</sup> <a name="targetStringInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.targetStringInput"></a>

```java
public java.lang.String getTargetStringInput();
```

- *Type:* java.lang.String

---

##### `textTransformationInput`<sup>Optional</sup> <a name="textTransformationInput" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.textTransformationInput"></a>

```java
public java.lang.String getTextTransformationInput();
```

- *Type:* java.lang.String

---

##### `positionalConstraint`<sup>Required</sup> <a name="positionalConstraint" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraint"></a>

```java
public java.lang.String getPositionalConstraint();
```

- *Type:* java.lang.String

---

##### `targetString`<sup>Required</sup> <a name="targetString" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.targetString"></a>

```java
public java.lang.String getTargetString();
```

- *Type:* java.lang.String

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.textTransformation"></a>

```java
public java.lang.String getTextTransformation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuplesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalByteMatchSet.WafregionalByteMatchSetByteMatchTuples">WafregionalByteMatchSetByteMatchTuples</a> OR com.hashicorp.cdktf.IResolvable

---




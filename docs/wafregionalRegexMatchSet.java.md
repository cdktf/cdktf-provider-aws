# `wafregionalRegexMatchSet` Submodule <a name="`wafregionalRegexMatchSet` Submodule" id="@cdktf/provider-aws.wafregionalRegexMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalRegexMatchSet <a name="WafregionalRegexMatchSet" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set aws_wafregional_regex_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_regex_match_set.WafregionalRegexMatchSet;

WafregionalRegexMatchSet.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .regexMatchTuple(IResolvable)
//  .regexMatchTuple(java.util.List<WafregionalRegexMatchSetRegexMatchTuple>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.regexMatchTuple">regexMatchTuple</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>></code> | regex_match_tuple block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regexMatchTuple`<sup>Optional</sup> <a name="regexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.regexMatchTuple"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>>

regex_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_match_tuple WafregionalRegexMatchSet#regex_match_tuple}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.putRegexMatchTuple">putRegexMatchTuple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetRegexMatchTuple">resetRegexMatchTuple</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRegexMatchTuple` <a name="putRegexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.putRegexMatchTuple"></a>

```java
public void putRegexMatchTuple(IResolvable OR java.util.List<WafregionalRegexMatchSetRegexMatchTuple> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.putRegexMatchTuple.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetId"></a>

```java
public void resetId()
```

##### `resetRegexMatchTuple` <a name="resetRegexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetRegexMatchTuple"></a>

```java
public void resetRegexMatchTuple()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_regex_match_set.WafregionalRegexMatchSet;

WafregionalRegexMatchSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_regex_match_set.WafregionalRegexMatchSet;

WafregionalRegexMatchSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_regex_match_set.WafregionalRegexMatchSet;

WafregionalRegexMatchSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTuple">regexMatchTuple</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList">WafregionalRegexMatchSetRegexMatchTupleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTupleInput">regexMatchTupleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `regexMatchTuple`<sup>Required</sup> <a name="regexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTuple"></a>

```java
public WafregionalRegexMatchSetRegexMatchTupleList getRegexMatchTuple();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList">WafregionalRegexMatchSetRegexMatchTupleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexMatchTupleInput`<sup>Optional</sup> <a name="regexMatchTupleInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTupleInput"></a>

```java
public java.lang.Object getRegexMatchTupleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalRegexMatchSetConfig <a name="WafregionalRegexMatchSetConfig" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_regex_match_set.WafregionalRegexMatchSetConfig;

WafregionalRegexMatchSetConfig.builder()
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
//  .id(java.lang.String)
//  .regexMatchTuple(IResolvable)
//  .regexMatchTuple(java.util.List<WafregionalRegexMatchSetRegexMatchTuple>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.regexMatchTuple">regexMatchTuple</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>></code> | regex_match_tuple block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regexMatchTuple`<sup>Optional</sup> <a name="regexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.regexMatchTuple"></a>

```java
public java.lang.Object getRegexMatchTuple();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>>

regex_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_match_tuple WafregionalRegexMatchSet#regex_match_tuple}

---

### WafregionalRegexMatchSetRegexMatchTuple <a name="WafregionalRegexMatchSetRegexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_regex_match_set.WafregionalRegexMatchSetRegexMatchTuple;

WafregionalRegexMatchSetRegexMatchTuple.builder()
    .fieldToMatch(WafregionalRegexMatchSetRegexMatchTupleFieldToMatch)
    .regexPatternSetId(java.lang.String)
    .textTransformation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.regexPatternSetId">regexPatternSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_pattern_set_id WafregionalRegexMatchSet#regex_pattern_set_id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.textTransformation">textTransformation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#text_transformation WafregionalRegexMatchSet#text_transformation}. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.fieldToMatch"></a>

```java
public WafregionalRegexMatchSetRegexMatchTupleFieldToMatch getFieldToMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#field_to_match WafregionalRegexMatchSet#field_to_match}

---

##### `regexPatternSetId`<sup>Required</sup> <a name="regexPatternSetId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.regexPatternSetId"></a>

```java
public java.lang.String getRegexPatternSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_pattern_set_id WafregionalRegexMatchSet#regex_pattern_set_id}.

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.textTransformation"></a>

```java
public java.lang.String getTextTransformation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#text_transformation WafregionalRegexMatchSet#text_transformation}.

---

### WafregionalRegexMatchSetRegexMatchTupleFieldToMatch <a name="WafregionalRegexMatchSetRegexMatchTupleFieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_regex_match_set.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch;

WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.builder()
    .type(java.lang.String)
//  .data(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#type WafregionalRegexMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.data">data</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#data WafregionalRegexMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#type WafregionalRegexMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#data WafregionalRegexMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference <a name="WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_regex_match_set.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference;

new WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resetData"></a>

```java
public void resetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.internalValue"></a>

```java
public WafregionalRegexMatchSetRegexMatchTupleFieldToMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

---


### WafregionalRegexMatchSetRegexMatchTupleList <a name="WafregionalRegexMatchSetRegexMatchTupleList" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_regex_match_set.WafregionalRegexMatchSetRegexMatchTupleList;

new WafregionalRegexMatchSetRegexMatchTupleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.get"></a>

```java
public WafregionalRegexMatchSetRegexMatchTupleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a>>

---


### WafregionalRegexMatchSetRegexMatchTupleOutputReference <a name="WafregionalRegexMatchSetRegexMatchTupleOutputReference" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_regex_match_set.WafregionalRegexMatchSetRegexMatchTupleOutputReference;

new WafregionalRegexMatchSetRegexMatchTupleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch"></a>

```java
public void putFieldToMatch(WafregionalRegexMatchSetRegexMatchTupleFieldToMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference">WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetIdInput">regexPatternSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformationInput">textTransformationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetId">regexPatternSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformation">textTransformation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatch"></a>

```java
public WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference getFieldToMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference">WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatchInput"></a>

```java
public WafregionalRegexMatchSetRegexMatchTupleFieldToMatch getFieldToMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

---

##### `regexPatternSetIdInput`<sup>Optional</sup> <a name="regexPatternSetIdInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetIdInput"></a>

```java
public java.lang.String getRegexPatternSetIdInput();
```

- *Type:* java.lang.String

---

##### `textTransformationInput`<sup>Optional</sup> <a name="textTransformationInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformationInput"></a>

```java
public java.lang.String getTextTransformationInput();
```

- *Type:* java.lang.String

---

##### `regexPatternSetId`<sup>Required</sup> <a name="regexPatternSetId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetId"></a>

```java
public java.lang.String getRegexPatternSetId();
```

- *Type:* java.lang.String

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformation"></a>

```java
public java.lang.String getTextTransformation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple">WafregionalRegexMatchSetRegexMatchTuple</a> OR com.hashicorp.cdktf.IResolvable

---




# `wafRegexMatchSet` Submodule <a name="`wafRegexMatchSet` Submodule" id="@cdktf/provider-aws.wafRegexMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafRegexMatchSet <a name="WafRegexMatchSet" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set aws_waf_regex_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_regex_match_set.WafRegexMatchSet;

WafRegexMatchSet.Builder.create(Construct scope, java.lang.String id)
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
//  .regexMatchTuple(java.util.List<WafRegexMatchSetRegexMatchTuple>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#name WafRegexMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#id WafRegexMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.regexMatchTuple">regexMatchTuple</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>></code> | regex_match_tuple block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#name WafRegexMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#id WafRegexMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regexMatchTuple`<sup>Optional</sup> <a name="regexMatchTuple" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.regexMatchTuple"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>>

regex_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#regex_match_tuple WafRegexMatchSet#regex_match_tuple}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.putRegexMatchTuple">putRegexMatchTuple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.resetRegexMatchTuple">resetRegexMatchTuple</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRegexMatchTuple` <a name="putRegexMatchTuple" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.putRegexMatchTuple"></a>

```java
public void putRegexMatchTuple(IResolvable OR java.util.List<WafRegexMatchSetRegexMatchTuple> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.putRegexMatchTuple.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.resetId"></a>

```java
public void resetId()
```

##### `resetRegexMatchTuple` <a name="resetRegexMatchTuple" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.resetRegexMatchTuple"></a>

```java
public void resetRegexMatchTuple()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_regex_match_set.WafRegexMatchSet;

WafRegexMatchSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_regex_match_set.WafRegexMatchSet;

WafRegexMatchSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_regex_match_set.WafRegexMatchSet;

WafRegexMatchSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.regexMatchTuple">regexMatchTuple</a></code> | <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList">WafRegexMatchSetRegexMatchTupleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.regexMatchTupleInput">regexMatchTupleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `regexMatchTuple`<sup>Required</sup> <a name="regexMatchTuple" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.regexMatchTuple"></a>

```java
public WafRegexMatchSetRegexMatchTupleList getRegexMatchTuple();
```

- *Type:* <a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList">WafRegexMatchSetRegexMatchTupleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexMatchTupleInput`<sup>Optional</sup> <a name="regexMatchTupleInput" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.regexMatchTupleInput"></a>

```java
public java.lang.Object getRegexMatchTupleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafRegexMatchSetConfig <a name="WafRegexMatchSetConfig" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_regex_match_set.WafRegexMatchSetConfig;

WafRegexMatchSetConfig.builder()
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
//  .regexMatchTuple(java.util.List<WafRegexMatchSetRegexMatchTuple>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#name WafRegexMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#id WafRegexMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.regexMatchTuple">regexMatchTuple</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>></code> | regex_match_tuple block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#name WafRegexMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#id WafRegexMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regexMatchTuple`<sup>Optional</sup> <a name="regexMatchTuple" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetConfig.property.regexMatchTuple"></a>

```java
public java.lang.Object getRegexMatchTuple();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>>

regex_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#regex_match_tuple WafRegexMatchSet#regex_match_tuple}

---

### WafRegexMatchSetRegexMatchTuple <a name="WafRegexMatchSetRegexMatchTuple" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_regex_match_set.WafRegexMatchSetRegexMatchTuple;

WafRegexMatchSetRegexMatchTuple.builder()
    .fieldToMatch(WafRegexMatchSetRegexMatchTupleFieldToMatch)
    .regexPatternSetId(java.lang.String)
    .textTransformation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.property.regexPatternSetId">regexPatternSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#regex_pattern_set_id WafRegexMatchSet#regex_pattern_set_id}. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.property.textTransformation">textTransformation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#text_transformation WafRegexMatchSet#text_transformation}. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.property.fieldToMatch"></a>

```java
public WafRegexMatchSetRegexMatchTupleFieldToMatch getFieldToMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#field_to_match WafRegexMatchSet#field_to_match}

---

##### `regexPatternSetId`<sup>Required</sup> <a name="regexPatternSetId" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.property.regexPatternSetId"></a>

```java
public java.lang.String getRegexPatternSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#regex_pattern_set_id WafRegexMatchSet#regex_pattern_set_id}.

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.property.textTransformation"></a>

```java
public java.lang.String getTextTransformation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#text_transformation WafRegexMatchSet#text_transformation}.

---

### WafRegexMatchSetRegexMatchTupleFieldToMatch <a name="WafRegexMatchSetRegexMatchTupleFieldToMatch" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_regex_match_set.WafRegexMatchSetRegexMatchTupleFieldToMatch;

WafRegexMatchSetRegexMatchTupleFieldToMatch.builder()
    .type(java.lang.String)
//  .data(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#type WafRegexMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch.property.data">data</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#data WafRegexMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#type WafRegexMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set#data WafRegexMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference <a name="WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_regex_match_set.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference;

new WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resetData"></a>

```java
public void resetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.internalValue"></a>

```java
public WafRegexMatchSetRegexMatchTupleFieldToMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a>

---


### WafRegexMatchSetRegexMatchTupleList <a name="WafRegexMatchSetRegexMatchTupleList" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_regex_match_set.WafRegexMatchSetRegexMatchTupleList;

new WafRegexMatchSetRegexMatchTupleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.get"></a>

```java
public WafRegexMatchSetRegexMatchTupleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>>

---


### WafRegexMatchSetRegexMatchTupleOutputReference <a name="WafRegexMatchSetRegexMatchTupleOutputReference" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_regex_match_set.WafRegexMatchSetRegexMatchTupleOutputReference;

new WafRegexMatchSetRegexMatchTupleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch"></a>

```java
public void putFieldToMatch(WafRegexMatchSetRegexMatchTupleFieldToMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference">WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetIdInput">regexPatternSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.textTransformationInput">textTransformationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetId">regexPatternSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.textTransformation">textTransformation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatch"></a>

```java
public WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference getFieldToMatch();
```

- *Type:* <a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference">WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatchInput"></a>

```java
public WafRegexMatchSetRegexMatchTupleFieldToMatch getFieldToMatchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a>

---

##### `regexPatternSetIdInput`<sup>Optional</sup> <a name="regexPatternSetIdInput" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetIdInput"></a>

```java
public java.lang.String getRegexPatternSetIdInput();
```

- *Type:* java.lang.String

---

##### `textTransformationInput`<sup>Optional</sup> <a name="textTransformationInput" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.textTransformationInput"></a>

```java
public java.lang.String getTextTransformationInput();
```

- *Type:* java.lang.String

---

##### `regexPatternSetId`<sup>Required</sup> <a name="regexPatternSetId" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetId"></a>

```java
public java.lang.String getRegexPatternSetId();
```

- *Type:* java.lang.String

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.textTransformation"></a>

```java
public java.lang.String getTextTransformation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a> OR com.hashicorp.cdktf.IResolvable

---




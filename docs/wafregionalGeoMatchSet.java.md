# `wafregionalGeoMatchSet` Submodule <a name="`wafregionalGeoMatchSet` Submodule" id="@cdktf/provider-aws.wafregionalGeoMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalGeoMatchSet <a name="WafregionalGeoMatchSet" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set aws_wafregional_geo_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_geo_match_set.WafregionalGeoMatchSet;

WafregionalGeoMatchSet.Builder.create(Construct scope, java.lang.String id)
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
//  .geoMatchConstraint(IResolvable)
//  .geoMatchConstraint(java.util.List<WafregionalGeoMatchSetGeoMatchConstraint>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#name WafregionalGeoMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.geoMatchConstraint">geoMatchConstraint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>></code> | geo_match_constraint block. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#id WafregionalGeoMatchSet#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#name WafregionalGeoMatchSet#name}.

---

##### `geoMatchConstraint`<sup>Optional</sup> <a name="geoMatchConstraint" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.geoMatchConstraint"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>>

geo_match_constraint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#geo_match_constraint WafregionalGeoMatchSet#geo_match_constraint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#id WafregionalGeoMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.putGeoMatchConstraint">putGeoMatchConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetGeoMatchConstraint">resetGeoMatchConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putGeoMatchConstraint` <a name="putGeoMatchConstraint" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.putGeoMatchConstraint"></a>

```java
public void putGeoMatchConstraint(IResolvable OR java.util.List<WafregionalGeoMatchSetGeoMatchConstraint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.putGeoMatchConstraint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>>

---

##### `resetGeoMatchConstraint` <a name="resetGeoMatchConstraint" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetGeoMatchConstraint"></a>

```java
public void resetGeoMatchConstraint()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_geo_match_set.WafregionalGeoMatchSet;

WafregionalGeoMatchSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_geo_match_set.WafregionalGeoMatchSet;

WafregionalGeoMatchSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_geo_match_set.WafregionalGeoMatchSet;

WafregionalGeoMatchSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.geoMatchConstraint">geoMatchConstraint</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList">WafregionalGeoMatchSetGeoMatchConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.geoMatchConstraintInput">geoMatchConstraintInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `geoMatchConstraint`<sup>Required</sup> <a name="geoMatchConstraint" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.geoMatchConstraint"></a>

```java
public WafregionalGeoMatchSetGeoMatchConstraintList getGeoMatchConstraint();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList">WafregionalGeoMatchSetGeoMatchConstraintList</a>

---

##### `geoMatchConstraintInput`<sup>Optional</sup> <a name="geoMatchConstraintInput" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.geoMatchConstraintInput"></a>

```java
public java.lang.Object getGeoMatchConstraintInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalGeoMatchSetConfig <a name="WafregionalGeoMatchSetConfig" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_geo_match_set.WafregionalGeoMatchSetConfig;

WafregionalGeoMatchSetConfig.builder()
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
//  .geoMatchConstraint(IResolvable)
//  .geoMatchConstraint(java.util.List<WafregionalGeoMatchSetGeoMatchConstraint>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#name WafregionalGeoMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.geoMatchConstraint">geoMatchConstraint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>></code> | geo_match_constraint block. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#id WafregionalGeoMatchSet#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#name WafregionalGeoMatchSet#name}.

---

##### `geoMatchConstraint`<sup>Optional</sup> <a name="geoMatchConstraint" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.geoMatchConstraint"></a>

```java
public java.lang.Object getGeoMatchConstraint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>>

geo_match_constraint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#geo_match_constraint WafregionalGeoMatchSet#geo_match_constraint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#id WafregionalGeoMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WafregionalGeoMatchSetGeoMatchConstraint <a name="WafregionalGeoMatchSetGeoMatchConstraint" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_geo_match_set.WafregionalGeoMatchSetGeoMatchConstraint;

WafregionalGeoMatchSetGeoMatchConstraint.builder()
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#type WafregionalGeoMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#value WafregionalGeoMatchSet#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#type WafregionalGeoMatchSet#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set#value WafregionalGeoMatchSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalGeoMatchSetGeoMatchConstraintList <a name="WafregionalGeoMatchSetGeoMatchConstraintList" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_geo_match_set.WafregionalGeoMatchSetGeoMatchConstraintList;

new WafregionalGeoMatchSetGeoMatchConstraintList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.get"></a>

```java
public WafregionalGeoMatchSetGeoMatchConstraintOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a>>

---


### WafregionalGeoMatchSetGeoMatchConstraintOutputReference <a name="WafregionalGeoMatchSetGeoMatchConstraintOutputReference" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_geo_match_set.WafregionalGeoMatchSetGeoMatchConstraintOutputReference;

new WafregionalGeoMatchSetGeoMatchConstraintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraintOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalGeoMatchSet.WafregionalGeoMatchSetGeoMatchConstraint">WafregionalGeoMatchSetGeoMatchConstraint</a> OR com.hashicorp.cdktf.IResolvable

---




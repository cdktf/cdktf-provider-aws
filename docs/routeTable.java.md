# `routeTable` Submodule <a name="`routeTable` Submodule" id="@cdktf/provider-aws.routeTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RouteTable <a name="RouteTable" id="@cdktf/provider-aws.routeTable.RouteTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route_table aws_route_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route_table.RouteTable;

RouteTable.Builder.create(Construct scope, java.lang.String id)
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
    .vpcId(java.lang.String)
//  .id(java.lang.String)
//  .propagatingVgws(java.util.List<java.lang.String>)
//  .route(IResolvable)
//  .route(java.util.List<RouteTableRoute>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RouteTableTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_id RouteTable#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#id RouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.propagatingVgws">propagatingVgws</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#propagating_vgws RouteTable#propagating_vgws}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.route">route</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#route RouteTable#route}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags RouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags_all RouteTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_id RouteTable#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#id RouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propagatingVgws`<sup>Optional</sup> <a name="propagatingVgws" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.propagatingVgws"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#propagating_vgws RouteTable#propagating_vgws}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.route"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#route RouteTable#route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags RouteTable#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags_all RouteTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#timeouts RouteTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetPropagatingVgws">resetPropagatingVgws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetRoute">resetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.routeTable.RouteTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.routeTable.RouteTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.routeTable.RouteTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.routeTable.RouteTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.routeTable.RouteTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.routeTable.RouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.routeTable.RouteTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.routeTable.RouteTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.routeTable.RouteTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRoute` <a name="putRoute" id="@cdktf/provider-aws.routeTable.RouteTable.putRoute"></a>

```java
public void putRoute(IResolvable OR java.util.List<RouteTableRoute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.routeTable.RouteTable.putRoute.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.routeTable.RouteTable.putTimeouts"></a>

```java
public void putTimeouts(RouteTableTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.routeTable.RouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.routeTable.RouteTable.resetId"></a>

```java
public void resetId()
```

##### `resetPropagatingVgws` <a name="resetPropagatingVgws" id="@cdktf/provider-aws.routeTable.RouteTable.resetPropagatingVgws"></a>

```java
public void resetPropagatingVgws()
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-aws.routeTable.RouteTable.resetRoute"></a>

```java
public void resetRoute()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.routeTable.RouteTable.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.routeTable.RouteTable.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.routeTable.RouteTable.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.routeTable.RouteTable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route_table.RouteTable;

RouteTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.routeTable.RouteTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.routeTable.RouteTable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route_table.RouteTable;

RouteTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.routeTable.RouteTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.routeTable.RouteTable.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route_table.RouteTable;

RouteTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.routeTable.RouteTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.route">route</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList">RouteTableRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference">RouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.propagatingVgwsInput">propagatingVgwsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.routeInput">routeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.propagatingVgws">propagatingVgws</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.routeTable.RouteTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.routeTable.RouteTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.routeTable.RouteTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.routeTable.RouteTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.routeTable.RouteTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.routeTable.RouteTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.routeTable.RouteTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.routeTable.RouteTable.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.routeTable.RouteTable.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.routeTable.RouteTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.routeTable.RouteTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.routeTable.RouteTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.routeTable.RouteTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.routeTable.RouteTable.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.routeTable.RouteTable.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.routeTable.RouteTable.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-aws.routeTable.RouteTable.property.route"></a>

```java
public RouteTableRouteList getRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList">RouteTableRouteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.routeTable.RouteTable.property.timeouts"></a>

```java
public RouteTableTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference">RouteTableTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `propagatingVgwsInput`<sup>Optional</sup> <a name="propagatingVgwsInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.propagatingVgwsInput"></a>

```java
public java.util.List<java.lang.String> getPropagatingVgwsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.routeInput"></a>

```java
public java.lang.Object getRouteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.routeTable.RouteTable.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.routeTable.RouteTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `propagatingVgws`<sup>Required</sup> <a name="propagatingVgws" id="@cdktf/provider-aws.routeTable.RouteTable.property.propagatingVgws"></a>

```java
public java.util.List<java.lang.String> getPropagatingVgws();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.routeTable.RouteTable.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.routeTable.RouteTable.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.routeTable.RouteTable.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.routeTable.RouteTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RouteTableConfig <a name="RouteTableConfig" id="@cdktf/provider-aws.routeTable.RouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.routeTable.RouteTableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route_table.RouteTableConfig;

RouteTableConfig.builder()
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
    .vpcId(java.lang.String)
//  .id(java.lang.String)
//  .propagatingVgws(java.util.List<java.lang.String>)
//  .route(IResolvable)
//  .route(java.util.List<RouteTableRoute>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RouteTableTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_id RouteTable#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#id RouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.propagatingVgws">propagatingVgws</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#propagating_vgws RouteTable#propagating_vgws}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.route">route</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#route RouteTable#route}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags RouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags_all RouteTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_id RouteTable#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#id RouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propagatingVgws`<sup>Optional</sup> <a name="propagatingVgws" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.propagatingVgws"></a>

```java
public java.util.List<java.lang.String> getPropagatingVgws();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#propagating_vgws RouteTable#propagating_vgws}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.route"></a>

```java
public java.lang.Object getRoute();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#route RouteTable#route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags RouteTable#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags_all RouteTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.timeouts"></a>

```java
public RouteTableTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#timeouts RouteTable#timeouts}

---

### RouteTableRoute <a name="RouteTableRoute" id="@cdktf/provider-aws.routeTable.RouteTableRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.routeTable.RouteTableRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route_table.RouteTableRoute;

RouteTableRoute.builder()
//  .carrierGatewayId(java.lang.String)
//  .cidrBlock(java.lang.String)
//  .coreNetworkArn(java.lang.String)
//  .destinationPrefixListId(java.lang.String)
//  .egressOnlyGatewayId(java.lang.String)
//  .gatewayId(java.lang.String)
//  .instanceId(java.lang.String)
//  .ipv6CidrBlock(java.lang.String)
//  .localGatewayId(java.lang.String)
//  .natGatewayId(java.lang.String)
//  .networkInterfaceId(java.lang.String)
//  .transitGatewayId(java.lang.String)
//  .vpcEndpointId(java.lang.String)
//  .vpcPeeringConnectionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.carrierGatewayId">carrierGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#carrier_gateway_id RouteTable#carrier_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#cidr_block RouteTable#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#core_network_arn RouteTable#core_network_arn}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#destination_prefix_list_id RouteTable#destination_prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.egressOnlyGatewayId">egressOnlyGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#egress_only_gateway_id RouteTable#egress_only_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#gateway_id RouteTable#gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#instance_id RouteTable#instance_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#ipv6_cidr_block RouteTable#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#local_gateway_id RouteTable#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.natGatewayId">natGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#nat_gateway_id RouteTable#nat_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#network_interface_id RouteTable#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#transit_gateway_id RouteTable#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_endpoint_id RouteTable#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_peering_connection_id RouteTable#vpc_peering_connection_id}. |

---

##### `carrierGatewayId`<sup>Optional</sup> <a name="carrierGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.carrierGatewayId"></a>

```java
public java.lang.String getCarrierGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#carrier_gateway_id RouteTable#carrier_gateway_id}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#cidr_block RouteTable#cidr_block}.

---

##### `coreNetworkArn`<sup>Optional</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#core_network_arn RouteTable#core_network_arn}.

---

##### `destinationPrefixListId`<sup>Optional</sup> <a name="destinationPrefixListId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.destinationPrefixListId"></a>

```java
public java.lang.String getDestinationPrefixListId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#destination_prefix_list_id RouteTable#destination_prefix_list_id}.

---

##### `egressOnlyGatewayId`<sup>Optional</sup> <a name="egressOnlyGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.egressOnlyGatewayId"></a>

```java
public java.lang.String getEgressOnlyGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#egress_only_gateway_id RouteTable#egress_only_gateway_id}.

---

##### `gatewayId`<sup>Optional</sup> <a name="gatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#gateway_id RouteTable#gateway_id}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#instance_id RouteTable#instance_id}.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#ipv6_cidr_block RouteTable#ipv6_cidr_block}.

---

##### `localGatewayId`<sup>Optional</sup> <a name="localGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.localGatewayId"></a>

```java
public java.lang.String getLocalGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#local_gateway_id RouteTable#local_gateway_id}.

---

##### `natGatewayId`<sup>Optional</sup> <a name="natGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.natGatewayId"></a>

```java
public java.lang.String getNatGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#nat_gateway_id RouteTable#nat_gateway_id}.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#network_interface_id RouteTable#network_interface_id}.

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#transit_gateway_id RouteTable#transit_gateway_id}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_endpoint_id RouteTable#vpc_endpoint_id}.

---

##### `vpcPeeringConnectionId`<sup>Optional</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.vpcPeeringConnectionId"></a>

```java
public java.lang.String getVpcPeeringConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_peering_connection_id RouteTable#vpc_peering_connection_id}.

---

### RouteTableTimeouts <a name="RouteTableTimeouts" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route_table.RouteTableTimeouts;

RouteTableTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#create RouteTable#create}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#delete RouteTable#delete}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#update RouteTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#create RouteTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#delete RouteTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#update RouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RouteTableRouteList <a name="RouteTableRouteList" id="@cdktf/provider-aws.routeTable.RouteTableRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route_table.RouteTableRouteList;

new RouteTableRouteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.get"></a>

```java
public RouteTableRouteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>>

---


### RouteTableRouteOutputReference <a name="RouteTableRouteOutputReference" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route_table.RouteTableRouteOutputReference;

new RouteTableRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCarrierGatewayId">resetCarrierGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCoreNetworkArn">resetCoreNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetDestinationPrefixListId">resetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetEgressOnlyGatewayId">resetEgressOnlyGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetGatewayId">resetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetLocalGatewayId">resetLocalGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetNatGatewayId">resetNatGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetVpcPeeringConnectionId">resetVpcPeeringConnectionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCarrierGatewayId` <a name="resetCarrierGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCarrierGatewayId"></a>

```java
public void resetCarrierGatewayId()
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCidrBlock"></a>

```java
public void resetCidrBlock()
```

##### `resetCoreNetworkArn` <a name="resetCoreNetworkArn" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCoreNetworkArn"></a>

```java
public void resetCoreNetworkArn()
```

##### `resetDestinationPrefixListId` <a name="resetDestinationPrefixListId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetDestinationPrefixListId"></a>

```java
public void resetDestinationPrefixListId()
```

##### `resetEgressOnlyGatewayId` <a name="resetEgressOnlyGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetEgressOnlyGatewayId"></a>

```java
public void resetEgressOnlyGatewayId()
```

##### `resetGatewayId` <a name="resetGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetGatewayId"></a>

```java
public void resetGatewayId()
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetIpv6CidrBlock"></a>

```java
public void resetIpv6CidrBlock()
```

##### `resetLocalGatewayId` <a name="resetLocalGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetLocalGatewayId"></a>

```java
public void resetLocalGatewayId()
```

##### `resetNatGatewayId` <a name="resetNatGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetNatGatewayId"></a>

```java
public void resetNatGatewayId()
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetNetworkInterfaceId"></a>

```java
public void resetNetworkInterfaceId()
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetTransitGatewayId"></a>

```java
public void resetTransitGatewayId()
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetVpcEndpointId"></a>

```java
public void resetVpcEndpointId()
```

##### `resetVpcPeeringConnectionId` <a name="resetVpcPeeringConnectionId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetVpcPeeringConnectionId"></a>

```java
public void resetVpcPeeringConnectionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.carrierGatewayIdInput">carrierGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.coreNetworkArnInput">coreNetworkArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.destinationPrefixListIdInput">destinationPrefixListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.egressOnlyGatewayIdInput">egressOnlyGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.gatewayIdInput">gatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.localGatewayIdInput">localGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.natGatewayIdInput">natGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput">vpcPeeringConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.carrierGatewayId">carrierGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.egressOnlyGatewayId">egressOnlyGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.natGatewayId">natGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `carrierGatewayIdInput`<sup>Optional</sup> <a name="carrierGatewayIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.carrierGatewayIdInput"></a>

```java
public java.lang.String getCarrierGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.cidrBlockInput"></a>

```java
public java.lang.String getCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `coreNetworkArnInput`<sup>Optional</sup> <a name="coreNetworkArnInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.coreNetworkArnInput"></a>

```java
public java.lang.String getCoreNetworkArnInput();
```

- *Type:* java.lang.String

---

##### `destinationPrefixListIdInput`<sup>Optional</sup> <a name="destinationPrefixListIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.destinationPrefixListIdInput"></a>

```java
public java.lang.String getDestinationPrefixListIdInput();
```

- *Type:* java.lang.String

---

##### `egressOnlyGatewayIdInput`<sup>Optional</sup> <a name="egressOnlyGatewayIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.egressOnlyGatewayIdInput"></a>

```java
public java.lang.String getEgressOnlyGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.gatewayIdInput"></a>

```java
public java.lang.String getGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.ipv6CidrBlockInput"></a>

```java
public java.lang.String getIpv6CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `localGatewayIdInput`<sup>Optional</sup> <a name="localGatewayIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.localGatewayIdInput"></a>

```java
public java.lang.String getLocalGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `natGatewayIdInput`<sup>Optional</sup> <a name="natGatewayIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.natGatewayIdInput"></a>

```java
public java.lang.String getNatGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.transitGatewayIdInput"></a>

```java
public java.lang.String getTransitGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `vpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="vpcPeeringConnectionIdInput" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput"></a>

```java
public java.lang.String getVpcPeeringConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `carrierGatewayId`<sup>Required</sup> <a name="carrierGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.carrierGatewayId"></a>

```java
public java.lang.String getCarrierGatewayId();
```

- *Type:* java.lang.String

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

---

##### `destinationPrefixListId`<sup>Required</sup> <a name="destinationPrefixListId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.destinationPrefixListId"></a>

```java
public java.lang.String getDestinationPrefixListId();
```

- *Type:* java.lang.String

---

##### `egressOnlyGatewayId`<sup>Required</sup> <a name="egressOnlyGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.egressOnlyGatewayId"></a>

```java
public java.lang.String getEgressOnlyGatewayId();
```

- *Type:* java.lang.String

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.localGatewayId"></a>

```java
public java.lang.String getLocalGatewayId();
```

- *Type:* java.lang.String

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.natGatewayId"></a>

```java
public java.lang.String getNatGatewayId();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcPeeringConnectionId"></a>

```java
public java.lang.String getVpcPeeringConnectionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a> OR com.hashicorp.cdktf.IResolvable

---


### RouteTableTimeoutsOutputReference <a name="RouteTableTimeoutsOutputReference" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route_table.RouteTableTimeoutsOutputReference;

new RouteTableTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---




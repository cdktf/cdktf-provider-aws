# `defaultRouteTable` Submodule <a name="`defaultRouteTable` Submodule" id="@cdktf/provider-aws.defaultRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultRouteTable <a name="DefaultRouteTable" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_route_table aws_default_route_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_route_table.DefaultRouteTable;

DefaultRouteTable.Builder.create(Construct scope, java.lang.String id)
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
    .defaultRouteTableId(java.lang.String)
//  .id(java.lang.String)
//  .propagatingVgws(java.util.List<java.lang.String>)
//  .route(IResolvable)
//  .route(java.util.List<DefaultRouteTableRoute>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DefaultRouteTableTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.defaultRouteTableId">defaultRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#id DefaultRouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.propagatingVgws">propagatingVgws</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.route">route</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#route DefaultRouteTable#route}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags DefaultRouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags_all DefaultRouteTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultRouteTableId`<sup>Required</sup> <a name="defaultRouteTableId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.defaultRouteTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#id DefaultRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propagatingVgws`<sup>Optional</sup> <a name="propagatingVgws" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.propagatingVgws"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.route"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#route DefaultRouteTable#route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags DefaultRouteTable#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags_all DefaultRouteTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#timeouts DefaultRouteTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetPropagatingVgws">resetPropagatingVgws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetRoute">resetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRoute` <a name="putRoute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putRoute"></a>

```java
public void putRoute(IResolvable OR java.util.List<DefaultRouteTableRoute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putRoute.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putTimeouts"></a>

```java
public void putTimeouts(DefaultRouteTableTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetId"></a>

```java
public void resetId()
```

##### `resetPropagatingVgws` <a name="resetPropagatingVgws" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetPropagatingVgws"></a>

```java
public void resetPropagatingVgws()
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetRoute"></a>

```java
public void resetRoute()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_route_table.DefaultRouteTable;

DefaultRouteTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_route_table.DefaultRouteTable;

DefaultRouteTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_route_table.DefaultRouteTable;

DefaultRouteTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.route">route</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList">DefaultRouteTableRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference">DefaultRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableIdInput">defaultRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.propagatingVgwsInput">propagatingVgwsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.routeInput">routeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableId">defaultRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.propagatingVgws">propagatingVgws</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.route"></a>

```java
public DefaultRouteTableRouteList getRoute();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList">DefaultRouteTableRouteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.timeouts"></a>

```java
public DefaultRouteTableTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference">DefaultRouteTableTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `defaultRouteTableIdInput`<sup>Optional</sup> <a name="defaultRouteTableIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableIdInput"></a>

```java
public java.lang.String getDefaultRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `propagatingVgwsInput`<sup>Optional</sup> <a name="propagatingVgwsInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.propagatingVgwsInput"></a>

```java
public java.util.List<java.lang.String> getPropagatingVgwsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.routeInput"></a>

```java
public java.lang.Object getRouteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `defaultRouteTableId`<sup>Required</sup> <a name="defaultRouteTableId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableId"></a>

```java
public java.lang.String getDefaultRouteTableId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `propagatingVgws`<sup>Required</sup> <a name="propagatingVgws" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.propagatingVgws"></a>

```java
public java.util.List<java.lang.String> getPropagatingVgws();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultRouteTableConfig <a name="DefaultRouteTableConfig" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_route_table.DefaultRouteTableConfig;

DefaultRouteTableConfig.builder()
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
    .defaultRouteTableId(java.lang.String)
//  .id(java.lang.String)
//  .propagatingVgws(java.util.List<java.lang.String>)
//  .route(IResolvable)
//  .route(java.util.List<DefaultRouteTableRoute>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DefaultRouteTableTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.defaultRouteTableId">defaultRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#id DefaultRouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.propagatingVgws">propagatingVgws</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.route">route</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#route DefaultRouteTable#route}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags DefaultRouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags_all DefaultRouteTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultRouteTableId`<sup>Required</sup> <a name="defaultRouteTableId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.defaultRouteTableId"></a>

```java
public java.lang.String getDefaultRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#id DefaultRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propagatingVgws`<sup>Optional</sup> <a name="propagatingVgws" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.propagatingVgws"></a>

```java
public java.util.List<java.lang.String> getPropagatingVgws();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.route"></a>

```java
public java.lang.Object getRoute();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#route DefaultRouteTable#route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags DefaultRouteTable#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags_all DefaultRouteTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.timeouts"></a>

```java
public DefaultRouteTableTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#timeouts DefaultRouteTable#timeouts}

---

### DefaultRouteTableRoute <a name="DefaultRouteTableRoute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_route_table.DefaultRouteTableRoute;

DefaultRouteTableRoute.builder()
//  .cidrBlock(java.lang.String)
//  .coreNetworkArn(java.lang.String)
//  .destinationPrefixListId(java.lang.String)
//  .egressOnlyGatewayId(java.lang.String)
//  .gatewayId(java.lang.String)
//  .instanceId(java.lang.String)
//  .ipv6CidrBlock(java.lang.String)
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
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#cidr_block DefaultRouteTable#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#core_network_arn DefaultRouteTable#core_network_arn}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#destination_prefix_list_id DefaultRouteTable#destination_prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.egressOnlyGatewayId">egressOnlyGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#egress_only_gateway_id DefaultRouteTable#egress_only_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#gateway_id DefaultRouteTable#gateway_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#instance_id DefaultRouteTable#instance_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#ipv6_cidr_block DefaultRouteTable#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.natGatewayId">natGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#nat_gateway_id DefaultRouteTable#nat_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#network_interface_id DefaultRouteTable#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#transit_gateway_id DefaultRouteTable#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#vpc_endpoint_id DefaultRouteTable#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#vpc_peering_connection_id DefaultRouteTable#vpc_peering_connection_id}. |

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#cidr_block DefaultRouteTable#cidr_block}.

---

##### `coreNetworkArn`<sup>Optional</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#core_network_arn DefaultRouteTable#core_network_arn}.

---

##### `destinationPrefixListId`<sup>Optional</sup> <a name="destinationPrefixListId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.destinationPrefixListId"></a>

```java
public java.lang.String getDestinationPrefixListId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#destination_prefix_list_id DefaultRouteTable#destination_prefix_list_id}.

---

##### `egressOnlyGatewayId`<sup>Optional</sup> <a name="egressOnlyGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.egressOnlyGatewayId"></a>

```java
public java.lang.String getEgressOnlyGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#egress_only_gateway_id DefaultRouteTable#egress_only_gateway_id}.

---

##### `gatewayId`<sup>Optional</sup> <a name="gatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#gateway_id DefaultRouteTable#gateway_id}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#instance_id DefaultRouteTable#instance_id}.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#ipv6_cidr_block DefaultRouteTable#ipv6_cidr_block}.

---

##### `natGatewayId`<sup>Optional</sup> <a name="natGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.natGatewayId"></a>

```java
public java.lang.String getNatGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#nat_gateway_id DefaultRouteTable#nat_gateway_id}.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#network_interface_id DefaultRouteTable#network_interface_id}.

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#transit_gateway_id DefaultRouteTable#transit_gateway_id}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#vpc_endpoint_id DefaultRouteTable#vpc_endpoint_id}.

---

##### `vpcPeeringConnectionId`<sup>Optional</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.vpcPeeringConnectionId"></a>

```java
public java.lang.String getVpcPeeringConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#vpc_peering_connection_id DefaultRouteTable#vpc_peering_connection_id}.

---

### DefaultRouteTableTimeouts <a name="DefaultRouteTableTimeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_route_table.DefaultRouteTableTimeouts;

DefaultRouteTableTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#create DefaultRouteTable#create}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#update DefaultRouteTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#create DefaultRouteTable#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#update DefaultRouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultRouteTableRouteList <a name="DefaultRouteTableRouteList" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_route_table.DefaultRouteTableRouteList;

new DefaultRouteTableRouteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.get"></a>

```java
public DefaultRouteTableRouteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>>

---


### DefaultRouteTableRouteOutputReference <a name="DefaultRouteTableRouteOutputReference" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_route_table.DefaultRouteTableRouteOutputReference;

new DefaultRouteTableRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCoreNetworkArn">resetCoreNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetDestinationPrefixListId">resetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetEgressOnlyGatewayId">resetEgressOnlyGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetGatewayId">resetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNatGatewayId">resetNatGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcPeeringConnectionId">resetVpcPeeringConnectionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCidrBlock"></a>

```java
public void resetCidrBlock()
```

##### `resetCoreNetworkArn` <a name="resetCoreNetworkArn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCoreNetworkArn"></a>

```java
public void resetCoreNetworkArn()
```

##### `resetDestinationPrefixListId` <a name="resetDestinationPrefixListId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetDestinationPrefixListId"></a>

```java
public void resetDestinationPrefixListId()
```

##### `resetEgressOnlyGatewayId` <a name="resetEgressOnlyGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetEgressOnlyGatewayId"></a>

```java
public void resetEgressOnlyGatewayId()
```

##### `resetGatewayId` <a name="resetGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetGatewayId"></a>

```java
public void resetGatewayId()
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetIpv6CidrBlock"></a>

```java
public void resetIpv6CidrBlock()
```

##### `resetNatGatewayId` <a name="resetNatGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNatGatewayId"></a>

```java
public void resetNatGatewayId()
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNetworkInterfaceId"></a>

```java
public void resetNetworkInterfaceId()
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetTransitGatewayId"></a>

```java
public void resetTransitGatewayId()
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcEndpointId"></a>

```java
public void resetVpcEndpointId()
```

##### `resetVpcPeeringConnectionId` <a name="resetVpcPeeringConnectionId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcPeeringConnectionId"></a>

```java
public void resetVpcPeeringConnectionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.coreNetworkArnInput">coreNetworkArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListIdInput">destinationPrefixListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayIdInput">egressOnlyGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayIdInput">gatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayIdInput">natGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput">vpcPeeringConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayId">egressOnlyGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayId">natGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlockInput"></a>

```java
public java.lang.String getCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `coreNetworkArnInput`<sup>Optional</sup> <a name="coreNetworkArnInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.coreNetworkArnInput"></a>

```java
public java.lang.String getCoreNetworkArnInput();
```

- *Type:* java.lang.String

---

##### `destinationPrefixListIdInput`<sup>Optional</sup> <a name="destinationPrefixListIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListIdInput"></a>

```java
public java.lang.String getDestinationPrefixListIdInput();
```

- *Type:* java.lang.String

---

##### `egressOnlyGatewayIdInput`<sup>Optional</sup> <a name="egressOnlyGatewayIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayIdInput"></a>

```java
public java.lang.String getEgressOnlyGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayIdInput"></a>

```java
public java.lang.String getGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlockInput"></a>

```java
public java.lang.String getIpv6CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `natGatewayIdInput`<sup>Optional</sup> <a name="natGatewayIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayIdInput"></a>

```java
public java.lang.String getNatGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayIdInput"></a>

```java
public java.lang.String getTransitGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `vpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="vpcPeeringConnectionIdInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput"></a>

```java
public java.lang.String getVpcPeeringConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

---

##### `destinationPrefixListId`<sup>Required</sup> <a name="destinationPrefixListId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListId"></a>

```java
public java.lang.String getDestinationPrefixListId();
```

- *Type:* java.lang.String

---

##### `egressOnlyGatewayId`<sup>Required</sup> <a name="egressOnlyGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayId"></a>

```java
public java.lang.String getEgressOnlyGatewayId();
```

- *Type:* java.lang.String

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayId"></a>

```java
public java.lang.String getNatGatewayId();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionId"></a>

```java
public java.lang.String getVpcPeeringConnectionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a> OR com.hashicorp.cdktf.IResolvable

---


### DefaultRouteTableTimeoutsOutputReference <a name="DefaultRouteTableTimeoutsOutputReference" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_route_table.DefaultRouteTableTimeoutsOutputReference;

new DefaultRouteTableTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---




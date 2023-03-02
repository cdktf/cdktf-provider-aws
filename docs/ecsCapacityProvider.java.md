# `ecsCapacityProvider` Submodule <a name="`ecsCapacityProvider` Submodule" id="@cdktf/provider-aws.ecsCapacityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsCapacityProvider <a name="EcsCapacityProvider" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider aws_ecs_capacity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_capacity_provider.EcsCapacityProvider;

EcsCapacityProvider.Builder.create(Construct scope, java.lang.String id)
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
    .autoScalingGroupProvider(EcsCapacityProviderAutoScalingGroupProvider)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.autoScalingGroupProvider">autoScalingGroupProvider</a></code> | <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider">EcsCapacityProviderAutoScalingGroupProvider</a></code> | auto_scaling_group_provider block. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#name EcsCapacityProvider#name}. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#id EcsCapacityProvider#id}. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#tags EcsCapacityProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#tags_all EcsCapacityProvider#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoScalingGroupProvider`<sup>Required</sup> <a name="autoScalingGroupProvider" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.autoScalingGroupProvider"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider">EcsCapacityProviderAutoScalingGroupProvider</a>

auto_scaling_group_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#auto_scaling_group_provider EcsCapacityProvider#auto_scaling_group_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#name EcsCapacityProvider#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#id EcsCapacityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#tags EcsCapacityProvider#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#tags_all EcsCapacityProvider#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.putAutoScalingGroupProvider">putAutoScalingGroupProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAutoScalingGroupProvider` <a name="putAutoScalingGroupProvider" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.putAutoScalingGroupProvider"></a>

```java
public void putAutoScalingGroupProvider(EcsCapacityProviderAutoScalingGroupProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.putAutoScalingGroupProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider">EcsCapacityProviderAutoScalingGroupProvider</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_capacity_provider.EcsCapacityProvider;

EcsCapacityProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_capacity_provider.EcsCapacityProvider;

EcsCapacityProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_capacity_provider.EcsCapacityProvider;

EcsCapacityProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.autoScalingGroupProvider">autoScalingGroupProvider</a></code> | <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference">EcsCapacityProviderAutoScalingGroupProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.autoScalingGroupProviderInput">autoScalingGroupProviderInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider">EcsCapacityProviderAutoScalingGroupProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoScalingGroupProvider`<sup>Required</sup> <a name="autoScalingGroupProvider" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.autoScalingGroupProvider"></a>

```java
public EcsCapacityProviderAutoScalingGroupProviderOutputReference getAutoScalingGroupProvider();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference">EcsCapacityProviderAutoScalingGroupProviderOutputReference</a>

---

##### `autoScalingGroupProviderInput`<sup>Optional</sup> <a name="autoScalingGroupProviderInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.autoScalingGroupProviderInput"></a>

```java
public EcsCapacityProviderAutoScalingGroupProvider getAutoScalingGroupProviderInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider">EcsCapacityProviderAutoScalingGroupProvider</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcsCapacityProviderAutoScalingGroupProvider <a name="EcsCapacityProviderAutoScalingGroupProvider" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_capacity_provider.EcsCapacityProviderAutoScalingGroupProvider;

EcsCapacityProviderAutoScalingGroupProvider.builder()
    .autoScalingGroupArn(java.lang.String)
//  .managedScaling(EcsCapacityProviderAutoScalingGroupProviderManagedScaling)
//  .managedTerminationProtection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider.property.autoScalingGroupArn">autoScalingGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#auto_scaling_group_arn EcsCapacityProvider#auto_scaling_group_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider.property.managedScaling">managedScaling</a></code> | <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling">EcsCapacityProviderAutoScalingGroupProviderManagedScaling</a></code> | managed_scaling block. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider.property.managedTerminationProtection">managedTerminationProtection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#managed_termination_protection EcsCapacityProvider#managed_termination_protection}. |

---

##### `autoScalingGroupArn`<sup>Required</sup> <a name="autoScalingGroupArn" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider.property.autoScalingGroupArn"></a>

```java
public java.lang.String getAutoScalingGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#auto_scaling_group_arn EcsCapacityProvider#auto_scaling_group_arn}.

---

##### `managedScaling`<sup>Optional</sup> <a name="managedScaling" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider.property.managedScaling"></a>

```java
public EcsCapacityProviderAutoScalingGroupProviderManagedScaling getManagedScaling();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling">EcsCapacityProviderAutoScalingGroupProviderManagedScaling</a>

managed_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#managed_scaling EcsCapacityProvider#managed_scaling}

---

##### `managedTerminationProtection`<sup>Optional</sup> <a name="managedTerminationProtection" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider.property.managedTerminationProtection"></a>

```java
public java.lang.String getManagedTerminationProtection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#managed_termination_protection EcsCapacityProvider#managed_termination_protection}.

---

### EcsCapacityProviderAutoScalingGroupProviderManagedScaling <a name="EcsCapacityProviderAutoScalingGroupProviderManagedScaling" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_capacity_provider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling;

EcsCapacityProviderAutoScalingGroupProviderManagedScaling.builder()
//  .instanceWarmupPeriod(java.lang.Number)
//  .maximumScalingStepSize(java.lang.Number)
//  .minimumScalingStepSize(java.lang.Number)
//  .status(java.lang.String)
//  .targetCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling.property.instanceWarmupPeriod">instanceWarmupPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#instance_warmup_period EcsCapacityProvider#instance_warmup_period}. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling.property.maximumScalingStepSize">maximumScalingStepSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#maximum_scaling_step_size EcsCapacityProvider#maximum_scaling_step_size}. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling.property.minimumScalingStepSize">minimumScalingStepSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#minimum_scaling_step_size EcsCapacityProvider#minimum_scaling_step_size}. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#status EcsCapacityProvider#status}. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling.property.targetCapacity">targetCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#target_capacity EcsCapacityProvider#target_capacity}. |

---

##### `instanceWarmupPeriod`<sup>Optional</sup> <a name="instanceWarmupPeriod" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling.property.instanceWarmupPeriod"></a>

```java
public java.lang.Number getInstanceWarmupPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#instance_warmup_period EcsCapacityProvider#instance_warmup_period}.

---

##### `maximumScalingStepSize`<sup>Optional</sup> <a name="maximumScalingStepSize" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling.property.maximumScalingStepSize"></a>

```java
public java.lang.Number getMaximumScalingStepSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#maximum_scaling_step_size EcsCapacityProvider#maximum_scaling_step_size}.

---

##### `minimumScalingStepSize`<sup>Optional</sup> <a name="minimumScalingStepSize" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling.property.minimumScalingStepSize"></a>

```java
public java.lang.Number getMinimumScalingStepSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#minimum_scaling_step_size EcsCapacityProvider#minimum_scaling_step_size}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#status EcsCapacityProvider#status}.

---

##### `targetCapacity`<sup>Optional</sup> <a name="targetCapacity" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling.property.targetCapacity"></a>

```java
public java.lang.Number getTargetCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#target_capacity EcsCapacityProvider#target_capacity}.

---

### EcsCapacityProviderConfig <a name="EcsCapacityProviderConfig" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_capacity_provider.EcsCapacityProviderConfig;

EcsCapacityProviderConfig.builder()
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
    .autoScalingGroupProvider(EcsCapacityProviderAutoScalingGroupProvider)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.autoScalingGroupProvider">autoScalingGroupProvider</a></code> | <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider">EcsCapacityProviderAutoScalingGroupProvider</a></code> | auto_scaling_group_provider block. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#name EcsCapacityProvider#name}. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#id EcsCapacityProvider#id}. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#tags EcsCapacityProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#tags_all EcsCapacityProvider#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoScalingGroupProvider`<sup>Required</sup> <a name="autoScalingGroupProvider" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.autoScalingGroupProvider"></a>

```java
public EcsCapacityProviderAutoScalingGroupProvider getAutoScalingGroupProvider();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider">EcsCapacityProviderAutoScalingGroupProvider</a>

auto_scaling_group_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#auto_scaling_group_provider EcsCapacityProvider#auto_scaling_group_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#name EcsCapacityProvider#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#id EcsCapacityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#tags EcsCapacityProvider#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider#tags_all EcsCapacityProvider#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference <a name="EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_capacity_provider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference;

new EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resetInstanceWarmupPeriod">resetInstanceWarmupPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resetMaximumScalingStepSize">resetMaximumScalingStepSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resetMinimumScalingStepSize">resetMinimumScalingStepSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resetTargetCapacity">resetTargetCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceWarmupPeriod` <a name="resetInstanceWarmupPeriod" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resetInstanceWarmupPeriod"></a>

```java
public void resetInstanceWarmupPeriod()
```

##### `resetMaximumScalingStepSize` <a name="resetMaximumScalingStepSize" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resetMaximumScalingStepSize"></a>

```java
public void resetMaximumScalingStepSize()
```

##### `resetMinimumScalingStepSize` <a name="resetMinimumScalingStepSize" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resetMinimumScalingStepSize"></a>

```java
public void resetMinimumScalingStepSize()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTargetCapacity` <a name="resetTargetCapacity" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.resetTargetCapacity"></a>

```java
public void resetTargetCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.instanceWarmupPeriodInput">instanceWarmupPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.maximumScalingStepSizeInput">maximumScalingStepSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.minimumScalingStepSizeInput">minimumScalingStepSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.targetCapacityInput">targetCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.instanceWarmupPeriod">instanceWarmupPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.maximumScalingStepSize">maximumScalingStepSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.minimumScalingStepSize">minimumScalingStepSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.targetCapacity">targetCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling">EcsCapacityProviderAutoScalingGroupProviderManagedScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceWarmupPeriodInput`<sup>Optional</sup> <a name="instanceWarmupPeriodInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.instanceWarmupPeriodInput"></a>

```java
public java.lang.Number getInstanceWarmupPeriodInput();
```

- *Type:* java.lang.Number

---

##### `maximumScalingStepSizeInput`<sup>Optional</sup> <a name="maximumScalingStepSizeInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.maximumScalingStepSizeInput"></a>

```java
public java.lang.Number getMaximumScalingStepSizeInput();
```

- *Type:* java.lang.Number

---

##### `minimumScalingStepSizeInput`<sup>Optional</sup> <a name="minimumScalingStepSizeInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.minimumScalingStepSizeInput"></a>

```java
public java.lang.Number getMinimumScalingStepSizeInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `targetCapacityInput`<sup>Optional</sup> <a name="targetCapacityInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.targetCapacityInput"></a>

```java
public java.lang.Number getTargetCapacityInput();
```

- *Type:* java.lang.Number

---

##### `instanceWarmupPeriod`<sup>Required</sup> <a name="instanceWarmupPeriod" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.instanceWarmupPeriod"></a>

```java
public java.lang.Number getInstanceWarmupPeriod();
```

- *Type:* java.lang.Number

---

##### `maximumScalingStepSize`<sup>Required</sup> <a name="maximumScalingStepSize" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.maximumScalingStepSize"></a>

```java
public java.lang.Number getMaximumScalingStepSize();
```

- *Type:* java.lang.Number

---

##### `minimumScalingStepSize`<sup>Required</sup> <a name="minimumScalingStepSize" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.minimumScalingStepSize"></a>

```java
public java.lang.Number getMinimumScalingStepSize();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `targetCapacity`<sup>Required</sup> <a name="targetCapacity" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.targetCapacity"></a>

```java
public java.lang.Number getTargetCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference.property.internalValue"></a>

```java
public EcsCapacityProviderAutoScalingGroupProviderManagedScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling">EcsCapacityProviderAutoScalingGroupProviderManagedScaling</a>

---


### EcsCapacityProviderAutoScalingGroupProviderOutputReference <a name="EcsCapacityProviderAutoScalingGroupProviderOutputReference" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_capacity_provider.EcsCapacityProviderAutoScalingGroupProviderOutputReference;

new EcsCapacityProviderAutoScalingGroupProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.putManagedScaling">putManagedScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.resetManagedScaling">resetManagedScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.resetManagedTerminationProtection">resetManagedTerminationProtection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedScaling` <a name="putManagedScaling" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.putManagedScaling"></a>

```java
public void putManagedScaling(EcsCapacityProviderAutoScalingGroupProviderManagedScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.putManagedScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling">EcsCapacityProviderAutoScalingGroupProviderManagedScaling</a>

---

##### `resetManagedScaling` <a name="resetManagedScaling" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.resetManagedScaling"></a>

```java
public void resetManagedScaling()
```

##### `resetManagedTerminationProtection` <a name="resetManagedTerminationProtection" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.resetManagedTerminationProtection"></a>

```java
public void resetManagedTerminationProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.managedScaling">managedScaling</a></code> | <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference">EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.autoScalingGroupArnInput">autoScalingGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.managedScalingInput">managedScalingInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling">EcsCapacityProviderAutoScalingGroupProviderManagedScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.managedTerminationProtectionInput">managedTerminationProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.autoScalingGroupArn">autoScalingGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.managedTerminationProtection">managedTerminationProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider">EcsCapacityProviderAutoScalingGroupProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedScaling`<sup>Required</sup> <a name="managedScaling" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.managedScaling"></a>

```java
public EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference getManagedScaling();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference">EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference</a>

---

##### `autoScalingGroupArnInput`<sup>Optional</sup> <a name="autoScalingGroupArnInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.autoScalingGroupArnInput"></a>

```java
public java.lang.String getAutoScalingGroupArnInput();
```

- *Type:* java.lang.String

---

##### `managedScalingInput`<sup>Optional</sup> <a name="managedScalingInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.managedScalingInput"></a>

```java
public EcsCapacityProviderAutoScalingGroupProviderManagedScaling getManagedScalingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderManagedScaling">EcsCapacityProviderAutoScalingGroupProviderManagedScaling</a>

---

##### `managedTerminationProtectionInput`<sup>Optional</sup> <a name="managedTerminationProtectionInput" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.managedTerminationProtectionInput"></a>

```java
public java.lang.String getManagedTerminationProtectionInput();
```

- *Type:* java.lang.String

---

##### `autoScalingGroupArn`<sup>Required</sup> <a name="autoScalingGroupArn" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.autoScalingGroupArn"></a>

```java
public java.lang.String getAutoScalingGroupArn();
```

- *Type:* java.lang.String

---

##### `managedTerminationProtection`<sup>Required</sup> <a name="managedTerminationProtection" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.managedTerminationProtection"></a>

```java
public java.lang.String getManagedTerminationProtection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProviderOutputReference.property.internalValue"></a>

```java
public EcsCapacityProviderAutoScalingGroupProvider getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCapacityProvider.EcsCapacityProviderAutoScalingGroupProvider">EcsCapacityProviderAutoScalingGroupProvider</a>

---




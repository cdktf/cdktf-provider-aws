# `emrManagedScalingPolicy` Submodule <a name="`emrManagedScalingPolicy` Submodule" id="@cdktf/provider-aws.emrManagedScalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrManagedScalingPolicy <a name="EmrManagedScalingPolicy" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy aws_emr_managed_scaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_managed_scaling_policy.EmrManagedScalingPolicy;

EmrManagedScalingPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
    .computeLimits(IResolvable)
    .computeLimits(java.util.List<EmrManagedScalingPolicyComputeLimits>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#cluster_id EmrManagedScalingPolicy#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.computeLimits">computeLimits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>></code> | compute_limits block. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#id EmrManagedScalingPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#cluster_id EmrManagedScalingPolicy#cluster_id}.

---

##### `computeLimits`<sup>Required</sup> <a name="computeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.computeLimits"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>>

compute_limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#compute_limits EmrManagedScalingPolicy#compute_limits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#id EmrManagedScalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.putComputeLimits">putComputeLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putComputeLimits` <a name="putComputeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.putComputeLimits"></a>

```java
public void putComputeLimits(IResolvable OR java.util.List<EmrManagedScalingPolicyComputeLimits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.putComputeLimits.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_managed_scaling_policy.EmrManagedScalingPolicy;

EmrManagedScalingPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_managed_scaling_policy.EmrManagedScalingPolicy;

EmrManagedScalingPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_managed_scaling_policy.EmrManagedScalingPolicy;

EmrManagedScalingPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.computeLimits">computeLimits</a></code> | <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList">EmrManagedScalingPolicyComputeLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.computeLimitsInput">computeLimitsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeLimits`<sup>Required</sup> <a name="computeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.computeLimits"></a>

```java
public EmrManagedScalingPolicyComputeLimitsList getComputeLimits();
```

- *Type:* <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList">EmrManagedScalingPolicyComputeLimitsList</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `computeLimitsInput`<sup>Optional</sup> <a name="computeLimitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.computeLimitsInput"></a>

```java
public java.lang.Object getComputeLimitsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmrManagedScalingPolicyComputeLimits <a name="EmrManagedScalingPolicyComputeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_managed_scaling_policy.EmrManagedScalingPolicyComputeLimits;

EmrManagedScalingPolicyComputeLimits.builder()
    .maximumCapacityUnits(java.lang.Number)
    .minimumCapacityUnits(java.lang.Number)
    .unitType(java.lang.String)
//  .maximumCoreCapacityUnits(java.lang.Number)
//  .maximumOndemandCapacityUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumCapacityUnits">maximumCapacityUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_capacity_units EmrManagedScalingPolicy#maximum_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.minimumCapacityUnits">minimumCapacityUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#minimum_capacity_units EmrManagedScalingPolicy#minimum_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.unitType">unitType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#unit_type EmrManagedScalingPolicy#unit_type}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumCoreCapacityUnits">maximumCoreCapacityUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_core_capacity_units EmrManagedScalingPolicy#maximum_core_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumOndemandCapacityUnits">maximumOndemandCapacityUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_ondemand_capacity_units EmrManagedScalingPolicy#maximum_ondemand_capacity_units}. |

---

##### `maximumCapacityUnits`<sup>Required</sup> <a name="maximumCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumCapacityUnits"></a>

```java
public java.lang.Number getMaximumCapacityUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_capacity_units EmrManagedScalingPolicy#maximum_capacity_units}.

---

##### `minimumCapacityUnits`<sup>Required</sup> <a name="minimumCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.minimumCapacityUnits"></a>

```java
public java.lang.Number getMinimumCapacityUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#minimum_capacity_units EmrManagedScalingPolicy#minimum_capacity_units}.

---

##### `unitType`<sup>Required</sup> <a name="unitType" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.unitType"></a>

```java
public java.lang.String getUnitType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#unit_type EmrManagedScalingPolicy#unit_type}.

---

##### `maximumCoreCapacityUnits`<sup>Optional</sup> <a name="maximumCoreCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumCoreCapacityUnits"></a>

```java
public java.lang.Number getMaximumCoreCapacityUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_core_capacity_units EmrManagedScalingPolicy#maximum_core_capacity_units}.

---

##### `maximumOndemandCapacityUnits`<sup>Optional</sup> <a name="maximumOndemandCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumOndemandCapacityUnits"></a>

```java
public java.lang.Number getMaximumOndemandCapacityUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_ondemand_capacity_units EmrManagedScalingPolicy#maximum_ondemand_capacity_units}.

---

### EmrManagedScalingPolicyConfig <a name="EmrManagedScalingPolicyConfig" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_managed_scaling_policy.EmrManagedScalingPolicyConfig;

EmrManagedScalingPolicyConfig.builder()
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
    .clusterId(java.lang.String)
    .computeLimits(IResolvable)
    .computeLimits(java.util.List<EmrManagedScalingPolicyComputeLimits>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#cluster_id EmrManagedScalingPolicy#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.computeLimits">computeLimits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>></code> | compute_limits block. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#id EmrManagedScalingPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#cluster_id EmrManagedScalingPolicy#cluster_id}.

---

##### `computeLimits`<sup>Required</sup> <a name="computeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.computeLimits"></a>

```java
public java.lang.Object getComputeLimits();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>>

compute_limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#compute_limits EmrManagedScalingPolicy#compute_limits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#id EmrManagedScalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrManagedScalingPolicyComputeLimitsList <a name="EmrManagedScalingPolicyComputeLimitsList" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_managed_scaling_policy.EmrManagedScalingPolicyComputeLimitsList;

new EmrManagedScalingPolicyComputeLimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.get"></a>

```java
public EmrManagedScalingPolicyComputeLimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>>

---


### EmrManagedScalingPolicyComputeLimitsOutputReference <a name="EmrManagedScalingPolicyComputeLimitsOutputReference" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_managed_scaling_policy.EmrManagedScalingPolicyComputeLimitsOutputReference;

new EmrManagedScalingPolicyComputeLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resetMaximumCoreCapacityUnits">resetMaximumCoreCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resetMaximumOndemandCapacityUnits">resetMaximumOndemandCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumCoreCapacityUnits` <a name="resetMaximumCoreCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resetMaximumCoreCapacityUnits"></a>

```java
public void resetMaximumCoreCapacityUnits()
```

##### `resetMaximumOndemandCapacityUnits` <a name="resetMaximumOndemandCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resetMaximumOndemandCapacityUnits"></a>

```java
public void resetMaximumOndemandCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCapacityUnitsInput">maximumCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCoreCapacityUnitsInput">maximumCoreCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumOndemandCapacityUnitsInput">maximumOndemandCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.minimumCapacityUnitsInput">minimumCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.unitTypeInput">unitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCapacityUnits">maximumCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCoreCapacityUnits">maximumCoreCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumOndemandCapacityUnits">maximumOndemandCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.minimumCapacityUnits">minimumCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.unitType">unitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumCapacityUnitsInput`<sup>Optional</sup> <a name="maximumCapacityUnitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCapacityUnitsInput"></a>

```java
public java.lang.Number getMaximumCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `maximumCoreCapacityUnitsInput`<sup>Optional</sup> <a name="maximumCoreCapacityUnitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCoreCapacityUnitsInput"></a>

```java
public java.lang.Number getMaximumCoreCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `maximumOndemandCapacityUnitsInput`<sup>Optional</sup> <a name="maximumOndemandCapacityUnitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumOndemandCapacityUnitsInput"></a>

```java
public java.lang.Number getMaximumOndemandCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `minimumCapacityUnitsInput`<sup>Optional</sup> <a name="minimumCapacityUnitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.minimumCapacityUnitsInput"></a>

```java
public java.lang.Number getMinimumCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `unitTypeInput`<sup>Optional</sup> <a name="unitTypeInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.unitTypeInput"></a>

```java
public java.lang.String getUnitTypeInput();
```

- *Type:* java.lang.String

---

##### `maximumCapacityUnits`<sup>Required</sup> <a name="maximumCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCapacityUnits"></a>

```java
public java.lang.Number getMaximumCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `maximumCoreCapacityUnits`<sup>Required</sup> <a name="maximumCoreCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCoreCapacityUnits"></a>

```java
public java.lang.Number getMaximumCoreCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `maximumOndemandCapacityUnits`<sup>Required</sup> <a name="maximumOndemandCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumOndemandCapacityUnits"></a>

```java
public java.lang.Number getMaximumOndemandCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `minimumCapacityUnits`<sup>Required</sup> <a name="minimumCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.minimumCapacityUnits"></a>

```java
public java.lang.Number getMinimumCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `unitType`<sup>Required</sup> <a name="unitType" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.unitType"></a>

```java
public java.lang.String getUnitType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a> OR com.hashicorp.cdktf.IResolvable

---




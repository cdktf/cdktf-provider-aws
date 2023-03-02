# `loadBalancerPolicy` Submodule <a name="`loadBalancerPolicy` Submodule" id="@cdktf/provider-aws.loadBalancerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerPolicy <a name="LoadBalancerPolicy" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy aws_load_balancer_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_policy.LoadBalancerPolicy;

LoadBalancerPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .loadBalancerName(java.lang.String)
    .policyName(java.lang.String)
    .policyTypeName(java.lang.String)
//  .id(java.lang.String)
//  .policyAttribute(IResolvable)
//  .policyAttribute(java.util.List<LoadBalancerPolicyPolicyAttribute>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#load_balancer_name LoadBalancerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_name LoadBalancerPolicy#policy_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.policyTypeName">policyTypeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_type_name LoadBalancerPolicy#policy_type_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#id LoadBalancerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.policyAttribute">policyAttribute</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>></code> | policy_attribute block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.loadBalancerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#load_balancer_name LoadBalancerPolicy#load_balancer_name}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.policyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_name LoadBalancerPolicy#policy_name}.

---

##### `policyTypeName`<sup>Required</sup> <a name="policyTypeName" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.policyTypeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_type_name LoadBalancerPolicy#policy_type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#id LoadBalancerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyAttribute`<sup>Optional</sup> <a name="policyAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.Initializer.parameter.policyAttribute"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>>

policy_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_attribute LoadBalancerPolicy#policy_attribute}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.putPolicyAttribute">putPolicyAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetPolicyAttribute">resetPolicyAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPolicyAttribute` <a name="putPolicyAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.putPolicyAttribute"></a>

```java
public void putPolicyAttribute(IResolvable OR java.util.List<LoadBalancerPolicyPolicyAttribute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.putPolicyAttribute.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetPolicyAttribute` <a name="resetPolicyAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.resetPolicyAttribute"></a>

```java
public void resetPolicyAttribute()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_policy.LoadBalancerPolicy;

LoadBalancerPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_policy.LoadBalancerPolicy;

LoadBalancerPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_policy.LoadBalancerPolicy;

LoadBalancerPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyAttribute">policyAttribute</a></code> | <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList">LoadBalancerPolicyPolicyAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.loadBalancerNameInput">loadBalancerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyAttributeInput">policyAttributeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyTypeNameInput">policyTypeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyTypeName">policyTypeName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyAttribute`<sup>Required</sup> <a name="policyAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyAttribute"></a>

```java
public LoadBalancerPolicyPolicyAttributeList getPolicyAttribute();
```

- *Type:* <a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList">LoadBalancerPolicyPolicyAttributeList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerNameInput`<sup>Optional</sup> <a name="loadBalancerNameInput" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.loadBalancerNameInput"></a>

```java
public java.lang.String getLoadBalancerNameInput();
```

- *Type:* java.lang.String

---

##### `policyAttributeInput`<sup>Optional</sup> <a name="policyAttributeInput" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyAttributeInput"></a>

```java
public java.lang.Object getPolicyAttributeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>>

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `policyTypeNameInput`<sup>Optional</sup> <a name="policyTypeNameInput" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyTypeNameInput"></a>

```java
public java.lang.String getPolicyTypeNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `policyTypeName`<sup>Required</sup> <a name="policyTypeName" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.policyTypeName"></a>

```java
public java.lang.String getPolicyTypeName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerPolicyConfig <a name="LoadBalancerPolicyConfig" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_policy.LoadBalancerPolicyConfig;

LoadBalancerPolicyConfig.builder()
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
    .loadBalancerName(java.lang.String)
    .policyName(java.lang.String)
    .policyTypeName(java.lang.String)
//  .id(java.lang.String)
//  .policyAttribute(IResolvable)
//  .policyAttribute(java.util.List<LoadBalancerPolicyPolicyAttribute>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#load_balancer_name LoadBalancerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_name LoadBalancerPolicy#policy_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyTypeName">policyTypeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_type_name LoadBalancerPolicy#policy_type_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#id LoadBalancerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyAttribute">policyAttribute</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>></code> | policy_attribute block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#load_balancer_name LoadBalancerPolicy#load_balancer_name}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_name LoadBalancerPolicy#policy_name}.

---

##### `policyTypeName`<sup>Required</sup> <a name="policyTypeName" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyTypeName"></a>

```java
public java.lang.String getPolicyTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_type_name LoadBalancerPolicy#policy_type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#id LoadBalancerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyAttribute`<sup>Optional</sup> <a name="policyAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyConfig.property.policyAttribute"></a>

```java
public java.lang.Object getPolicyAttribute();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>>

policy_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#policy_attribute LoadBalancerPolicy#policy_attribute}

---

### LoadBalancerPolicyPolicyAttribute <a name="LoadBalancerPolicyPolicyAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_policy.LoadBalancerPolicyPolicyAttribute;

LoadBalancerPolicyPolicyAttribute.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#name LoadBalancerPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#value LoadBalancerPolicy#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#name LoadBalancerPolicy#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy#value LoadBalancerPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerPolicyPolicyAttributeList <a name="LoadBalancerPolicyPolicyAttributeList" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_policy.LoadBalancerPolicyPolicyAttributeList;

new LoadBalancerPolicyPolicyAttributeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.get"></a>

```java
public LoadBalancerPolicyPolicyAttributeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a>>

---


### LoadBalancerPolicyPolicyAttributeOutputReference <a name="LoadBalancerPolicyPolicyAttributeOutputReference" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_policy.LoadBalancerPolicyPolicyAttributeOutputReference;

new LoadBalancerPolicyPolicyAttributeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttributeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.loadBalancerPolicy.LoadBalancerPolicyPolicyAttribute">LoadBalancerPolicyPolicyAttribute</a> OR com.hashicorp.cdktf.IResolvable

---




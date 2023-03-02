# `loadBalancerListenerPolicy` Submodule <a name="`loadBalancerListenerPolicy` Submodule" id="@cdktf/provider-aws.loadBalancerListenerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerListenerPolicy <a name="LoadBalancerListenerPolicy" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy aws_load_balancer_listener_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_listener_policy.LoadBalancerListenerPolicy;

LoadBalancerListenerPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .loadBalancerPort(java.lang.Number)
//  .id(java.lang.String)
//  .policyNames(java.util.List<java.lang.String>)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.loadBalancerPort">loadBalancerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#id LoadBalancerListenerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.policyNames">policyNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#policy_names LoadBalancerListenerPolicy#policy_names}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#triggers LoadBalancerListenerPolicy#triggers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.loadBalancerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}.

---

##### `loadBalancerPort`<sup>Required</sup> <a name="loadBalancerPort" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.loadBalancerPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#id LoadBalancerListenerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyNames`<sup>Optional</sup> <a name="policyNames" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.policyNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#policy_names LoadBalancerListenerPolicy#policy_names}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.triggers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#triggers LoadBalancerListenerPolicy#triggers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetPolicyNames">resetPolicyNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetPolicyNames` <a name="resetPolicyNames" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetPolicyNames"></a>

```java
public void resetPolicyNames()
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetTriggers"></a>

```java
public void resetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_listener_policy.LoadBalancerListenerPolicy;

LoadBalancerListenerPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_listener_policy.LoadBalancerListenerPolicy;

LoadBalancerListenerPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_listener_policy.LoadBalancerListenerPolicy;

LoadBalancerListenerPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerNameInput">loadBalancerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPortInput">loadBalancerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNamesInput">policyNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.triggersInput">triggersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPort">loadBalancerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNames">policyNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerNameInput`<sup>Optional</sup> <a name="loadBalancerNameInput" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerNameInput"></a>

```java
public java.lang.String getLoadBalancerNameInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerPortInput`<sup>Optional</sup> <a name="loadBalancerPortInput" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPortInput"></a>

```java
public java.lang.Number getLoadBalancerPortInput();
```

- *Type:* java.lang.Number

---

##### `policyNamesInput`<sup>Optional</sup> <a name="policyNamesInput" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNamesInput"></a>

```java
public java.util.List<java.lang.String> getPolicyNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.triggersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

---

##### `loadBalancerPort`<sup>Required</sup> <a name="loadBalancerPort" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPort"></a>

```java
public java.lang.Number getLoadBalancerPort();
```

- *Type:* java.lang.Number

---

##### `policyNames`<sup>Required</sup> <a name="policyNames" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNames"></a>

```java
public java.util.List<java.lang.String> getPolicyNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerListenerPolicyConfig <a name="LoadBalancerListenerPolicyConfig" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.load_balancer_listener_policy.LoadBalancerListenerPolicyConfig;

LoadBalancerListenerPolicyConfig.builder()
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
    .loadBalancerPort(java.lang.Number)
//  .id(java.lang.String)
//  .policyNames(java.util.List<java.lang.String>)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerPort">loadBalancerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#id LoadBalancerListenerPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.policyNames">policyNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#policy_names LoadBalancerListenerPolicy#policy_names}. |
| <code><a href="#@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#triggers LoadBalancerListenerPolicy#triggers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}.

---

##### `loadBalancerPort`<sup>Required</sup> <a name="loadBalancerPort" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerPort"></a>

```java
public java.lang.Number getLoadBalancerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#id LoadBalancerListenerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyNames`<sup>Optional</sup> <a name="policyNames" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.policyNames"></a>

```java
public java.util.List<java.lang.String> getPolicyNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#policy_names LoadBalancerListenerPolicy#policy_names}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy#triggers LoadBalancerListenerPolicy#triggers}.

---




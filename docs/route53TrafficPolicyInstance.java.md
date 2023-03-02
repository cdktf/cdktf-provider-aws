# `route53TrafficPolicyInstance` Submodule <a name="`route53TrafficPolicyInstance` Submodule" id="@cdktf/provider-aws.route53TrafficPolicyInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53TrafficPolicyInstance <a name="Route53TrafficPolicyInstance" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance aws_route53_traffic_policy_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_traffic_policy_instance.Route53TrafficPolicyInstance;

Route53TrafficPolicyInstance.Builder.create(Construct scope, java.lang.String id)
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
    .hostedZoneId(java.lang.String)
    .name(java.lang.String)
    .trafficPolicyId(java.lang.String)
    .trafficPolicyVersion(java.lang.Number)
    .ttl(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#hosted_zone_id Route53TrafficPolicyInstance#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#name Route53TrafficPolicyInstance#name}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.trafficPolicyId">trafficPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_id Route53TrafficPolicyInstance#traffic_policy_id}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.trafficPolicyVersion">trafficPolicyVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_version Route53TrafficPolicyInstance#traffic_policy_version}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#ttl Route53TrafficPolicyInstance#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#id Route53TrafficPolicyInstance#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.hostedZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#hosted_zone_id Route53TrafficPolicyInstance#hosted_zone_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#name Route53TrafficPolicyInstance#name}.

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.trafficPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_id Route53TrafficPolicyInstance#traffic_policy_id}.

---

##### `trafficPolicyVersion`<sup>Required</sup> <a name="trafficPolicyVersion" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.trafficPolicyVersion"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_version Route53TrafficPolicyInstance#traffic_policy_version}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#ttl Route53TrafficPolicyInstance#ttl}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#id Route53TrafficPolicyInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_traffic_policy_instance.Route53TrafficPolicyInstance;

Route53TrafficPolicyInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_traffic_policy_instance.Route53TrafficPolicyInstance;

Route53TrafficPolicyInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_traffic_policy_instance.Route53TrafficPolicyInstance;

Route53TrafficPolicyInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyIdInput">trafficPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyVersionInput">trafficPolicyVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyId">trafficPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyVersion">trafficPolicyVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.hostedZoneIdInput"></a>

```java
public java.lang.String getHostedZoneIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `trafficPolicyIdInput`<sup>Optional</sup> <a name="trafficPolicyIdInput" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyIdInput"></a>

```java
public java.lang.String getTrafficPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `trafficPolicyVersionInput`<sup>Optional</sup> <a name="trafficPolicyVersionInput" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyVersionInput"></a>

```java
public java.lang.Number getTrafficPolicyVersionInput();
```

- *Type:* java.lang.Number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyId"></a>

```java
public java.lang.String getTrafficPolicyId();
```

- *Type:* java.lang.String

---

##### `trafficPolicyVersion`<sup>Required</sup> <a name="trafficPolicyVersion" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.trafficPolicyVersion"></a>

```java
public java.lang.Number getTrafficPolicyVersion();
```

- *Type:* java.lang.Number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53TrafficPolicyInstanceConfig <a name="Route53TrafficPolicyInstanceConfig" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_traffic_policy_instance.Route53TrafficPolicyInstanceConfig;

Route53TrafficPolicyInstanceConfig.builder()
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
    .hostedZoneId(java.lang.String)
    .name(java.lang.String)
    .trafficPolicyId(java.lang.String)
    .trafficPolicyVersion(java.lang.Number)
    .ttl(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#hosted_zone_id Route53TrafficPolicyInstance#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#name Route53TrafficPolicyInstance#name}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.trafficPolicyId">trafficPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_id Route53TrafficPolicyInstance#traffic_policy_id}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.trafficPolicyVersion">trafficPolicyVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_version Route53TrafficPolicyInstance#traffic_policy_version}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#ttl Route53TrafficPolicyInstance#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#id Route53TrafficPolicyInstance#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#hosted_zone_id Route53TrafficPolicyInstance#hosted_zone_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#name Route53TrafficPolicyInstance#name}.

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.trafficPolicyId"></a>

```java
public java.lang.String getTrafficPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_id Route53TrafficPolicyInstance#traffic_policy_id}.

---

##### `trafficPolicyVersion`<sup>Required</sup> <a name="trafficPolicyVersion" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.trafficPolicyVersion"></a>

```java
public java.lang.Number getTrafficPolicyVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#traffic_policy_version Route53TrafficPolicyInstance#traffic_policy_version}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#ttl Route53TrafficPolicyInstance#ttl}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53TrafficPolicyInstance.Route53TrafficPolicyInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_traffic_policy_instance#id Route53TrafficPolicyInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




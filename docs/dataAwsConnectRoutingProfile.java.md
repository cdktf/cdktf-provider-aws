# `dataAwsConnectRoutingProfile` Submodule <a name="`dataAwsConnectRoutingProfile` Submodule" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectRoutingProfile <a name="DataAwsConnectRoutingProfile" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile aws_connect_routing_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_connect_routing_profile.DataAwsConnectRoutingProfile;

DataAwsConnectRoutingProfile.Builder.create(Construct scope, java.lang.String id)
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
    .instanceId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .routingProfileId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#instance_id DataAwsConnectRoutingProfile#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#id DataAwsConnectRoutingProfile#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#name DataAwsConnectRoutingProfile#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.routingProfileId">routingProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#routing_profile_id DataAwsConnectRoutingProfile#routing_profile_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#tags DataAwsConnectRoutingProfile#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#instance_id DataAwsConnectRoutingProfile#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#id DataAwsConnectRoutingProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#name DataAwsConnectRoutingProfile#name}.

---

##### `routingProfileId`<sup>Optional</sup> <a name="routingProfileId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.routingProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#routing_profile_id DataAwsConnectRoutingProfile#routing_profile_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#tags DataAwsConnectRoutingProfile#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetRoutingProfileId">resetRoutingProfileId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetName"></a>

```java
public void resetName()
```

##### `resetRoutingProfileId` <a name="resetRoutingProfileId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetRoutingProfileId"></a>

```java
public void resetRoutingProfileId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_connect_routing_profile.DataAwsConnectRoutingProfile;

DataAwsConnectRoutingProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_connect_routing_profile.DataAwsConnectRoutingProfile;

DataAwsConnectRoutingProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_connect_routing_profile.DataAwsConnectRoutingProfile;

DataAwsConnectRoutingProfile.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.defaultOutboundQueueId">defaultOutboundQueueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.mediaConcurrencies">mediaConcurrencies</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList">DataAwsConnectRoutingProfileMediaConcurrenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.queueConfigs">queueConfigs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList">DataAwsConnectRoutingProfileQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileIdInput">routingProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileId">routingProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `defaultOutboundQueueId`<sup>Required</sup> <a name="defaultOutboundQueueId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.defaultOutboundQueueId"></a>

```java
public java.lang.String getDefaultOutboundQueueId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.mediaConcurrencies"></a>

```java
public DataAwsConnectRoutingProfileMediaConcurrenciesList getMediaConcurrencies();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList">DataAwsConnectRoutingProfileMediaConcurrenciesList</a>

---

##### `queueConfigs`<sup>Required</sup> <a name="queueConfigs" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.queueConfigs"></a>

```java
public DataAwsConnectRoutingProfileQueueConfigsList getQueueConfigs();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList">DataAwsConnectRoutingProfileQueueConfigsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `routingProfileIdInput`<sup>Optional</sup> <a name="routingProfileIdInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileIdInput"></a>

```java
public java.lang.String getRoutingProfileIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `routingProfileId`<sup>Required</sup> <a name="routingProfileId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileId"></a>

```java
public java.lang.String getRoutingProfileId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectRoutingProfileConfig <a name="DataAwsConnectRoutingProfileConfig" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_connect_routing_profile.DataAwsConnectRoutingProfileConfig;

DataAwsConnectRoutingProfileConfig.builder()
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
    .instanceId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .routingProfileId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#instance_id DataAwsConnectRoutingProfile#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#id DataAwsConnectRoutingProfile#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#name DataAwsConnectRoutingProfile#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.routingProfileId">routingProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#routing_profile_id DataAwsConnectRoutingProfile#routing_profile_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#tags DataAwsConnectRoutingProfile#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#instance_id DataAwsConnectRoutingProfile#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#id DataAwsConnectRoutingProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#name DataAwsConnectRoutingProfile#name}.

---

##### `routingProfileId`<sup>Optional</sup> <a name="routingProfileId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.routingProfileId"></a>

```java
public java.lang.String getRoutingProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#routing_profile_id DataAwsConnectRoutingProfile#routing_profile_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#tags DataAwsConnectRoutingProfile#tags}.

---

### DataAwsConnectRoutingProfileMediaConcurrencies <a name="DataAwsConnectRoutingProfileMediaConcurrencies" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_connect_routing_profile.DataAwsConnectRoutingProfileMediaConcurrencies;

DataAwsConnectRoutingProfileMediaConcurrencies.builder()
    .build();
```


### DataAwsConnectRoutingProfileQueueConfigs <a name="DataAwsConnectRoutingProfileQueueConfigs" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_connect_routing_profile.DataAwsConnectRoutingProfileQueueConfigs;

DataAwsConnectRoutingProfileQueueConfigs.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectRoutingProfileMediaConcurrenciesList <a name="DataAwsConnectRoutingProfileMediaConcurrenciesList" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_connect_routing_profile.DataAwsConnectRoutingProfileMediaConcurrenciesList;

new DataAwsConnectRoutingProfileMediaConcurrenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.get"></a>

```java
public DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference <a name="DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_connect_routing_profile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference;

new DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency">concurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies">DataAwsConnectRoutingProfileMediaConcurrencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency"></a>

```java
public java.lang.Number getConcurrency();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue"></a>

```java
public DataAwsConnectRoutingProfileMediaConcurrencies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies">DataAwsConnectRoutingProfileMediaConcurrencies</a>

---


### DataAwsConnectRoutingProfileQueueConfigsList <a name="DataAwsConnectRoutingProfileQueueConfigsList" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_connect_routing_profile.DataAwsConnectRoutingProfileQueueConfigsList;

new DataAwsConnectRoutingProfileQueueConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.get"></a>

```java
public DataAwsConnectRoutingProfileQueueConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsConnectRoutingProfileQueueConfigsOutputReference <a name="DataAwsConnectRoutingProfileQueueConfigsOutputReference" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_connect_routing_profile.DataAwsConnectRoutingProfileQueueConfigsOutputReference;

new DataAwsConnectRoutingProfileQueueConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.delay">delay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueId">queueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueName">queueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs">DataAwsConnectRoutingProfileQueueConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.delay"></a>

```java
public java.lang.Number getDelay();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueId"></a>

```java
public java.lang.String getQueueId();
```

- *Type:* java.lang.String

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.internalValue"></a>

```java
public DataAwsConnectRoutingProfileQueueConfigs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs">DataAwsConnectRoutingProfileQueueConfigs</a>

---




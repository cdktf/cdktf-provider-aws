# `cloudwatchEventConnection` Submodule <a name="`cloudwatchEventConnection` Submodule" id="@cdktf/provider-aws.cloudwatchEventConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventConnection <a name="CloudwatchEventConnection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection aws_cloudwatch_event_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnection;

CloudwatchEventConnection.Builder.create(Construct scope, java.lang.String id)
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
    .authorizationType(java.lang.String)
    .authParameters(CloudwatchEventConnectionAuthParameters)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.authParameters">authParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | auth_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#name CloudwatchEventConnection#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#description CloudwatchEventConnection#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#id CloudwatchEventConnection#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.authorizationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}.

---

##### `authParameters`<sup>Required</sup> <a name="authParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.authParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

auth_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#auth_parameters CloudwatchEventConnection#auth_parameters}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#name CloudwatchEventConnection#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#description CloudwatchEventConnection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#id CloudwatchEventConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters">putAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAuthParameters` <a name="putAuthParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters"></a>

```java
public void putAuthParameters(CloudwatchEventConnectionAuthParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnection;

CloudwatchEventConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnection;

CloudwatchEventConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnection;

CloudwatchEventConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParameters">authParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference">CloudwatchEventConnectionAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParametersInput">authParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authParameters`<sup>Required</sup> <a name="authParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParameters"></a>

```java
public CloudwatchEventConnectionAuthParametersOutputReference getAuthParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference">CloudwatchEventConnectionAuthParametersOutputReference</a>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationTypeInput"></a>

```java
public java.lang.String getAuthorizationTypeInput();
```

- *Type:* java.lang.String

---

##### `authParametersInput`<sup>Optional</sup> <a name="authParametersInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParametersInput"></a>

```java
public CloudwatchEventConnectionAuthParameters getAuthParametersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventConnectionAuthParameters <a name="CloudwatchEventConnectionAuthParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParameters;

CloudwatchEventConnectionAuthParameters.builder()
//  .apiKey(CloudwatchEventConnectionAuthParametersApiKey)
//  .basic(CloudwatchEventConnectionAuthParametersBasic)
//  .invocationHttpParameters(CloudwatchEventConnectionAuthParametersInvocationHttpParameters)
//  .oauth(CloudwatchEventConnectionAuthParametersOauth)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.apiKey">apiKey</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a></code> | api_key block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.invocationHttpParameters">invocationHttpParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a></code> | invocation_http_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.oauth">oauth</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a></code> | oauth block. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.apiKey"></a>

```java
public CloudwatchEventConnectionAuthParametersApiKey getApiKey();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#api_key CloudwatchEventConnection#api_key}

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.basic"></a>

```java
public CloudwatchEventConnectionAuthParametersBasic getBasic();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

basic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#basic CloudwatchEventConnection#basic}

---

##### `invocationHttpParameters`<sup>Optional</sup> <a name="invocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.invocationHttpParameters"></a>

```java
public CloudwatchEventConnectionAuthParametersInvocationHttpParameters getInvocationHttpParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

invocation_http_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#invocation_http_parameters CloudwatchEventConnection#invocation_http_parameters}

---

##### `oauth`<sup>Optional</sup> <a name="oauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.oauth"></a>

```java
public CloudwatchEventConnectionAuthParametersOauth getOauth();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

oauth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#oauth CloudwatchEventConnection#oauth}

---

### CloudwatchEventConnectionAuthParametersApiKey <a name="CloudwatchEventConnectionAuthParametersApiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersApiKey;

CloudwatchEventConnectionAuthParametersApiKey.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersBasic <a name="CloudwatchEventConnectionAuthParametersBasic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersBasic;

CloudwatchEventConnectionAuthParametersBasic.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#password CloudwatchEventConnection#password}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#username CloudwatchEventConnection#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#password CloudwatchEventConnection#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#username CloudwatchEventConnection#username}.

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParameters <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters;

CloudwatchEventConnectionAuthParametersInvocationHttpParameters.builder()
//  .body(IResolvable)
//  .body(java.util.List<CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody>)
//  .header(IResolvable)
//  .header(java.util.List<CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader>)
//  .queryString(IResolvable)
//  .queryString(java.util.List<CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.body">body</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>></code> | body block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.queryString">queryString</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>></code> | query_string block. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.body"></a>

```java
public java.lang.Object getBody();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>>

body block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#body CloudwatchEventConnection#body}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>>

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#header CloudwatchEventConnection#header}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.queryString"></a>

```java
public java.lang.Object getQueryString();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>>

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody;

CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.builder()
//  .isValueSecret(java.lang.Boolean)
//  .isValueSecret(IResolvable)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.isValueSecret"></a>

```java
public java.lang.Object getIsValueSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader;

CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.builder()
//  .isValueSecret(java.lang.Boolean)
//  .isValueSecret(IResolvable)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.isValueSecret"></a>

```java
public java.lang.Object getIsValueSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString;

CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.builder()
//  .isValueSecret(java.lang.Boolean)
//  .isValueSecret(IResolvable)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.isValueSecret"></a>

```java
public java.lang.Object getIsValueSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersOauth <a name="CloudwatchEventConnectionAuthParametersOauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauth;

CloudwatchEventConnectionAuthParametersOauth.builder()
    .authorizationEndpoint(java.lang.String)
    .httpMethod(java.lang.String)
    .oauthHttpParameters(CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters)
//  .clientParameters(CloudwatchEventConnectionAuthParametersOauthClientParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#http_method CloudwatchEventConnection#http_method}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.oauthHttpParameters">oauthHttpParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a></code> | oauth_http_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.clientParameters">clientParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a></code> | client_parameters block. |

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}.

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#http_method CloudwatchEventConnection#http_method}.

---

##### `oauthHttpParameters`<sup>Required</sup> <a name="oauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.oauthHttpParameters"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters getOauthHttpParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

oauth_http_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#oauth_http_parameters CloudwatchEventConnection#oauth_http_parameters}

---

##### `clientParameters`<sup>Optional</sup> <a name="clientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.clientParameters"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthClientParameters getClientParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

client_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_parameters CloudwatchEventConnection#client_parameters}

---

### CloudwatchEventConnectionAuthParametersOauthClientParameters <a name="CloudwatchEventConnectionAuthParametersOauthClientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthClientParameters;

CloudwatchEventConnectionAuthParametersOauthClientParameters.builder()
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_id CloudwatchEventConnection#client_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_secret CloudwatchEventConnection#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_id CloudwatchEventConnection#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_secret CloudwatchEventConnection#client_secret}.

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters;

CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.builder()
//  .body(IResolvable)
//  .body(java.util.List<CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody>)
//  .header(IResolvable)
//  .header(java.util.List<CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader>)
//  .queryString(IResolvable)
//  .queryString(java.util.List<CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.body">body</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>></code> | body block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.queryString">queryString</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>></code> | query_string block. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.body"></a>

```java
public java.lang.Object getBody();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>>

body block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#body CloudwatchEventConnection#body}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>>

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#header CloudwatchEventConnection#header}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.queryString"></a>

```java
public java.lang.Object getQueryString();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>>

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody;

CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.builder()
//  .isValueSecret(java.lang.Boolean)
//  .isValueSecret(IResolvable)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.isValueSecret"></a>

```java
public java.lang.Object getIsValueSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader;

CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.builder()
//  .isValueSecret(java.lang.Boolean)
//  .isValueSecret(IResolvable)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.isValueSecret"></a>

```java
public java.lang.Object getIsValueSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString;

CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.builder()
//  .isValueSecret(java.lang.Boolean)
//  .isValueSecret(IResolvable)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.isValueSecret"></a>

```java
public java.lang.Object getIsValueSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionConfig <a name="CloudwatchEventConnectionConfig" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionConfig;

CloudwatchEventConnectionConfig.builder()
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
    .authorizationType(java.lang.String)
    .authParameters(CloudwatchEventConnectionAuthParameters)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authParameters">authParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | auth_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#name CloudwatchEventConnection#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#description CloudwatchEventConnection#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#id CloudwatchEventConnection#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}.

---

##### `authParameters`<sup>Required</sup> <a name="authParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authParameters"></a>

```java
public CloudwatchEventConnectionAuthParameters getAuthParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

auth_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#auth_parameters CloudwatchEventConnection#auth_parameters}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#name CloudwatchEventConnection#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#description CloudwatchEventConnection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#id CloudwatchEventConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchEventConnectionAuthParametersApiKeyOutputReference <a name="CloudwatchEventConnectionAuthParametersApiKeyOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference;

new CloudwatchEventConnectionAuthParametersApiKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.internalValue"></a>

```java
public CloudwatchEventConnectionAuthParametersApiKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

---


### CloudwatchEventConnectionAuthParametersBasicOutputReference <a name="CloudwatchEventConnectionAuthParametersBasicOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersBasicOutputReference;

new CloudwatchEventConnectionAuthParametersBasicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.internalValue"></a>

```java
public CloudwatchEventConnectionAuthParametersBasic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList;

new CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.get"></a>

```java
public CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>>

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference;

new CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetIsValueSecret"></a>

```java
public void resetIsValueSecret()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecretInput"></a>

```java
public java.lang.Object getIsValueSecretInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecret"></a>

```java
public java.lang.Object getIsValueSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList;

new CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.get"></a>

```java
public CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>>

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference;

new CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetIsValueSecret"></a>

```java
public void resetIsValueSecret()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecretInput"></a>

```java
public java.lang.Object getIsValueSecretInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecret"></a>

```java
public java.lang.Object getIsValueSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference;

new CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putBody">putBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryString">putQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBody` <a name="putBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putBody"></a>

```java
public void putBody(IResolvable OR java.util.List<CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putBody.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>>

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>>

---

##### `putQueryString` <a name="putQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryString"></a>

```java
public void putQueryString(IResolvable OR java.util.List<CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryString.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>>

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryString"></a>

```java
public void resetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.body">body</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyInput">bodyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.body"></a>

```java
public CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList getBody();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.header"></a>

```java
public CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList</a>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryString"></a>

```java
public CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList getQueryString();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyInput"></a>

```java
public java.lang.Object getBodyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringInput"></a>

```java
public java.lang.Object getQueryStringInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue"></a>

```java
public CloudwatchEventConnectionAuthParametersInvocationHttpParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList;

new CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.get"></a>

```java
public CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>>

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference;

new CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetIsValueSecret"></a>

```java
public void resetIsValueSecret()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecretInput"></a>

```java
public java.lang.Object getIsValueSecretInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecret"></a>

```java
public java.lang.Object getIsValueSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference;

new CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.internalValue"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthClientParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList;

new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.get"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>>

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference;

new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetIsValueSecret"></a>

```java
public void resetIsValueSecret()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecretInput"></a>

```java
public java.lang.Object getIsValueSecretInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecret"></a>

```java
public java.lang.Object getIsValueSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList;

new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.get"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>>

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference;

new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetIsValueSecret"></a>

```java
public void resetIsValueSecret()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecretInput"></a>

```java
public java.lang.Object getIsValueSecretInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecret"></a>

```java
public java.lang.Object getIsValueSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference;

new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putBody">putBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putQueryString">putQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBody` <a name="putBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putBody"></a>

```java
public void putBody(IResolvable OR java.util.List<CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putBody.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>>

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>>

---

##### `putQueryString` <a name="putQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putQueryString"></a>

```java
public void putQueryString(IResolvable OR java.util.List<CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putQueryString.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>>

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetQueryString"></a>

```java
public void resetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.body">body</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.bodyInput">bodyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.body"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList getBody();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.header"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList</a>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryString"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList getQueryString();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.bodyInput"></a>

```java
public java.lang.Object getBodyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryStringInput"></a>

```java
public java.lang.Object getQueryStringInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.internalValue"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList;

new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.get"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>>

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference;

new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetIsValueSecret"></a>

```java
public void resetIsValueSecret()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecretInput"></a>

```java
public java.lang.Object getIsValueSecretInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecret"></a>

```java
public java.lang.Object getIsValueSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchEventConnectionAuthParametersOauthOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOauthOutputReference;

new CloudwatchEventConnectionAuthParametersOauthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters">putClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters">putOauthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resetClientParameters">resetClientParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientParameters` <a name="putClientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters"></a>

```java
public void putClientParameters(CloudwatchEventConnectionAuthParametersOauthClientParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

---

##### `putOauthHttpParameters` <a name="putOauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters"></a>

```java
public void putOauthHttpParameters(CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

---

##### `resetClientParameters` <a name="resetClientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resetClientParameters"></a>

```java
public void resetClientParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParameters">clientParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParameters">oauthHttpParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParametersInput">clientParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParametersInput">oauthHttpParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientParameters`<sup>Required</sup> <a name="clientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParameters"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference getClientParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference</a>

---

##### `oauthHttpParameters`<sup>Required</sup> <a name="oauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParameters"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference getOauthHttpParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference</a>

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpointInput"></a>

```java
public java.lang.String getAuthorizationEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientParametersInput`<sup>Optional</sup> <a name="clientParametersInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParametersInput"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthClientParameters getClientParametersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `oauthHttpParametersInput`<sup>Optional</sup> <a name="oauthHttpParametersInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParametersInput"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters getOauthHttpParametersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.internalValue"></a>

```java
public CloudwatchEventConnectionAuthParametersOauth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

---


### CloudwatchEventConnectionAuthParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_connection.CloudwatchEventConnectionAuthParametersOutputReference;

new CloudwatchEventConnectionAuthParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic">putBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters">putInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth">putOauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetBasic">resetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetInvocationHttpParameters">resetInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetOauth">resetOauth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey"></a>

```java
public void putApiKey(CloudwatchEventConnectionAuthParametersApiKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

---

##### `putBasic` <a name="putBasic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic"></a>

```java
public void putBasic(CloudwatchEventConnectionAuthParametersBasic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

---

##### `putInvocationHttpParameters` <a name="putInvocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters"></a>

```java
public void putInvocationHttpParameters(CloudwatchEventConnectionAuthParametersInvocationHttpParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

---

##### `putOauth` <a name="putOauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth"></a>

```java
public void putOauth(CloudwatchEventConnectionAuthParametersOauth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetBasic` <a name="resetBasic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetBasic"></a>

```java
public void resetBasic()
```

##### `resetInvocationHttpParameters` <a name="resetInvocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetInvocationHttpParameters"></a>

```java
public void resetInvocationHttpParameters()
```

##### `resetOauth` <a name="resetOauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetOauth"></a>

```java
public void resetOauth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference">CloudwatchEventConnectionAuthParametersApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference">CloudwatchEventConnectionAuthParametersBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParameters">invocationHttpParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauth">oauth</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference">CloudwatchEventConnectionAuthParametersOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basicInput">basicInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParametersInput">invocationHttpParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauthInput">oauthInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKey"></a>

```java
public CloudwatchEventConnectionAuthParametersApiKeyOutputReference getApiKey();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference">CloudwatchEventConnectionAuthParametersApiKeyOutputReference</a>

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basic"></a>

```java
public CloudwatchEventConnectionAuthParametersBasicOutputReference getBasic();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference">CloudwatchEventConnectionAuthParametersBasicOutputReference</a>

---

##### `invocationHttpParameters`<sup>Required</sup> <a name="invocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParameters"></a>

```java
public CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference getInvocationHttpParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference</a>

---

##### `oauth`<sup>Required</sup> <a name="oauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauth"></a>

```java
public CloudwatchEventConnectionAuthParametersOauthOutputReference getOauth();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference">CloudwatchEventConnectionAuthParametersOauthOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKeyInput"></a>

```java
public CloudwatchEventConnectionAuthParametersApiKey getApiKeyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

---

##### `basicInput`<sup>Optional</sup> <a name="basicInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basicInput"></a>

```java
public CloudwatchEventConnectionAuthParametersBasic getBasicInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

---

##### `invocationHttpParametersInput`<sup>Optional</sup> <a name="invocationHttpParametersInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParametersInput"></a>

```java
public CloudwatchEventConnectionAuthParametersInvocationHttpParameters getInvocationHttpParametersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

---

##### `oauthInput`<sup>Optional</sup> <a name="oauthInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauthInput"></a>

```java
public CloudwatchEventConnectionAuthParametersOauth getOauthInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.internalValue"></a>

```java
public CloudwatchEventConnectionAuthParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

---




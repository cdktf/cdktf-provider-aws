# `configDeliveryChannel` Submodule <a name="`configDeliveryChannel` Submodule" id="@cdktf/provider-aws.configDeliveryChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeliveryChannel <a name="ConfigDeliveryChannel" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel aws_config_delivery_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigDeliveryChannel(Construct Scope, string Id, ConfigDeliveryChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig">ConfigDeliveryChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig">ConfigDeliveryChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.putSnapshotDeliveryProperties">PutSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn">ResetS3KmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnapshotDeliveryProperties">ResetSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSnapshotDeliveryProperties` <a name="PutSnapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.putSnapshotDeliveryProperties"></a>

```csharp
private void PutSnapshotDeliveryProperties(ConfigDeliveryChannelSnapshotDeliveryProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.putSnapshotDeliveryProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix"></a>

```csharp
private void ResetS3KeyPrefix()
```

##### `ResetS3KmsKeyArn` <a name="ResetS3KmsKeyArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn"></a>

```csharp
private void ResetS3KmsKeyArn()
```

##### `ResetSnapshotDeliveryProperties` <a name="ResetSnapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnapshotDeliveryProperties"></a>

```csharp
private void ResetSnapshotDeliveryProperties()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigDeliveryChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigDeliveryChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigDeliveryChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryProperties">SnapshotDeliveryProperties</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput">S3KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryPropertiesInput">SnapshotDeliveryPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn">S3KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SnapshotDeliveryProperties`<sup>Required</sup> <a name="SnapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryProperties"></a>

```csharp
public ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference SnapshotDeliveryProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput"></a>

```csharp
public string S3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `S3KmsKeyArnInput`<sup>Optional</sup> <a name="S3KmsKeyArnInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput"></a>

```csharp
public string S3KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `SnapshotDeliveryPropertiesInput`<sup>Optional</sup> <a name="SnapshotDeliveryPropertiesInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryPropertiesInput"></a>

```csharp
public ConfigDeliveryChannelSnapshotDeliveryProperties SnapshotDeliveryPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; }
```

- *Type:* string

---

##### `S3KmsKeyArn`<sup>Required</sup> <a name="S3KmsKeyArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn"></a>

```csharp
public string S3KmsKeyArn { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeliveryChannelConfig <a name="ConfigDeliveryChannelConfig" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigDeliveryChannelConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string S3BucketName,
    string Id = null,
    string Name = null,
    string S3KeyPrefix = null,
    string S3KmsKeyArn = null,
    ConfigDeliveryChannelSnapshotDeliveryProperties SnapshotDeliveryProperties = null,
    string SnsTopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#id ConfigDeliveryChannel#id}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#name ConfigDeliveryChannel#name}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn">S3KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snapshotDeliveryProperties">SnapshotDeliveryProperties</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | snapshot_delivery_properties block. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#id ConfigDeliveryChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#name ConfigDeliveryChannel#name}.

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}.

---

##### `S3KmsKeyArn`<sup>Optional</sup> <a name="S3KmsKeyArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn"></a>

```csharp
public string S3KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}.

---

##### `SnapshotDeliveryProperties`<sup>Optional</sup> <a name="SnapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snapshotDeliveryProperties"></a>

```csharp
public ConfigDeliveryChannelSnapshotDeliveryProperties SnapshotDeliveryProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

snapshot_delivery_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}.

---

### ConfigDeliveryChannelSnapshotDeliveryProperties <a name="ConfigDeliveryChannelSnapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigDeliveryChannelSnapshotDeliveryProperties {
    string DeliveryFrequency = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties.property.deliveryFrequency">DeliveryFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}. |

---

##### `DeliveryFrequency`<sup>Optional</sup> <a name="DeliveryFrequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties.property.deliveryFrequency"></a>

```csharp
public string DeliveryFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference <a name="ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency">ResetDeliveryFrequency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryFrequency` <a name="ResetDeliveryFrequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency"></a>

```csharp
private void ResetDeliveryFrequency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput">DeliveryFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency">DeliveryFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryFrequencyInput`<sup>Optional</sup> <a name="DeliveryFrequencyInput" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput"></a>

```csharp
public string DeliveryFrequencyInput { get; }
```

- *Type:* string

---

##### `DeliveryFrequency`<sup>Required</sup> <a name="DeliveryFrequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency"></a>

```csharp
public string DeliveryFrequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.internalValue"></a>

```csharp
public ConfigDeliveryChannelSnapshotDeliveryProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

---




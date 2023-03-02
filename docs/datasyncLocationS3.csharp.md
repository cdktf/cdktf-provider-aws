# `datasyncLocationS3` Submodule <a name="`datasyncLocationS3` Submodule" id="@cdktf/provider-aws.datasyncLocationS3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationS3 <a name="DatasyncLocationS3" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3 aws_datasync_location_s3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatasyncLocationS3(Construct Scope, string Id, DatasyncLocationS3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config">DatasyncLocationS3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config">DatasyncLocationS3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.putS3Config">PutS3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetAgentArns">ResetAgentArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetS3StorageClass">ResetS3StorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutS3Config` <a name="PutS3Config" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.putS3Config"></a>

```csharp
private void PutS3Config(DatasyncLocationS3S3Config Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

---

##### `ResetAgentArns` <a name="ResetAgentArns" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetAgentArns"></a>

```csharp
private void ResetAgentArns()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetS3StorageClass` <a name="ResetS3StorageClass" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetS3StorageClass"></a>

```csharp
private void ResetS3StorageClass()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DatasyncLocationS3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DatasyncLocationS3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DatasyncLocationS3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3Config">S3Config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference">DatasyncLocationS3S3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.agentArnsInput">AgentArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3BucketArnInput">S3BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3ConfigInput">S3ConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3StorageClassInput">S3StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.agentArns">AgentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3BucketArn">S3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3StorageClass">S3StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.subdirectory">Subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `S3Config`<sup>Required</sup> <a name="S3Config" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3Config"></a>

```csharp
public DatasyncLocationS3S3ConfigOutputReference S3Config { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference">DatasyncLocationS3S3ConfigOutputReference</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `AgentArnsInput`<sup>Optional</sup> <a name="AgentArnsInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.agentArnsInput"></a>

```csharp
public string[] AgentArnsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `S3BucketArnInput`<sup>Optional</sup> <a name="S3BucketArnInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3BucketArnInput"></a>

```csharp
public string S3BucketArnInput { get; }
```

- *Type:* string

---

##### `S3ConfigInput`<sup>Optional</sup> <a name="S3ConfigInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3ConfigInput"></a>

```csharp
public DatasyncLocationS3S3Config S3ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

---

##### `S3StorageClassInput`<sup>Optional</sup> <a name="S3StorageClassInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3StorageClassInput"></a>

```csharp
public string S3StorageClassInput { get; }
```

- *Type:* string

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.subdirectoryInput"></a>

```csharp
public string SubdirectoryInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AgentArns`<sup>Required</sup> <a name="AgentArns" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.agentArns"></a>

```csharp
public string[] AgentArns { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3BucketArn"></a>

```csharp
public string S3BucketArn { get; }
```

- *Type:* string

---

##### `S3StorageClass`<sup>Required</sup> <a name="S3StorageClass" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.s3StorageClass"></a>

```csharp
public string S3StorageClass { get; }
```

- *Type:* string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.subdirectory"></a>

```csharp
public string Subdirectory { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationS3Config <a name="DatasyncLocationS3Config" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatasyncLocationS3Config {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string S3BucketArn,
    DatasyncLocationS3S3Config S3Config,
    string Subdirectory,
    string[] AgentArns = null,
    string Id = null,
    string S3StorageClass = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.s3BucketArn">S3BucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.s3Config">S3Config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a></code> | s3_config block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.subdirectory">Subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#subdirectory DatasyncLocationS3#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.agentArns">AgentArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#agent_arns DatasyncLocationS3#agent_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#id DatasyncLocationS3#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.s3StorageClass">S3StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#s3_storage_class DatasyncLocationS3#s3_storage_class}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#tags DatasyncLocationS3#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#tags_all DatasyncLocationS3#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.s3BucketArn"></a>

```csharp
public string S3BucketArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}.

---

##### `S3Config`<sup>Required</sup> <a name="S3Config" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.s3Config"></a>

```csharp
public DatasyncLocationS3S3Config S3Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

s3_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#s3_config DatasyncLocationS3#s3_config}

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.subdirectory"></a>

```csharp
public string Subdirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#subdirectory DatasyncLocationS3#subdirectory}.

---

##### `AgentArns`<sup>Optional</sup> <a name="AgentArns" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.agentArns"></a>

```csharp
public string[] AgentArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#agent_arns DatasyncLocationS3#agent_arns}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#id DatasyncLocationS3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `S3StorageClass`<sup>Optional</sup> <a name="S3StorageClass" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.s3StorageClass"></a>

```csharp
public string S3StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#s3_storage_class DatasyncLocationS3#s3_storage_class}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#tags DatasyncLocationS3#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3Config.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#tags_all DatasyncLocationS3#tags_all}.

---

### DatasyncLocationS3S3Config <a name="DatasyncLocationS3S3Config" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatasyncLocationS3S3Config {
    string BucketAccessRoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config.property.bucketAccessRoleArn">BucketAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}. |

---

##### `BucketAccessRoleArn`<sup>Required</sup> <a name="BucketAccessRoleArn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config.property.bucketAccessRoleArn"></a>

```csharp
public string BucketAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationS3S3ConfigOutputReference <a name="DatasyncLocationS3S3ConfigOutputReference" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DatasyncLocationS3S3ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.bucketAccessRoleArnInput">BucketAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.bucketAccessRoleArn">BucketAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketAccessRoleArnInput`<sup>Optional</sup> <a name="BucketAccessRoleArnInput" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.bucketAccessRoleArnInput"></a>

```csharp
public string BucketAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `BucketAccessRoleArn`<sup>Required</sup> <a name="BucketAccessRoleArn" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.bucketAccessRoleArn"></a>

```csharp
public string BucketAccessRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3ConfigOutputReference.property.internalValue"></a>

```csharp
public DatasyncLocationS3S3Config InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationS3.DatasyncLocationS3S3Config">DatasyncLocationS3S3Config</a>

---




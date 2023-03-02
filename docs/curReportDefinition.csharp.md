# `curReportDefinition` Submodule <a name="`curReportDefinition` Submodule" id="@cdktf/provider-aws.curReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurReportDefinition <a name="CurReportDefinition" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition aws_cur_report_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CurReportDefinition(Construct Scope, string Id, CurReportDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig">CurReportDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig">CurReportDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts">ResetAdditionalArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetRefreshClosedReports">ResetRefreshClosedReports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetReportVersioning">ResetReportVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetS3Prefix">ResetS3Prefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAdditionalArtifacts` <a name="ResetAdditionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts"></a>

```csharp
private void ResetAdditionalArtifacts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRefreshClosedReports` <a name="ResetRefreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetRefreshClosedReports"></a>

```csharp
private void ResetRefreshClosedReports()
```

##### `ResetReportVersioning` <a name="ResetReportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetReportVersioning"></a>

```csharp
private void ResetReportVersioning()
```

##### `ResetS3Prefix` <a name="ResetS3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetS3Prefix"></a>

```csharp
private void ResetS3Prefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CurReportDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CurReportDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CurReportDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput">AdditionalArtifactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput">AdditionalSchemaElementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput">RefreshClosedReportsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportNameInput">ReportNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioningInput">ReportVersioningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3PrefixInput">S3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3RegionInput">S3RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnitInput">TimeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifacts">AdditionalArtifacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElements">AdditionalSchemaElements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReports">RefreshClosedReports</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportName">ReportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioning">ReportVersioning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Region">S3Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnit">TimeUnit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AdditionalArtifactsInput`<sup>Optional</sup> <a name="AdditionalArtifactsInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput"></a>

```csharp
public string[] AdditionalArtifactsInput { get; }
```

- *Type:* string[]

---

##### `AdditionalSchemaElementsInput`<sup>Optional</sup> <a name="AdditionalSchemaElementsInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput"></a>

```csharp
public string[] AdditionalSchemaElementsInput { get; }
```

- *Type:* string[]

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RefreshClosedReportsInput`<sup>Optional</sup> <a name="RefreshClosedReportsInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput"></a>

```csharp
public object RefreshClosedReportsInput { get; }
```

- *Type:* object

---

##### `ReportNameInput`<sup>Optional</sup> <a name="ReportNameInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportNameInput"></a>

```csharp
public string ReportNameInput { get; }
```

- *Type:* string

---

##### `ReportVersioningInput`<sup>Optional</sup> <a name="ReportVersioningInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioningInput"></a>

```csharp
public string ReportVersioningInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3PrefixInput`<sup>Optional</sup> <a name="S3PrefixInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3PrefixInput"></a>

```csharp
public string S3PrefixInput { get; }
```

- *Type:* string

---

##### `S3RegionInput`<sup>Optional</sup> <a name="S3RegionInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3RegionInput"></a>

```csharp
public string S3RegionInput { get; }
```

- *Type:* string

---

##### `TimeUnitInput`<sup>Optional</sup> <a name="TimeUnitInput" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnitInput"></a>

```csharp
public string TimeUnitInput { get; }
```

- *Type:* string

---

##### `AdditionalArtifacts`<sup>Required</sup> <a name="AdditionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifacts"></a>

```csharp
public string[] AdditionalArtifacts { get; }
```

- *Type:* string[]

---

##### `AdditionalSchemaElements`<sup>Required</sup> <a name="AdditionalSchemaElements" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElements"></a>

```csharp
public string[] AdditionalSchemaElements { get; }
```

- *Type:* string[]

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RefreshClosedReports`<sup>Required</sup> <a name="RefreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReports"></a>

```csharp
public object RefreshClosedReports { get; }
```

- *Type:* object

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportName"></a>

```csharp
public string ReportName { get; }
```

- *Type:* string

---

##### `ReportVersioning`<sup>Required</sup> <a name="ReportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioning"></a>

```csharp
public string ReportVersioning { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; }
```

- *Type:* string

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Region"></a>

```csharp
public string S3Region { get; }
```

- *Type:* string

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnit"></a>

```csharp
public string TimeUnit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CurReportDefinitionConfig <a name="CurReportDefinitionConfig" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CurReportDefinitionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AdditionalSchemaElements,
    string Compression,
    string Format,
    string ReportName,
    string S3Bucket,
    string S3Region,
    string TimeUnit,
    string[] AdditionalArtifacts = null,
    string Id = null,
    object RefreshClosedReports = null,
    string ReportVersioning = null,
    string S3Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements">AdditionalSchemaElements</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.compression">Compression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportName">ReportName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Region">S3Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.timeUnit">TimeUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts">AdditionalArtifacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports">RefreshClosedReports</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning">ReportVersioning</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdditionalSchemaElements`<sup>Required</sup> <a name="AdditionalSchemaElements" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements"></a>

```csharp
public string[] AdditionalSchemaElements { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}.

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}.

---

##### `ReportName`<sup>Required</sup> <a name="ReportName" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportName"></a>

```csharp
public string ReportName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}.

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}.

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Region"></a>

```csharp
public string S3Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}.

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.timeUnit"></a>

```csharp
public string TimeUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}.

---

##### `AdditionalArtifacts`<sup>Optional</sup> <a name="AdditionalArtifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts"></a>

```csharp
public string[] AdditionalArtifacts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshClosedReports`<sup>Optional</sup> <a name="RefreshClosedReports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports"></a>

```csharp
public object RefreshClosedReports { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}.

---

##### `ReportVersioning`<sup>Optional</sup> <a name="ReportVersioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning"></a>

```csharp
public string ReportVersioning { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}.

---

##### `S3Prefix`<sup>Optional</sup> <a name="S3Prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}.

---




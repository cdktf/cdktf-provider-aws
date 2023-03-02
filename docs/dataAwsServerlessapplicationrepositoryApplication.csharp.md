# `dataAwsServerlessapplicationrepositoryApplication` Submodule <a name="`dataAwsServerlessapplicationrepositoryApplication` Submodule" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServerlessapplicationrepositoryApplication <a name="DataAwsServerlessapplicationrepositoryApplication" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application aws_serverlessapplicationrepository_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServerlessapplicationrepositoryApplication(Construct Scope, string Id, DataAwsServerlessapplicationrepositoryApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig">DataAwsServerlessapplicationrepositoryApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig">DataAwsServerlessapplicationrepositoryApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetSemanticVersion">ResetSemanticVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSemanticVersion` <a name="ResetSemanticVersion" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetSemanticVersion"></a>

```csharp
private void ResetSemanticVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServerlessapplicationrepositoryApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServerlessapplicationrepositoryApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServerlessapplicationrepositoryApplication.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.requiredCapabilities">RequiredCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.sourceCodeUrl">SourceCodeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.templateUrl">TemplateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.semanticVersionInput">SemanticVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.semanticVersion">SemanticVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RequiredCapabilities`<sup>Required</sup> <a name="RequiredCapabilities" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.requiredCapabilities"></a>

```csharp
public string[] RequiredCapabilities { get; }
```

- *Type:* string[]

---

##### `SourceCodeUrl`<sup>Required</sup> <a name="SourceCodeUrl" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.sourceCodeUrl"></a>

```csharp
public string SourceCodeUrl { get; }
```

- *Type:* string

---

##### `TemplateUrl`<sup>Required</sup> <a name="TemplateUrl" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.templateUrl"></a>

```csharp
public string TemplateUrl { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SemanticVersionInput`<sup>Optional</sup> <a name="SemanticVersionInput" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.semanticVersionInput"></a>

```csharp
public string SemanticVersionInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SemanticVersion`<sup>Required</sup> <a name="SemanticVersion" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.semanticVersion"></a>

```csharp
public string SemanticVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServerlessapplicationrepositoryApplicationConfig <a name="DataAwsServerlessapplicationrepositoryApplicationConfig" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServerlessapplicationrepositoryApplicationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationId,
    string Id = null,
    string SemanticVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#application_id DataAwsServerlessapplicationrepositoryApplication#application_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#id DataAwsServerlessapplicationrepositoryApplication#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.semanticVersion">SemanticVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#semantic_version DataAwsServerlessapplicationrepositoryApplication#semantic_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#application_id DataAwsServerlessapplicationrepositoryApplication#application_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#id DataAwsServerlessapplicationrepositoryApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SemanticVersion`<sup>Optional</sup> <a name="SemanticVersion" id="@cdktf/provider-aws.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.semanticVersion"></a>

```csharp
public string SemanticVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application#semantic_version DataAwsServerlessapplicationrepositoryApplication#semantic_version}.

---




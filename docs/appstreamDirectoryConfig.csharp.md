# `appstreamDirectoryConfig` Submodule <a name="`appstreamDirectoryConfig` Submodule" id="@cdktf/provider-aws.appstreamDirectoryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamDirectoryConfig <a name="AppstreamDirectoryConfig" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config aws_appstream_directory_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamDirectoryConfig(Construct Scope, string Id, AppstreamDirectoryConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig">AppstreamDirectoryConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig">AppstreamDirectoryConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials">PutServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutServiceAccountCredentials` <a name="PutServiceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials"></a>

```csharp
private void PutServiceAccountCredentials(AppstreamDirectoryConfigServiceAccountCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppstreamDirectoryConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppstreamDirectoryConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppstreamDirectoryConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentials">ServiceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference">AppstreamDirectoryConfigServiceAccountCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryNameInput">DirectoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNamesInput">OrganizationalUnitDistinguishedNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentialsInput">ServiceAccountCredentialsInput</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryName">DirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNames">OrganizationalUnitDistinguishedNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `ServiceAccountCredentials`<sup>Required</sup> <a name="ServiceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentials"></a>

```csharp
public AppstreamDirectoryConfigServiceAccountCredentialsOutputReference ServiceAccountCredentials { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference">AppstreamDirectoryConfigServiceAccountCredentialsOutputReference</a>

---

##### `DirectoryNameInput`<sup>Optional</sup> <a name="DirectoryNameInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryNameInput"></a>

```csharp
public string DirectoryNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedNamesInput`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedNamesInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNamesInput"></a>

```csharp
public string[] OrganizationalUnitDistinguishedNamesInput { get; }
```

- *Type:* string[]

---

##### `ServiceAccountCredentialsInput`<sup>Optional</sup> <a name="ServiceAccountCredentialsInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentialsInput"></a>

```csharp
public AppstreamDirectoryConfigServiceAccountCredentials ServiceAccountCredentialsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryName"></a>

```csharp
public string DirectoryName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedNames`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedNames" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNames"></a>

```csharp
public string[] OrganizationalUnitDistinguishedNames { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamDirectoryConfigConfig <a name="AppstreamDirectoryConfigConfig" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamDirectoryConfigConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DirectoryName,
    string[] OrganizationalUnitDistinguishedNames,
    AppstreamDirectoryConfigServiceAccountCredentials ServiceAccountCredentials,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.directoryName">DirectoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.organizationalUnitDistinguishedNames">OrganizationalUnitDistinguishedNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.serviceAccountCredentials">ServiceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | service_account_credentials block. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#id AppstreamDirectoryConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.directoryName"></a>

```csharp
public string DirectoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}.

---

##### `OrganizationalUnitDistinguishedNames`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedNames" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.organizationalUnitDistinguishedNames"></a>

```csharp
public string[] OrganizationalUnitDistinguishedNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}.

---

##### `ServiceAccountCredentials`<sup>Required</sup> <a name="ServiceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.serviceAccountCredentials"></a>

```csharp
public AppstreamDirectoryConfigServiceAccountCredentials ServiceAccountCredentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

service_account_credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#service_account_credentials AppstreamDirectoryConfig#service_account_credentials}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#id AppstreamDirectoryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AppstreamDirectoryConfigServiceAccountCredentials <a name="AppstreamDirectoryConfigServiceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamDirectoryConfigServiceAccountCredentials {
    string AccountName,
    string AccountPassword
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_name AppstreamDirectoryConfig#account_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountPassword">AccountPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_password AppstreamDirectoryConfig#account_password}. |

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_name AppstreamDirectoryConfig#account_name}.

---

##### `AccountPassword`<sup>Required</sup> <a name="AccountPassword" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountPassword"></a>

```csharp
public string AccountPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_password AppstreamDirectoryConfig#account_password}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamDirectoryConfigServiceAccountCredentialsOutputReference <a name="AppstreamDirectoryConfigServiceAccountCredentialsOutputReference" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppstreamDirectoryConfigServiceAccountCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPasswordInput">AccountPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPassword">AccountPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `AccountPasswordInput`<sup>Optional</sup> <a name="AccountPasswordInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPasswordInput"></a>

```csharp
public string AccountPasswordInput { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `AccountPassword`<sup>Required</sup> <a name="AccountPassword" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPassword"></a>

```csharp
public string AccountPassword { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.internalValue"></a>

```csharp
public AppstreamDirectoryConfigServiceAccountCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---




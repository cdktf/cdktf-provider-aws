# `opsworksApplication` Submodule <a name="`opsworksApplication` Submodule" id="@cdktf/provider-aws.opsworksApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksApplication <a name="OpsworksApplication" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application aws_opsworks_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksApplication(Construct Scope, string Id, OpsworksApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig">OpsworksApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig">OpsworksApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putAppSource">PutAppSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putSslConfiguration">PutSslConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAppSource">ResetAppSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAutoBundleOnDeploy">ResetAutoBundleOnDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAwsFlowRubySettings">ResetAwsFlowRubySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceArn">ResetDataSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceDatabaseName">ResetDataSourceDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceType">ResetDataSourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDocumentRoot">ResetDocumentRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnableSsl">ResetEnableSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetRailsEnv">ResetRailsEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetShortName">ResetShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetSslConfiguration">ResetSslConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAppSource` <a name="PutAppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putAppSource"></a>

```csharp
private void PutAppSource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putAppSource.parameter.value"></a>

- *Type:* object

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putEnvironment"></a>

```csharp
private void PutEnvironment(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putEnvironment.parameter.value"></a>

- *Type:* object

---

##### `PutSslConfiguration` <a name="PutSslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putSslConfiguration"></a>

```csharp
private void PutSslConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putSslConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetAppSource` <a name="ResetAppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAppSource"></a>

```csharp
private void ResetAppSource()
```

##### `ResetAutoBundleOnDeploy` <a name="ResetAutoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAutoBundleOnDeploy"></a>

```csharp
private void ResetAutoBundleOnDeploy()
```

##### `ResetAwsFlowRubySettings` <a name="ResetAwsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAwsFlowRubySettings"></a>

```csharp
private void ResetAwsFlowRubySettings()
```

##### `ResetDataSourceArn` <a name="ResetDataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceArn"></a>

```csharp
private void ResetDataSourceArn()
```

##### `ResetDataSourceDatabaseName` <a name="ResetDataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceDatabaseName"></a>

```csharp
private void ResetDataSourceDatabaseName()
```

##### `ResetDataSourceType` <a name="ResetDataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceType"></a>

```csharp
private void ResetDataSourceType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDocumentRoot` <a name="ResetDocumentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDocumentRoot"></a>

```csharp
private void ResetDocumentRoot()
```

##### `ResetDomains` <a name="ResetDomains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDomains"></a>

```csharp
private void ResetDomains()
```

##### `ResetEnableSsl` <a name="ResetEnableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnableSsl"></a>

```csharp
private void ResetEnableSsl()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRailsEnv` <a name="ResetRailsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetRailsEnv"></a>

```csharp
private void ResetRailsEnv()
```

##### `ResetShortName` <a name="ResetShortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetShortName"></a>

```csharp
private void ResetShortName()
```

##### `ResetSslConfiguration` <a name="ResetSslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetSslConfiguration"></a>

```csharp
private void ResetSslConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSource">AppSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList">OpsworksApplicationAppSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList">OpsworksApplicationEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfiguration">SslConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList">OpsworksApplicationSslConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSourceInput">AppSourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeployInput">AutoBundleOnDeployInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettingsInput">AwsFlowRubySettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArnInput">DataSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseNameInput">DataSourceDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceTypeInput">DataSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRootInput">DocumentRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSslInput">EnableSslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environmentInput">EnvironmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnvInput">RailsEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortNameInput">ShortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfigurationInput">SslConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackIdInput">StackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeploy">AutoBundleOnDeploy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettings">AwsFlowRubySettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseName">DataSourceDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceType">DataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRoot">DocumentRoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSsl">EnableSsl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnv">RailsEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortName">ShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackId">StackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AppSource`<sup>Required</sup> <a name="AppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSource"></a>

```csharp
public OpsworksApplicationAppSourceList AppSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList">OpsworksApplicationAppSourceList</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environment"></a>

```csharp
public OpsworksApplicationEnvironmentList Environment { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList">OpsworksApplicationEnvironmentList</a>

---

##### `SslConfiguration`<sup>Required</sup> <a name="SslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfiguration"></a>

```csharp
public OpsworksApplicationSslConfigurationList SslConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList">OpsworksApplicationSslConfigurationList</a>

---

##### `AppSourceInput`<sup>Optional</sup> <a name="AppSourceInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSourceInput"></a>

```csharp
public object AppSourceInput { get; }
```

- *Type:* object

---

##### `AutoBundleOnDeployInput`<sup>Optional</sup> <a name="AutoBundleOnDeployInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeployInput"></a>

```csharp
public string AutoBundleOnDeployInput { get; }
```

- *Type:* string

---

##### `AwsFlowRubySettingsInput`<sup>Optional</sup> <a name="AwsFlowRubySettingsInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettingsInput"></a>

```csharp
public string AwsFlowRubySettingsInput { get; }
```

- *Type:* string

---

##### `DataSourceArnInput`<sup>Optional</sup> <a name="DataSourceArnInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArnInput"></a>

```csharp
public string DataSourceArnInput { get; }
```

- *Type:* string

---

##### `DataSourceDatabaseNameInput`<sup>Optional</sup> <a name="DataSourceDatabaseNameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseNameInput"></a>

```csharp
public string DataSourceDatabaseNameInput { get; }
```

- *Type:* string

---

##### `DataSourceTypeInput`<sup>Optional</sup> <a name="DataSourceTypeInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceTypeInput"></a>

```csharp
public string DataSourceTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DocumentRootInput`<sup>Optional</sup> <a name="DocumentRootInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRootInput"></a>

```csharp
public string DocumentRootInput { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `EnableSslInput`<sup>Optional</sup> <a name="EnableSslInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSslInput"></a>

```csharp
public object EnableSslInput { get; }
```

- *Type:* object

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environmentInput"></a>

```csharp
public object EnvironmentInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RailsEnvInput`<sup>Optional</sup> <a name="RailsEnvInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnvInput"></a>

```csharp
public string RailsEnvInput { get; }
```

- *Type:* string

---

##### `ShortNameInput`<sup>Optional</sup> <a name="ShortNameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortNameInput"></a>

```csharp
public string ShortNameInput { get; }
```

- *Type:* string

---

##### `SslConfigurationInput`<sup>Optional</sup> <a name="SslConfigurationInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfigurationInput"></a>

```csharp
public object SslConfigurationInput { get; }
```

- *Type:* object

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackIdInput"></a>

```csharp
public string StackIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AutoBundleOnDeploy`<sup>Required</sup> <a name="AutoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeploy"></a>

```csharp
public string AutoBundleOnDeploy { get; }
```

- *Type:* string

---

##### `AwsFlowRubySettings`<sup>Required</sup> <a name="AwsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettings"></a>

```csharp
public string AwsFlowRubySettings { get; }
```

- *Type:* string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; }
```

- *Type:* string

---

##### `DataSourceDatabaseName`<sup>Required</sup> <a name="DataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseName"></a>

```csharp
public string DataSourceDatabaseName { get; }
```

- *Type:* string

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceType"></a>

```csharp
public string DataSourceType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DocumentRoot`<sup>Required</sup> <a name="DocumentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRoot"></a>

```csharp
public string DocumentRoot { get; }
```

- *Type:* string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `EnableSsl`<sup>Required</sup> <a name="EnableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSsl"></a>

```csharp
public object EnableSsl { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RailsEnv`<sup>Required</sup> <a name="RailsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnv"></a>

```csharp
public string RailsEnv { get; }
```

- *Type:* string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortName"></a>

```csharp
public string ShortName { get; }
```

- *Type:* string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackId"></a>

```csharp
public string StackId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksApplicationAppSource <a name="OpsworksApplicationAppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksApplicationAppSource {
    string Type,
    string Password = null,
    string Revision = null,
    string SshKey = null,
    string Url = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#password OpsworksApplication#password}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.revision">Revision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#revision OpsworksApplication#revision}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.sshKey">SshKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssh_key OpsworksApplication#ssh_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#url OpsworksApplication#url}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#username OpsworksApplication#username}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#password OpsworksApplication#password}.

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.revision"></a>

```csharp
public string Revision { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#revision OpsworksApplication#revision}.

---

##### `SshKey`<sup>Optional</sup> <a name="SshKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.sshKey"></a>

```csharp
public string SshKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssh_key OpsworksApplication#ssh_key}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#url OpsworksApplication#url}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#username OpsworksApplication#username}.

---

### OpsworksApplicationConfig <a name="OpsworksApplicationConfig" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksApplicationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string StackId,
    string Type,
    object AppSource = null,
    string AutoBundleOnDeploy = null,
    string AwsFlowRubySettings = null,
    string DataSourceArn = null,
    string DataSourceDatabaseName = null,
    string DataSourceType = null,
    string Description = null,
    string DocumentRoot = null,
    string[] Domains = null,
    object EnableSsl = null,
    object Environment = null,
    string Id = null,
    string RailsEnv = null,
    string ShortName = null,
    object SslConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#name OpsworksApplication#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.stackId">StackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#stack_id OpsworksApplication#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.appSource">AppSource</a></code> | <code>object</code> | app_source block. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.autoBundleOnDeploy">AutoBundleOnDeploy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.awsFlowRubySettings">AwsFlowRubySettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_arn OpsworksApplication#data_source_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceDatabaseName">DataSourceDatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_database_name OpsworksApplication#data_source_database_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceType">DataSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_type OpsworksApplication#data_source_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#description OpsworksApplication#description}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.documentRoot">DocumentRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#document_root OpsworksApplication#document_root}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.domains">Domains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#domains OpsworksApplication#domains}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.enableSsl">EnableSsl</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#enable_ssl OpsworksApplication#enable_ssl}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.environment">Environment</a></code> | <code>object</code> | environment block. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#id OpsworksApplication#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.railsEnv">RailsEnv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#rails_env OpsworksApplication#rails_env}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.shortName">ShortName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#short_name OpsworksApplication#short_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.sslConfiguration">SslConfiguration</a></code> | <code>object</code> | ssl_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#name OpsworksApplication#name}.

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.stackId"></a>

```csharp
public string StackId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#stack_id OpsworksApplication#stack_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}.

---

##### `AppSource`<sup>Optional</sup> <a name="AppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.appSource"></a>

```csharp
public object AppSource { get; set; }
```

- *Type:* object

app_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#app_source OpsworksApplication#app_source}

---

##### `AutoBundleOnDeploy`<sup>Optional</sup> <a name="AutoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.autoBundleOnDeploy"></a>

```csharp
public string AutoBundleOnDeploy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}.

---

##### `AwsFlowRubySettings`<sup>Optional</sup> <a name="AwsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.awsFlowRubySettings"></a>

```csharp
public string AwsFlowRubySettings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}.

---

##### `DataSourceArn`<sup>Optional</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_arn OpsworksApplication#data_source_arn}.

---

##### `DataSourceDatabaseName`<sup>Optional</sup> <a name="DataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceDatabaseName"></a>

```csharp
public string DataSourceDatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_database_name OpsworksApplication#data_source_database_name}.

---

##### `DataSourceType`<sup>Optional</sup> <a name="DataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceType"></a>

```csharp
public string DataSourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_type OpsworksApplication#data_source_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#description OpsworksApplication#description}.

---

##### `DocumentRoot`<sup>Optional</sup> <a name="DocumentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.documentRoot"></a>

```csharp
public string DocumentRoot { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#document_root OpsworksApplication#document_root}.

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#domains OpsworksApplication#domains}.

---

##### `EnableSsl`<sup>Optional</sup> <a name="EnableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.enableSsl"></a>

```csharp
public object EnableSsl { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#enable_ssl OpsworksApplication#enable_ssl}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.environment"></a>

```csharp
public object Environment { get; set; }
```

- *Type:* object

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#environment OpsworksApplication#environment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#id OpsworksApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RailsEnv`<sup>Optional</sup> <a name="RailsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.railsEnv"></a>

```csharp
public string RailsEnv { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#rails_env OpsworksApplication#rails_env}.

---

##### `ShortName`<sup>Optional</sup> <a name="ShortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.shortName"></a>

```csharp
public string ShortName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#short_name OpsworksApplication#short_name}.

---

##### `SslConfiguration`<sup>Optional</sup> <a name="SslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.sslConfiguration"></a>

```csharp
public object SslConfiguration { get; set; }
```

- *Type:* object

ssl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssl_configuration OpsworksApplication#ssl_configuration}

---

### OpsworksApplicationEnvironment <a name="OpsworksApplicationEnvironment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksApplicationEnvironment {
    string Key,
    string Value,
    object Secure = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#key OpsworksApplication#key}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#value OpsworksApplication#value}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.secure">Secure</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#secure OpsworksApplication#secure}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#key OpsworksApplication#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#value OpsworksApplication#value}.

---

##### `Secure`<sup>Optional</sup> <a name="Secure" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.secure"></a>

```csharp
public object Secure { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#secure OpsworksApplication#secure}.

---

### OpsworksApplicationSslConfiguration <a name="OpsworksApplicationSslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksApplicationSslConfiguration {
    string Certificate,
    string PrivateKey,
    string Chain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#certificate OpsworksApplication#certificate}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#private_key OpsworksApplication#private_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.chain">Chain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#chain OpsworksApplication#chain}. |

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#certificate OpsworksApplication#certificate}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#private_key OpsworksApplication#private_key}.

---

##### `Chain`<sup>Optional</sup> <a name="Chain" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.chain"></a>

```csharp
public string Chain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#chain OpsworksApplication#chain}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksApplicationAppSourceList <a name="OpsworksApplicationAppSourceList" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksApplicationAppSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.get"></a>

```csharp
private OpsworksApplicationAppSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksApplicationAppSourceOutputReference <a name="OpsworksApplicationAppSourceOutputReference" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksApplicationAppSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetSshKey">ResetSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```

##### `ResetSshKey` <a name="ResetSshKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetSshKey"></a>

```csharp
private void ResetSshKey()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revisionInput">RevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKeyInput">SshKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKey">SshKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revisionInput"></a>

```csharp
public string RevisionInput { get; }
```

- *Type:* string

---

##### `SshKeyInput`<sup>Optional</sup> <a name="SshKeyInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKeyInput"></a>

```csharp
public string SshKeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `SshKey`<sup>Required</sup> <a name="SshKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKey"></a>

```csharp
public string SshKey { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksApplicationEnvironmentList <a name="OpsworksApplicationEnvironmentList" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksApplicationEnvironmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.get"></a>

```csharp
private OpsworksApplicationEnvironmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksApplicationEnvironmentOutputReference <a name="OpsworksApplicationEnvironmentOutputReference" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksApplicationEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resetSecure">ResetSecure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecure` <a name="ResetSecure" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resetSecure"></a>

```csharp
private void ResetSecure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secureInput">SecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secure">Secure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `SecureInput`<sup>Optional</sup> <a name="SecureInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secureInput"></a>

```csharp
public object SecureInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secure"></a>

```csharp
public object Secure { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksApplicationSslConfigurationList <a name="OpsworksApplicationSslConfigurationList" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksApplicationSslConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.get"></a>

```csharp
private OpsworksApplicationSslConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OpsworksApplicationSslConfigurationOutputReference <a name="OpsworksApplicationSslConfigurationOutputReference" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksApplicationSslConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resetChain">ResetChain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChain` <a name="ResetChain" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resetChain"></a>

```csharp
private void ResetChain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chainInput">ChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chain">Chain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `ChainInput`<sup>Optional</sup> <a name="ChainInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chainInput"></a>

```csharp
public string ChainInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `Chain`<sup>Required</sup> <a name="Chain" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chain"></a>

```csharp
public string Chain { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




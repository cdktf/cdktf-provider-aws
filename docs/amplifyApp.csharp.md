# `amplifyApp` Submodule <a name="`amplifyApp` Submodule" id="@cdktf/provider-aws.amplifyApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyApp <a name="AmplifyApp" id="@cdktf/provider-aws.amplifyApp.AmplifyApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_app aws_amplify_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmplifyApp(Construct Scope, string Id, AmplifyAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig">AmplifyAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig">AmplifyAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig">PutAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.putCustomRule">PutCustomRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig">ResetAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAutoBranchCreationPatterns">ResetAutoBranchCreationPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetBasicAuthCredentials">ResetBasicAuthCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetBuildSpec">ResetBuildSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetCustomRule">ResetCustomRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableAutoBranchCreation">ResetEnableAutoBranchCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBasicAuth">ResetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBranchAutoBuild">ResetEnableBranchAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion">ResetEnableBranchAutoDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetIamServiceRoleArn">ResetIamServiceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetOauthToken">ResetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutoBranchCreationConfig` <a name="PutAutoBranchCreationConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig"></a>

```csharp
private void PutAutoBranchCreationConfig(AmplifyAppAutoBranchCreationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---

##### `PutCustomRule` <a name="PutCustomRule" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putCustomRule"></a>

```csharp
private void PutCustomRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putCustomRule.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetAutoBranchCreationConfig` <a name="ResetAutoBranchCreationConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig"></a>

```csharp
private void ResetAutoBranchCreationConfig()
```

##### `ResetAutoBranchCreationPatterns` <a name="ResetAutoBranchCreationPatterns" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAutoBranchCreationPatterns"></a>

```csharp
private void ResetAutoBranchCreationPatterns()
```

##### `ResetBasicAuthCredentials` <a name="ResetBasicAuthCredentials" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetBasicAuthCredentials"></a>

```csharp
private void ResetBasicAuthCredentials()
```

##### `ResetBuildSpec` <a name="ResetBuildSpec" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetBuildSpec"></a>

```csharp
private void ResetBuildSpec()
```

##### `ResetCustomRule` <a name="ResetCustomRule" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetCustomRule"></a>

```csharp
private void ResetCustomRule()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableAutoBranchCreation` <a name="ResetEnableAutoBranchCreation" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableAutoBranchCreation"></a>

```csharp
private void ResetEnableAutoBranchCreation()
```

##### `ResetEnableBasicAuth` <a name="ResetEnableBasicAuth" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBasicAuth"></a>

```csharp
private void ResetEnableBasicAuth()
```

##### `ResetEnableBranchAutoBuild` <a name="ResetEnableBranchAutoBuild" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBranchAutoBuild"></a>

```csharp
private void ResetEnableBranchAutoBuild()
```

##### `ResetEnableBranchAutoDeletion` <a name="ResetEnableBranchAutoDeletion" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion"></a>

```csharp
private void ResetEnableBranchAutoDeletion()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetIamServiceRoleArn` <a name="ResetIamServiceRoleArn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetIamServiceRoleArn"></a>

```csharp
private void ResetIamServiceRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetOauthToken"></a>

```csharp
private void ResetOauthToken()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetPlatform"></a>

```csharp
private void ResetPlatform()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetRepository"></a>

```csharp
private void ResetRepository()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AmplifyApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AmplifyApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AmplifyApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationConfig">AutoBranchCreationConfig</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.customRule">CustomRule</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList">AmplifyAppCustomRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.defaultDomain">DefaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.productionBranch">ProductionBranch</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList">AmplifyAppProductionBranchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput">AutoBranchCreationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationPatternsInput">AutoBranchCreationPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.basicAuthCredentialsInput">BasicAuthCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.buildSpecInput">BuildSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.customRuleInput">CustomRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableAutoBranchCreationInput">EnableAutoBranchCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBasicAuthInput">EnableBasicAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoBuildInput">EnableBranchAutoBuildInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput">EnableBranchAutoDeletionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.iamServiceRoleArnInput">IamServiceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.oauthTokenInput">OauthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationPatterns">AutoBranchCreationPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.basicAuthCredentials">BasicAuthCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.buildSpec">BuildSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableAutoBranchCreation">EnableAutoBranchCreation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoBuild">EnableBranchAutoBuild</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion">EnableBranchAutoDeletion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.iamServiceRoleArn">IamServiceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.oauthToken">OauthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoBranchCreationConfig`<sup>Required</sup> <a name="AutoBranchCreationConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationConfig"></a>

```csharp
public AmplifyAppAutoBranchCreationConfigOutputReference AutoBranchCreationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a>

---

##### `CustomRule`<sup>Required</sup> <a name="CustomRule" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.customRule"></a>

```csharp
public AmplifyAppCustomRuleList CustomRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList">AmplifyAppCustomRuleList</a>

---

##### `DefaultDomain`<sup>Required</sup> <a name="DefaultDomain" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.defaultDomain"></a>

```csharp
public string DefaultDomain { get; }
```

- *Type:* string

---

##### `ProductionBranch`<sup>Required</sup> <a name="ProductionBranch" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.productionBranch"></a>

```csharp
public AmplifyAppProductionBranchList ProductionBranch { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList">AmplifyAppProductionBranchList</a>

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `AutoBranchCreationConfigInput`<sup>Optional</sup> <a name="AutoBranchCreationConfigInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput"></a>

```csharp
public AmplifyAppAutoBranchCreationConfig AutoBranchCreationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---

##### `AutoBranchCreationPatternsInput`<sup>Optional</sup> <a name="AutoBranchCreationPatternsInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationPatternsInput"></a>

```csharp
public string[] AutoBranchCreationPatternsInput { get; }
```

- *Type:* string[]

---

##### `BasicAuthCredentialsInput`<sup>Optional</sup> <a name="BasicAuthCredentialsInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.basicAuthCredentialsInput"></a>

```csharp
public string BasicAuthCredentialsInput { get; }
```

- *Type:* string

---

##### `BuildSpecInput`<sup>Optional</sup> <a name="BuildSpecInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.buildSpecInput"></a>

```csharp
public string BuildSpecInput { get; }
```

- *Type:* string

---

##### `CustomRuleInput`<sup>Optional</sup> <a name="CustomRuleInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.customRuleInput"></a>

```csharp
public object CustomRuleInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableAutoBranchCreationInput`<sup>Optional</sup> <a name="EnableAutoBranchCreationInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableAutoBranchCreationInput"></a>

```csharp
public object EnableAutoBranchCreationInput { get; }
```

- *Type:* object

---

##### `EnableBasicAuthInput`<sup>Optional</sup> <a name="EnableBasicAuthInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBasicAuthInput"></a>

```csharp
public object EnableBasicAuthInput { get; }
```

- *Type:* object

---

##### `EnableBranchAutoBuildInput`<sup>Optional</sup> <a name="EnableBranchAutoBuildInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoBuildInput"></a>

```csharp
public object EnableBranchAutoBuildInput { get; }
```

- *Type:* object

---

##### `EnableBranchAutoDeletionInput`<sup>Optional</sup> <a name="EnableBranchAutoDeletionInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput"></a>

```csharp
public object EnableBranchAutoDeletionInput { get; }
```

- *Type:* object

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IamServiceRoleArnInput`<sup>Optional</sup> <a name="IamServiceRoleArnInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.iamServiceRoleArnInput"></a>

```csharp
public string IamServiceRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.oauthTokenInput"></a>

```csharp
public string OauthTokenInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `AutoBranchCreationPatterns`<sup>Required</sup> <a name="AutoBranchCreationPatterns" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationPatterns"></a>

```csharp
public string[] AutoBranchCreationPatterns { get; }
```

- *Type:* string[]

---

##### `BasicAuthCredentials`<sup>Required</sup> <a name="BasicAuthCredentials" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.basicAuthCredentials"></a>

```csharp
public string BasicAuthCredentials { get; }
```

- *Type:* string

---

##### `BuildSpec`<sup>Required</sup> <a name="BuildSpec" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.buildSpec"></a>

```csharp
public string BuildSpec { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableAutoBranchCreation`<sup>Required</sup> <a name="EnableAutoBranchCreation" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableAutoBranchCreation"></a>

```csharp
public object EnableAutoBranchCreation { get; }
```

- *Type:* object

---

##### `EnableBasicAuth`<sup>Required</sup> <a name="EnableBasicAuth" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBasicAuth"></a>

```csharp
public object EnableBasicAuth { get; }
```

- *Type:* object

---

##### `EnableBranchAutoBuild`<sup>Required</sup> <a name="EnableBranchAutoBuild" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoBuild"></a>

```csharp
public object EnableBranchAutoBuild { get; }
```

- *Type:* object

---

##### `EnableBranchAutoDeletion`<sup>Required</sup> <a name="EnableBranchAutoDeletion" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion"></a>

```csharp
public object EnableBranchAutoDeletion { get; }
```

- *Type:* object

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IamServiceRoleArn`<sup>Required</sup> <a name="IamServiceRoleArn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.iamServiceRoleArn"></a>

```csharp
public string IamServiceRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.oauthToken"></a>

```csharp
public string OauthToken { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyAppAutoBranchCreationConfig <a name="AmplifyAppAutoBranchCreationConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmplifyAppAutoBranchCreationConfig {
    string BasicAuthCredentials = null,
    string BuildSpec = null,
    object EnableAutoBuild = null,
    object EnableBasicAuth = null,
    object EnablePerformanceMode = null,
    object EnablePullRequestPreview = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    string Framework = null,
    string PullRequestEnvironmentName = null,
    string Stage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthCredentials">BasicAuthCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec">BuildSpec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild">EnableAutoBuild</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode">EnablePerformanceMode</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview">EnablePullRequestPreview</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework">Framework</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#framework AmplifyApp#framework}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName">PullRequestEnvironmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage">Stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#stage AmplifyApp#stage}. |

---

##### `BasicAuthCredentials`<sup>Optional</sup> <a name="BasicAuthCredentials" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthCredentials"></a>

```csharp
public string BasicAuthCredentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}.

---

##### `BuildSpec`<sup>Optional</sup> <a name="BuildSpec" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec"></a>

```csharp
public string BuildSpec { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `EnableAutoBuild`<sup>Optional</sup> <a name="EnableAutoBuild" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild"></a>

```csharp
public object EnableAutoBuild { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}.

---

##### `EnableBasicAuth`<sup>Optional</sup> <a name="EnableBasicAuth" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableBasicAuth"></a>

```csharp
public object EnableBasicAuth { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `EnablePerformanceMode`<sup>Optional</sup> <a name="EnablePerformanceMode" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode"></a>

```csharp
public object EnablePerformanceMode { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}.

---

##### `EnablePullRequestPreview`<sup>Optional</sup> <a name="EnablePullRequestPreview" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview"></a>

```csharp
public object EnablePullRequestPreview { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `Framework`<sup>Optional</sup> <a name="Framework" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework"></a>

```csharp
public string Framework { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#framework AmplifyApp#framework}.

---

##### `PullRequestEnvironmentName`<sup>Optional</sup> <a name="PullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName"></a>

```csharp
public string PullRequestEnvironmentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage"></a>

```csharp
public string Stage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#stage AmplifyApp#stage}.

---

### AmplifyAppConfig <a name="AmplifyAppConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmplifyAppConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string AccessToken = null,
    AmplifyAppAutoBranchCreationConfig AutoBranchCreationConfig = null,
    string[] AutoBranchCreationPatterns = null,
    string BasicAuthCredentials = null,
    string BuildSpec = null,
    object CustomRule = null,
    string Description = null,
    object EnableAutoBranchCreation = null,
    object EnableBasicAuth = null,
    object EnableBranchAutoBuild = null,
    object EnableBranchAutoDeletion = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    string IamServiceRoleArn = null,
    string Id = null,
    string OauthToken = null,
    string Platform = null,
    string Repository = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#access_token AmplifyApp#access_token}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig">AutoBranchCreationConfig</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | auto_branch_creation_config block. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.autoBranchCreationPatterns">AutoBranchCreationPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.basicAuthCredentials">BasicAuthCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.buildSpec">BuildSpec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.customRule">CustomRule</a></code> | <code>object</code> | custom_rule block. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#description AmplifyApp#description}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableAutoBranchCreation">EnableAutoBranchCreation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBranchAutoBuild">EnableBranchAutoBuild</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_build AmplifyApp#enable_branch_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion">EnableBranchAutoDeletion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.iamServiceRoleArn">IamServiceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#iam_service_role_arn AmplifyApp#iam_service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#id AmplifyApp#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.oauthToken">OauthToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#oauth_token AmplifyApp#oauth_token}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.platform">Platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#platform AmplifyApp#platform}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.repository">Repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#repository AmplifyApp#repository}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags AmplifyApp#tags}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags_all AmplifyApp#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#name AmplifyApp#name}.

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#access_token AmplifyApp#access_token}.

---

##### `AutoBranchCreationConfig`<sup>Optional</sup> <a name="AutoBranchCreationConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig"></a>

```csharp
public AmplifyAppAutoBranchCreationConfig AutoBranchCreationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

auto_branch_creation_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}

---

##### `AutoBranchCreationPatterns`<sup>Optional</sup> <a name="AutoBranchCreationPatterns" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.autoBranchCreationPatterns"></a>

```csharp
public string[] AutoBranchCreationPatterns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}.

---

##### `BasicAuthCredentials`<sup>Optional</sup> <a name="BasicAuthCredentials" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.basicAuthCredentials"></a>

```csharp
public string BasicAuthCredentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}.

---

##### `BuildSpec`<sup>Optional</sup> <a name="BuildSpec" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.buildSpec"></a>

```csharp
public string BuildSpec { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `CustomRule`<sup>Optional</sup> <a name="CustomRule" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.customRule"></a>

```csharp
public object CustomRule { get; set; }
```

- *Type:* object

custom_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#custom_rule AmplifyApp#custom_rule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#description AmplifyApp#description}.

---

##### `EnableAutoBranchCreation`<sup>Optional</sup> <a name="EnableAutoBranchCreation" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableAutoBranchCreation"></a>

```csharp
public object EnableAutoBranchCreation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}.

---

##### `EnableBasicAuth`<sup>Optional</sup> <a name="EnableBasicAuth" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBasicAuth"></a>

```csharp
public object EnableBasicAuth { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `EnableBranchAutoBuild`<sup>Optional</sup> <a name="EnableBranchAutoBuild" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBranchAutoBuild"></a>

```csharp
public object EnableBranchAutoBuild { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_build AmplifyApp#enable_branch_auto_build}.

---

##### `EnableBranchAutoDeletion`<sup>Optional</sup> <a name="EnableBranchAutoDeletion" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion"></a>

```csharp
public object EnableBranchAutoDeletion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `IamServiceRoleArn`<sup>Optional</sup> <a name="IamServiceRoleArn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.iamServiceRoleArn"></a>

```csharp
public string IamServiceRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#iam_service_role_arn AmplifyApp#iam_service_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#id AmplifyApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.oauthToken"></a>

```csharp
public string OauthToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#oauth_token AmplifyApp#oauth_token}.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#platform AmplifyApp#platform}.

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#repository AmplifyApp#repository}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags AmplifyApp#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags_all AmplifyApp#tags_all}.

---

### AmplifyAppCustomRule <a name="AmplifyAppCustomRule" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmplifyAppCustomRule {
    string Source,
    string Target,
    string Condition = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#source AmplifyApp#source}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#target AmplifyApp#target}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#condition AmplifyApp#condition}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#status AmplifyApp#status}. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#source AmplifyApp#source}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#target AmplifyApp#target}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#condition AmplifyApp#condition}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#status AmplifyApp#status}.

---

### AmplifyAppProductionBranch <a name="AmplifyAppProductionBranch" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmplifyAppProductionBranch {

};
```


## Classes <a name="Classes" id="Classes"></a>

### AmplifyAppAutoBranchCreationConfigOutputReference <a name="AmplifyAppAutoBranchCreationConfigOutputReference" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmplifyAppAutoBranchCreationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthCredentials">ResetBasicAuthCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec">ResetBuildSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild">ResetEnableAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableBasicAuth">ResetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode">ResetEnablePerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview">ResetEnablePullRequestPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework">ResetFramework</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName">ResetPullRequestEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage">ResetStage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBasicAuthCredentials` <a name="ResetBasicAuthCredentials" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthCredentials"></a>

```csharp
private void ResetBasicAuthCredentials()
```

##### `ResetBuildSpec` <a name="ResetBuildSpec" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec"></a>

```csharp
private void ResetBuildSpec()
```

##### `ResetEnableAutoBuild` <a name="ResetEnableAutoBuild" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild"></a>

```csharp
private void ResetEnableAutoBuild()
```

##### `ResetEnableBasicAuth` <a name="ResetEnableBasicAuth" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableBasicAuth"></a>

```csharp
private void ResetEnableBasicAuth()
```

##### `ResetEnablePerformanceMode` <a name="ResetEnablePerformanceMode" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode"></a>

```csharp
private void ResetEnablePerformanceMode()
```

##### `ResetEnablePullRequestPreview` <a name="ResetEnablePullRequestPreview" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview"></a>

```csharp
private void ResetEnablePullRequestPreview()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetFramework` <a name="ResetFramework" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework"></a>

```csharp
private void ResetFramework()
```

##### `ResetPullRequestEnvironmentName` <a name="ResetPullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName"></a>

```csharp
private void ResetPullRequestEnvironmentName()
```

##### `ResetStage` <a name="ResetStage" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage"></a>

```csharp
private void ResetStage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthCredentialsInput">BasicAuthCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput">BuildSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput">EnableAutoBuildInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableBasicAuthInput">EnableBasicAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput">EnablePerformanceModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput">EnablePullRequestPreviewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput">PullRequestEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput">StageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthCredentials">BasicAuthCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec">BuildSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild">EnableAutoBuild</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode">EnablePerformanceMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview">EnablePullRequestPreview</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework">Framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName">PullRequestEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicAuthCredentialsInput`<sup>Optional</sup> <a name="BasicAuthCredentialsInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthCredentialsInput"></a>

```csharp
public string BasicAuthCredentialsInput { get; }
```

- *Type:* string

---

##### `BuildSpecInput`<sup>Optional</sup> <a name="BuildSpecInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput"></a>

```csharp
public string BuildSpecInput { get; }
```

- *Type:* string

---

##### `EnableAutoBuildInput`<sup>Optional</sup> <a name="EnableAutoBuildInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput"></a>

```csharp
public object EnableAutoBuildInput { get; }
```

- *Type:* object

---

##### `EnableBasicAuthInput`<sup>Optional</sup> <a name="EnableBasicAuthInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableBasicAuthInput"></a>

```csharp
public object EnableBasicAuthInput { get; }
```

- *Type:* object

---

##### `EnablePerformanceModeInput`<sup>Optional</sup> <a name="EnablePerformanceModeInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput"></a>

```csharp
public object EnablePerformanceModeInput { get; }
```

- *Type:* object

---

##### `EnablePullRequestPreviewInput`<sup>Optional</sup> <a name="EnablePullRequestPreviewInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput"></a>

```csharp
public object EnablePullRequestPreviewInput { get; }
```

- *Type:* object

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput"></a>

```csharp
public string FrameworkInput { get; }
```

- *Type:* string

---

##### `PullRequestEnvironmentNameInput`<sup>Optional</sup> <a name="PullRequestEnvironmentNameInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput"></a>

```csharp
public string PullRequestEnvironmentNameInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput"></a>

```csharp
public string StageInput { get; }
```

- *Type:* string

---

##### `BasicAuthCredentials`<sup>Required</sup> <a name="BasicAuthCredentials" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthCredentials"></a>

```csharp
public string BasicAuthCredentials { get; }
```

- *Type:* string

---

##### `BuildSpec`<sup>Required</sup> <a name="BuildSpec" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec"></a>

```csharp
public string BuildSpec { get; }
```

- *Type:* string

---

##### `EnableAutoBuild`<sup>Required</sup> <a name="EnableAutoBuild" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild"></a>

```csharp
public object EnableAutoBuild { get; }
```

- *Type:* object

---

##### `EnableBasicAuth`<sup>Required</sup> <a name="EnableBasicAuth" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableBasicAuth"></a>

```csharp
public object EnableBasicAuth { get; }
```

- *Type:* object

---

##### `EnablePerformanceMode`<sup>Required</sup> <a name="EnablePerformanceMode" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode"></a>

```csharp
public object EnablePerformanceMode { get; }
```

- *Type:* object

---

##### `EnablePullRequestPreview`<sup>Required</sup> <a name="EnablePullRequestPreview" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview"></a>

```csharp
public object EnablePullRequestPreview { get; }
```

- *Type:* object

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework"></a>

```csharp
public string Framework { get; }
```

- *Type:* string

---

##### `PullRequestEnvironmentName`<sup>Required</sup> <a name="PullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName"></a>

```csharp
public string PullRequestEnvironmentName { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue"></a>

```csharp
public AmplifyAppAutoBranchCreationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---


### AmplifyAppCustomRuleList <a name="AmplifyAppCustomRuleList" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmplifyAppCustomRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.get"></a>

```csharp
private AmplifyAppCustomRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AmplifyAppCustomRuleOutputReference <a name="AmplifyAppCustomRuleOutputReference" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmplifyAppCustomRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AmplifyAppProductionBranchList <a name="AmplifyAppProductionBranchList" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmplifyAppProductionBranchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.get"></a>

```csharp
private AmplifyAppProductionBranchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AmplifyAppProductionBranchOutputReference <a name="AmplifyAppProductionBranchOutputReference" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmplifyAppProductionBranchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.branchName">BranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.lastDeployTime">LastDeployTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.thumbnailUrl">ThumbnailUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranch">AmplifyAppProductionBranch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.branchName"></a>

```csharp
public string BranchName { get; }
```

- *Type:* string

---

##### `LastDeployTime`<sup>Required</sup> <a name="LastDeployTime" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.lastDeployTime"></a>

```csharp
public string LastDeployTime { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ThumbnailUrl`<sup>Required</sup> <a name="ThumbnailUrl" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.thumbnailUrl"></a>

```csharp
public string ThumbnailUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.internalValue"></a>

```csharp
public AmplifyAppProductionBranch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranch">AmplifyAppProductionBranch</a>

---




# `elasticsearchDomain` Submodule <a name="`elasticsearchDomain` Submodule" id="@cdktf/provider-aws.elasticsearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticsearchDomain <a name="ElasticsearchDomain" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain aws_elasticsearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomain(Construct Scope, string Id, ElasticsearchDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig">ElasticsearchDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig">ElasticsearchDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAdvancedSecurityOptions">PutAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAutoTuneOptions">PutAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig">PutClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putCognitoOptions">PutCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions">PutDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions">PutEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEncryptAtRest">PutEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putLogPublishingOptions">PutLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putNodeToNodeEncryption">PutNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putSnapshotOptions">PutSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putVpcOptions">PutVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAccessPolicies">ResetAccessPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAdvancedOptions">ResetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAdvancedSecurityOptions">ResetAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAutoTuneOptions">ResetAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetClusterConfig">ResetClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetCognitoOptions">ResetCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetDomainEndpointOptions">ResetDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetEbsOptions">ResetEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetElasticsearchVersion">ResetElasticsearchVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetEncryptAtRest">ResetEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetLogPublishingOptions">ResetLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetNodeToNodeEncryption">ResetNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetSnapshotOptions">ResetSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetVpcOptions">ResetVpcOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAdvancedSecurityOptions` <a name="PutAdvancedSecurityOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAdvancedSecurityOptions"></a>

```csharp
private void PutAdvancedSecurityOptions(ElasticsearchDomainAdvancedSecurityOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAdvancedSecurityOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a>

---

##### `PutAutoTuneOptions` <a name="PutAutoTuneOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAutoTuneOptions"></a>

```csharp
private void PutAutoTuneOptions(ElasticsearchDomainAutoTuneOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAutoTuneOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a>

---

##### `PutClusterConfig` <a name="PutClusterConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig"></a>

```csharp
private void PutClusterConfig(ElasticsearchDomainClusterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a>

---

##### `PutCognitoOptions` <a name="PutCognitoOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putCognitoOptions"></a>

```csharp
private void PutCognitoOptions(ElasticsearchDomainCognitoOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putCognitoOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a>

---

##### `PutDomainEndpointOptions` <a name="PutDomainEndpointOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions"></a>

```csharp
private void PutDomainEndpointOptions(ElasticsearchDomainDomainEndpointOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a>

---

##### `PutEbsOptions` <a name="PutEbsOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions"></a>

```csharp
private void PutEbsOptions(ElasticsearchDomainEbsOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a>

---

##### `PutEncryptAtRest` <a name="PutEncryptAtRest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEncryptAtRest"></a>

```csharp
private void PutEncryptAtRest(ElasticsearchDomainEncryptAtRest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEncryptAtRest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a>

---

##### `PutLogPublishingOptions` <a name="PutLogPublishingOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putLogPublishingOptions"></a>

```csharp
private void PutLogPublishingOptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putLogPublishingOptions.parameter.value"></a>

- *Type:* object

---

##### `PutNodeToNodeEncryption` <a name="PutNodeToNodeEncryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putNodeToNodeEncryption"></a>

```csharp
private void PutNodeToNodeEncryption(ElasticsearchDomainNodeToNodeEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putNodeToNodeEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a>

---

##### `PutSnapshotOptions` <a name="PutSnapshotOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putSnapshotOptions"></a>

```csharp
private void PutSnapshotOptions(ElasticsearchDomainSnapshotOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putSnapshotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(ElasticsearchDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a>

---

##### `PutVpcOptions` <a name="PutVpcOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putVpcOptions"></a>

```csharp
private void PutVpcOptions(ElasticsearchDomainVpcOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a>

---

##### `ResetAccessPolicies` <a name="ResetAccessPolicies" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAccessPolicies"></a>

```csharp
private void ResetAccessPolicies()
```

##### `ResetAdvancedOptions` <a name="ResetAdvancedOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAdvancedOptions"></a>

```csharp
private void ResetAdvancedOptions()
```

##### `ResetAdvancedSecurityOptions` <a name="ResetAdvancedSecurityOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAdvancedSecurityOptions"></a>

```csharp
private void ResetAdvancedSecurityOptions()
```

##### `ResetAutoTuneOptions` <a name="ResetAutoTuneOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAutoTuneOptions"></a>

```csharp
private void ResetAutoTuneOptions()
```

##### `ResetClusterConfig` <a name="ResetClusterConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetClusterConfig"></a>

```csharp
private void ResetClusterConfig()
```

##### `ResetCognitoOptions` <a name="ResetCognitoOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetCognitoOptions"></a>

```csharp
private void ResetCognitoOptions()
```

##### `ResetDomainEndpointOptions` <a name="ResetDomainEndpointOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetDomainEndpointOptions"></a>

```csharp
private void ResetDomainEndpointOptions()
```

##### `ResetEbsOptions` <a name="ResetEbsOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetEbsOptions"></a>

```csharp
private void ResetEbsOptions()
```

##### `ResetElasticsearchVersion` <a name="ResetElasticsearchVersion" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetElasticsearchVersion"></a>

```csharp
private void ResetElasticsearchVersion()
```

##### `ResetEncryptAtRest` <a name="ResetEncryptAtRest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetEncryptAtRest"></a>

```csharp
private void ResetEncryptAtRest()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogPublishingOptions` <a name="ResetLogPublishingOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetLogPublishingOptions"></a>

```csharp
private void ResetLogPublishingOptions()
```

##### `ResetNodeToNodeEncryption` <a name="ResetNodeToNodeEncryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetNodeToNodeEncryption"></a>

```csharp
private void ResetNodeToNodeEncryption()
```

##### `ResetSnapshotOptions` <a name="ResetSnapshotOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetSnapshotOptions"></a>

```csharp
private void ResetSnapshotOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcOptions` <a name="ResetVpcOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetVpcOptions"></a>

```csharp
private void ResetVpcOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticsearchDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticsearchDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticsearchDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedSecurityOptions">AdvancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference">ElasticsearchDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.autoTuneOptions">AutoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference">ElasticsearchDomainAutoTuneOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference">ElasticsearchDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cognitoOptions">CognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference">ElasticsearchDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainEndpointOptions">DomainEndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference">ElasticsearchDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.ebsOptions">EbsOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference">ElasticsearchDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.encryptAtRest">EncryptAtRest</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference">ElasticsearchDomainEncryptAtRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.kibanaEndpoint">KibanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.logPublishingOptions">LogPublishingOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList">ElasticsearchDomainLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.nodeToNodeEncryption">NodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference">ElasticsearchDomainNodeToNodeEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.snapshotOptions">SnapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference">ElasticsearchDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference">ElasticsearchDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference">ElasticsearchDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.accessPoliciesInput">AccessPoliciesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedOptionsInput">AdvancedOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedSecurityOptionsInput">AdvancedSecurityOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.autoTuneOptionsInput">AutoTuneOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.clusterConfigInput">ClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cognitoOptionsInput">CognitoOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainEndpointOptionsInput">DomainEndpointOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.ebsOptionsInput">EbsOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.elasticsearchVersionInput">ElasticsearchVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.encryptAtRestInput">EncryptAtRestInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.logPublishingOptionsInput">LogPublishingOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.nodeToNodeEncryptionInput">NodeToNodeEncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.snapshotOptionsInput">SnapshotOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.vpcOptionsInput">VpcOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.accessPolicies">AccessPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedOptions">AdvancedOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.elasticsearchVersion">ElasticsearchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedSecurityOptions`<sup>Required</sup> <a name="AdvancedSecurityOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedSecurityOptions"></a>

```csharp
public ElasticsearchDomainAdvancedSecurityOptionsOutputReference AdvancedSecurityOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference">ElasticsearchDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoTuneOptions`<sup>Required</sup> <a name="AutoTuneOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.autoTuneOptions"></a>

```csharp
public ElasticsearchDomainAutoTuneOptionsOutputReference AutoTuneOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference">ElasticsearchDomainAutoTuneOptionsOutputReference</a>

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.clusterConfig"></a>

```csharp
public ElasticsearchDomainClusterConfigOutputReference ClusterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference">ElasticsearchDomainClusterConfigOutputReference</a>

---

##### `CognitoOptions`<sup>Required</sup> <a name="CognitoOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cognitoOptions"></a>

```csharp
public ElasticsearchDomainCognitoOptionsOutputReference CognitoOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference">ElasticsearchDomainCognitoOptionsOutputReference</a>

---

##### `DomainEndpointOptions`<sup>Required</sup> <a name="DomainEndpointOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainEndpointOptions"></a>

```csharp
public ElasticsearchDomainDomainEndpointOptionsOutputReference DomainEndpointOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference">ElasticsearchDomainDomainEndpointOptionsOutputReference</a>

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `EbsOptions`<sup>Required</sup> <a name="EbsOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.ebsOptions"></a>

```csharp
public ElasticsearchDomainEbsOptionsOutputReference EbsOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference">ElasticsearchDomainEbsOptionsOutputReference</a>

---

##### `EncryptAtRest`<sup>Required</sup> <a name="EncryptAtRest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.encryptAtRest"></a>

```csharp
public ElasticsearchDomainEncryptAtRestOutputReference EncryptAtRest { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference">ElasticsearchDomainEncryptAtRestOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `KibanaEndpoint`<sup>Required</sup> <a name="KibanaEndpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.kibanaEndpoint"></a>

```csharp
public string KibanaEndpoint { get; }
```

- *Type:* string

---

##### `LogPublishingOptions`<sup>Required</sup> <a name="LogPublishingOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.logPublishingOptions"></a>

```csharp
public ElasticsearchDomainLogPublishingOptionsList LogPublishingOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList">ElasticsearchDomainLogPublishingOptionsList</a>

---

##### `NodeToNodeEncryption`<sup>Required</sup> <a name="NodeToNodeEncryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.nodeToNodeEncryption"></a>

```csharp
public ElasticsearchDomainNodeToNodeEncryptionOutputReference NodeToNodeEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference">ElasticsearchDomainNodeToNodeEncryptionOutputReference</a>

---

##### `SnapshotOptions`<sup>Required</sup> <a name="SnapshotOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.snapshotOptions"></a>

```csharp
public ElasticsearchDomainSnapshotOptionsOutputReference SnapshotOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference">ElasticsearchDomainSnapshotOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.timeouts"></a>

```csharp
public ElasticsearchDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference">ElasticsearchDomainTimeoutsOutputReference</a>

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.vpcOptions"></a>

```csharp
public ElasticsearchDomainVpcOptionsOutputReference VpcOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference">ElasticsearchDomainVpcOptionsOutputReference</a>

---

##### `AccessPoliciesInput`<sup>Optional</sup> <a name="AccessPoliciesInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.accessPoliciesInput"></a>

```csharp
public string AccessPoliciesInput { get; }
```

- *Type:* string

---

##### `AdvancedOptionsInput`<sup>Optional</sup> <a name="AdvancedOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdvancedOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AdvancedSecurityOptionsInput`<sup>Optional</sup> <a name="AdvancedSecurityOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedSecurityOptionsInput"></a>

```csharp
public ElasticsearchDomainAdvancedSecurityOptions AdvancedSecurityOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a>

---

##### `AutoTuneOptionsInput`<sup>Optional</sup> <a name="AutoTuneOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.autoTuneOptionsInput"></a>

```csharp
public ElasticsearchDomainAutoTuneOptions AutoTuneOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a>

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.clusterConfigInput"></a>

```csharp
public ElasticsearchDomainClusterConfig ClusterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a>

---

##### `CognitoOptionsInput`<sup>Optional</sup> <a name="CognitoOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cognitoOptionsInput"></a>

```csharp
public ElasticsearchDomainCognitoOptions CognitoOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a>

---

##### `DomainEndpointOptionsInput`<sup>Optional</sup> <a name="DomainEndpointOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainEndpointOptionsInput"></a>

```csharp
public ElasticsearchDomainDomainEndpointOptions DomainEndpointOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EbsOptionsInput`<sup>Optional</sup> <a name="EbsOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.ebsOptionsInput"></a>

```csharp
public ElasticsearchDomainEbsOptions EbsOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a>

---

##### `ElasticsearchVersionInput`<sup>Optional</sup> <a name="ElasticsearchVersionInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.elasticsearchVersionInput"></a>

```csharp
public string ElasticsearchVersionInput { get; }
```

- *Type:* string

---

##### `EncryptAtRestInput`<sup>Optional</sup> <a name="EncryptAtRestInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.encryptAtRestInput"></a>

```csharp
public ElasticsearchDomainEncryptAtRest EncryptAtRestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogPublishingOptionsInput`<sup>Optional</sup> <a name="LogPublishingOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.logPublishingOptionsInput"></a>

```csharp
public object LogPublishingOptionsInput { get; }
```

- *Type:* object

---

##### `NodeToNodeEncryptionInput`<sup>Optional</sup> <a name="NodeToNodeEncryptionInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.nodeToNodeEncryptionInput"></a>

```csharp
public ElasticsearchDomainNodeToNodeEncryption NodeToNodeEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a>

---

##### `SnapshotOptionsInput`<sup>Optional</sup> <a name="SnapshotOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.snapshotOptionsInput"></a>

```csharp
public ElasticsearchDomainSnapshotOptions SnapshotOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcOptionsInput`<sup>Optional</sup> <a name="VpcOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.vpcOptionsInput"></a>

```csharp
public ElasticsearchDomainVpcOptions VpcOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a>

---

##### `AccessPolicies`<sup>Required</sup> <a name="AccessPolicies" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.accessPolicies"></a>

```csharp
public string AccessPolicies { get; }
```

- *Type:* string

---

##### `AdvancedOptions`<sup>Required</sup> <a name="AdvancedOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdvancedOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `ElasticsearchVersion`<sup>Required</sup> <a name="ElasticsearchVersion" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.elasticsearchVersion"></a>

```csharp
public string ElasticsearchVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchDomainAdvancedSecurityOptions <a name="ElasticsearchDomainAdvancedSecurityOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainAdvancedSecurityOptions {
    object Enabled,
    object InternalUserDatabaseEnabled = null,
    ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions MasterUserOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled">InternalUserDatabaseEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#internal_user_database_enabled ElasticsearchDomain#internal_user_database_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.masterUserOptions">MasterUserOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | master_user_options block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

##### `InternalUserDatabaseEnabled`<sup>Optional</sup> <a name="InternalUserDatabaseEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

```csharp
public object InternalUserDatabaseEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#internal_user_database_enabled ElasticsearchDomain#internal_user_database_enabled}.

---

##### `MasterUserOptions`<sup>Optional</sup> <a name="MasterUserOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.masterUserOptions"></a>

```csharp
public ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions MasterUserOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

master_user_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_options ElasticsearchDomain#master_user_options}

---

### ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions <a name="ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions {
    string MasterUserArn = null,
    string MasterUserName = null,
    string MasterUserPassword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn">MasterUserArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_arn ElasticsearchDomain#master_user_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName">MasterUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_name ElasticsearchDomain#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword">MasterUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_password ElasticsearchDomain#master_user_password}. |

---

##### `MasterUserArn`<sup>Optional</sup> <a name="MasterUserArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn"></a>

```csharp
public string MasterUserArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_arn ElasticsearchDomain#master_user_arn}.

---

##### `MasterUserName`<sup>Optional</sup> <a name="MasterUserName" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName"></a>

```csharp
public string MasterUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_name ElasticsearchDomain#master_user_name}.

---

##### `MasterUserPassword`<sup>Optional</sup> <a name="MasterUserPassword" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword"></a>

```csharp
public string MasterUserPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_password ElasticsearchDomain#master_user_password}.

---

### ElasticsearchDomainAutoTuneOptions <a name="ElasticsearchDomainAutoTuneOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainAutoTuneOptions {
    string DesiredState,
    object MaintenanceSchedule = null,
    string RollbackOnDisable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.desiredState">DesiredState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#desired_state ElasticsearchDomain#desired_state}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code>object</code> | maintenance_schedule block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.rollbackOnDisable">RollbackOnDisable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#rollback_on_disable ElasticsearchDomain#rollback_on_disable}. |

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.desiredState"></a>

```csharp
public string DesiredState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#desired_state ElasticsearchDomain#desired_state}.

---

##### `MaintenanceSchedule`<sup>Optional</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.maintenanceSchedule"></a>

```csharp
public object MaintenanceSchedule { get; set; }
```

- *Type:* object

maintenance_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#maintenance_schedule ElasticsearchDomain#maintenance_schedule}

---

##### `RollbackOnDisable`<sup>Optional</sup> <a name="RollbackOnDisable" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.rollbackOnDisable"></a>

```csharp
public string RollbackOnDisable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#rollback_on_disable ElasticsearchDomain#rollback_on_disable}.

---

### ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule {
    string CronExpressionForRecurrence,
    ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration Duration,
    string StartAt
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence">CronExpressionForRecurrence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cron_expression_for_recurrence ElasticsearchDomain#cron_expression_for_recurrence}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration">Duration</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | duration block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt">StartAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#start_at ElasticsearchDomain#start_at}. |

---

##### `CronExpressionForRecurrence`<sup>Required</sup> <a name="CronExpressionForRecurrence" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence"></a>

```csharp
public string CronExpressionForRecurrence { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cron_expression_for_recurrence ElasticsearchDomain#cron_expression_for_recurrence}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration"></a>

```csharp
public ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration Duration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

duration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#duration ElasticsearchDomain#duration}

---

##### `StartAt`<sup>Required</sup> <a name="StartAt" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt"></a>

```csharp
public string StartAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#start_at ElasticsearchDomain#start_at}.

---

### ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration {
    string Unit,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#unit ElasticsearchDomain#unit}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#value ElasticsearchDomain#value}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#unit ElasticsearchDomain#unit}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#value ElasticsearchDomain#value}.

---

### ElasticsearchDomainClusterConfig <a name="ElasticsearchDomainClusterConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainClusterConfig {
    ElasticsearchDomainClusterConfigColdStorageOptions ColdStorageOptions = null,
    double DedicatedMasterCount = null,
    object DedicatedMasterEnabled = null,
    string DedicatedMasterType = null,
    double InstanceCount = null,
    string InstanceType = null,
    double WarmCount = null,
    object WarmEnabled = null,
    string WarmType = null,
    ElasticsearchDomainClusterConfigZoneAwarenessConfig ZoneAwarenessConfig = null,
    object ZoneAwarenessEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.coldStorageOptions">ColdStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a></code> | cold_storage_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterCount">DedicatedMasterCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_count ElasticsearchDomain#dedicated_master_count}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterEnabled">DedicatedMasterEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_enabled ElasticsearchDomain#dedicated_master_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterType">DedicatedMasterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_type ElasticsearchDomain#dedicated_master_type}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_count ElasticsearchDomain#instance_count}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_type ElasticsearchDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmCount">WarmCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_count ElasticsearchDomain#warm_count}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmEnabled">WarmEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_enabled ElasticsearchDomain#warm_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmType">WarmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_type ElasticsearchDomain#warm_type}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.zoneAwarenessConfig">ZoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a></code> | zone_awareness_config block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.zoneAwarenessEnabled">ZoneAwarenessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#zone_awareness_enabled ElasticsearchDomain#zone_awareness_enabled}. |

---

##### `ColdStorageOptions`<sup>Optional</sup> <a name="ColdStorageOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.coldStorageOptions"></a>

```csharp
public ElasticsearchDomainClusterConfigColdStorageOptions ColdStorageOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a>

cold_storage_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cold_storage_options ElasticsearchDomain#cold_storage_options}

---

##### `DedicatedMasterCount`<sup>Optional</sup> <a name="DedicatedMasterCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterCount"></a>

```csharp
public double DedicatedMasterCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_count ElasticsearchDomain#dedicated_master_count}.

---

##### `DedicatedMasterEnabled`<sup>Optional</sup> <a name="DedicatedMasterEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterEnabled"></a>

```csharp
public object DedicatedMasterEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_enabled ElasticsearchDomain#dedicated_master_enabled}.

---

##### `DedicatedMasterType`<sup>Optional</sup> <a name="DedicatedMasterType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterType"></a>

```csharp
public string DedicatedMasterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_type ElasticsearchDomain#dedicated_master_type}.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_count ElasticsearchDomain#instance_count}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_type ElasticsearchDomain#instance_type}.

---

##### `WarmCount`<sup>Optional</sup> <a name="WarmCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmCount"></a>

```csharp
public double WarmCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_count ElasticsearchDomain#warm_count}.

---

##### `WarmEnabled`<sup>Optional</sup> <a name="WarmEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmEnabled"></a>

```csharp
public object WarmEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_enabled ElasticsearchDomain#warm_enabled}.

---

##### `WarmType`<sup>Optional</sup> <a name="WarmType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmType"></a>

```csharp
public string WarmType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_type ElasticsearchDomain#warm_type}.

---

##### `ZoneAwarenessConfig`<sup>Optional</sup> <a name="ZoneAwarenessConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.zoneAwarenessConfig"></a>

```csharp
public ElasticsearchDomainClusterConfigZoneAwarenessConfig ZoneAwarenessConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

zone_awareness_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#zone_awareness_config ElasticsearchDomain#zone_awareness_config}

---

##### `ZoneAwarenessEnabled`<sup>Optional</sup> <a name="ZoneAwarenessEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.zoneAwarenessEnabled"></a>

```csharp
public object ZoneAwarenessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#zone_awareness_enabled ElasticsearchDomain#zone_awareness_enabled}.

---

### ElasticsearchDomainClusterConfigColdStorageOptions <a name="ElasticsearchDomainClusterConfigColdStorageOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainClusterConfigColdStorageOptions {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

### ElasticsearchDomainClusterConfigZoneAwarenessConfig <a name="ElasticsearchDomainClusterConfigZoneAwarenessConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainClusterConfigZoneAwarenessConfig {
    double AvailabilityZoneCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount">AvailabilityZoneCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#availability_zone_count ElasticsearchDomain#availability_zone_count}. |

---

##### `AvailabilityZoneCount`<sup>Optional</sup> <a name="AvailabilityZoneCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

```csharp
public double AvailabilityZoneCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#availability_zone_count ElasticsearchDomain#availability_zone_count}.

---

### ElasticsearchDomainCognitoOptions <a name="ElasticsearchDomainCognitoOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainCognitoOptions {
    string IdentityPoolId,
    string RoleArn,
    string UserPoolId,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#identity_pool_id ElasticsearchDomain#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#role_arn ElasticsearchDomain#role_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#user_pool_id ElasticsearchDomain#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#identity_pool_id ElasticsearchDomain#identity_pool_id}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#role_arn ElasticsearchDomain#role_arn}.

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#user_pool_id ElasticsearchDomain#user_pool_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

### ElasticsearchDomainConfig <a name="ElasticsearchDomainConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainName,
    string AccessPolicies = null,
    System.Collections.Generic.IDictionary<string, string> AdvancedOptions = null,
    ElasticsearchDomainAdvancedSecurityOptions AdvancedSecurityOptions = null,
    ElasticsearchDomainAutoTuneOptions AutoTuneOptions = null,
    ElasticsearchDomainClusterConfig ClusterConfig = null,
    ElasticsearchDomainCognitoOptions CognitoOptions = null,
    ElasticsearchDomainDomainEndpointOptions DomainEndpointOptions = null,
    ElasticsearchDomainEbsOptions EbsOptions = null,
    string ElasticsearchVersion = null,
    ElasticsearchDomainEncryptAtRest EncryptAtRest = null,
    string Id = null,
    object LogPublishingOptions = null,
    ElasticsearchDomainNodeToNodeEncryption NodeToNodeEncryption = null,
    ElasticsearchDomainSnapshotOptions SnapshotOptions = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    ElasticsearchDomainTimeouts Timeouts = null,
    ElasticsearchDomainVpcOptions VpcOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#domain_name ElasticsearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.accessPolicies">AccessPolicies</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#access_policies ElasticsearchDomain#access_policies}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.advancedOptions">AdvancedOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#advanced_options ElasticsearchDomain#advanced_options}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.advancedSecurityOptions">AdvancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a></code> | advanced_security_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.autoTuneOptions">AutoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a></code> | auto_tune_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.cognitoOptions">CognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a></code> | cognito_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.domainEndpointOptions">DomainEndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a></code> | domain_endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.ebsOptions">EbsOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a></code> | ebs_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.elasticsearchVersion">ElasticsearchVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#elasticsearch_version ElasticsearchDomain#elasticsearch_version}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.encryptAtRest">EncryptAtRest</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a></code> | encrypt_at_rest block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#id ElasticsearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.logPublishingOptions">LogPublishingOptions</a></code> | <code>object</code> | log_publishing_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.nodeToNodeEncryption">NodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a></code> | node_to_node_encryption block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.snapshotOptions">SnapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a></code> | snapshot_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags ElasticsearchDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags_all ElasticsearchDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a></code> | vpc_options block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#domain_name ElasticsearchDomain#domain_name}.

---

##### `AccessPolicies`<sup>Optional</sup> <a name="AccessPolicies" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.accessPolicies"></a>

```csharp
public string AccessPolicies { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#access_policies ElasticsearchDomain#access_policies}.

---

##### `AdvancedOptions`<sup>Optional</sup> <a name="AdvancedOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.advancedOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdvancedOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#advanced_options ElasticsearchDomain#advanced_options}.

---

##### `AdvancedSecurityOptions`<sup>Optional</sup> <a name="AdvancedSecurityOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.advancedSecurityOptions"></a>

```csharp
public ElasticsearchDomainAdvancedSecurityOptions AdvancedSecurityOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a>

advanced_security_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#advanced_security_options ElasticsearchDomain#advanced_security_options}

---

##### `AutoTuneOptions`<sup>Optional</sup> <a name="AutoTuneOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.autoTuneOptions"></a>

```csharp
public ElasticsearchDomainAutoTuneOptions AutoTuneOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a>

auto_tune_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#auto_tune_options ElasticsearchDomain#auto_tune_options}

---

##### `ClusterConfig`<sup>Optional</sup> <a name="ClusterConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.clusterConfig"></a>

```csharp
public ElasticsearchDomainClusterConfig ClusterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cluster_config ElasticsearchDomain#cluster_config}

---

##### `CognitoOptions`<sup>Optional</sup> <a name="CognitoOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.cognitoOptions"></a>

```csharp
public ElasticsearchDomainCognitoOptions CognitoOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a>

cognito_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cognito_options ElasticsearchDomain#cognito_options}

---

##### `DomainEndpointOptions`<sup>Optional</sup> <a name="DomainEndpointOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.domainEndpointOptions"></a>

```csharp
public ElasticsearchDomainDomainEndpointOptions DomainEndpointOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a>

domain_endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#domain_endpoint_options ElasticsearchDomain#domain_endpoint_options}

---

##### `EbsOptions`<sup>Optional</sup> <a name="EbsOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.ebsOptions"></a>

```csharp
public ElasticsearchDomainEbsOptions EbsOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a>

ebs_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#ebs_options ElasticsearchDomain#ebs_options}

---

##### `ElasticsearchVersion`<sup>Optional</sup> <a name="ElasticsearchVersion" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.elasticsearchVersion"></a>

```csharp
public string ElasticsearchVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#elasticsearch_version ElasticsearchDomain#elasticsearch_version}.

---

##### `EncryptAtRest`<sup>Optional</sup> <a name="EncryptAtRest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.encryptAtRest"></a>

```csharp
public ElasticsearchDomainEncryptAtRest EncryptAtRest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a>

encrypt_at_rest block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#encrypt_at_rest ElasticsearchDomain#encrypt_at_rest}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#id ElasticsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogPublishingOptions`<sup>Optional</sup> <a name="LogPublishingOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.logPublishingOptions"></a>

```csharp
public object LogPublishingOptions { get; set; }
```

- *Type:* object

log_publishing_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#log_publishing_options ElasticsearchDomain#log_publishing_options}

---

##### `NodeToNodeEncryption`<sup>Optional</sup> <a name="NodeToNodeEncryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.nodeToNodeEncryption"></a>

```csharp
public ElasticsearchDomainNodeToNodeEncryption NodeToNodeEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a>

node_to_node_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#node_to_node_encryption ElasticsearchDomain#node_to_node_encryption}

---

##### `SnapshotOptions`<sup>Optional</sup> <a name="SnapshotOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.snapshotOptions"></a>

```csharp
public ElasticsearchDomainSnapshotOptions SnapshotOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a>

snapshot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#snapshot_options ElasticsearchDomain#snapshot_options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags ElasticsearchDomain#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags_all ElasticsearchDomain#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.timeouts"></a>

```csharp
public ElasticsearchDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#timeouts ElasticsearchDomain#timeouts}

---

##### `VpcOptions`<sup>Optional</sup> <a name="VpcOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.vpcOptions"></a>

```csharp
public ElasticsearchDomainVpcOptions VpcOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#vpc_options ElasticsearchDomain#vpc_options}

---

### ElasticsearchDomainDomainEndpointOptions <a name="ElasticsearchDomainDomainEndpointOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainDomainEndpointOptions {
    string CustomEndpoint = null,
    string CustomEndpointCertificateArn = null,
    object CustomEndpointEnabled = null,
    object EnforceHttps = null,
    string TlsSecurityPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpoint">CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint ElasticsearchDomain#custom_endpoint}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpointCertificateArn">CustomEndpointCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_certificate_arn ElasticsearchDomain#custom_endpoint_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpointEnabled">CustomEndpointEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_enabled ElasticsearchDomain#custom_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.enforceHttps">EnforceHttps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enforce_https ElasticsearchDomain#enforce_https}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tls_security_policy ElasticsearchDomain#tls_security_policy}. |

---

##### `CustomEndpoint`<sup>Optional</sup> <a name="CustomEndpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpoint"></a>

```csharp
public string CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint ElasticsearchDomain#custom_endpoint}.

---

##### `CustomEndpointCertificateArn`<sup>Optional</sup> <a name="CustomEndpointCertificateArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpointCertificateArn"></a>

```csharp
public string CustomEndpointCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_certificate_arn ElasticsearchDomain#custom_endpoint_certificate_arn}.

---

##### `CustomEndpointEnabled`<sup>Optional</sup> <a name="CustomEndpointEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpointEnabled"></a>

```csharp
public object CustomEndpointEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_enabled ElasticsearchDomain#custom_endpoint_enabled}.

---

##### `EnforceHttps`<sup>Optional</sup> <a name="EnforceHttps" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.enforceHttps"></a>

```csharp
public object EnforceHttps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enforce_https ElasticsearchDomain#enforce_https}.

---

##### `TlsSecurityPolicy`<sup>Optional</sup> <a name="TlsSecurityPolicy" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```csharp
public string TlsSecurityPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tls_security_policy ElasticsearchDomain#tls_security_policy}.

---

### ElasticsearchDomainEbsOptions <a name="ElasticsearchDomainEbsOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainEbsOptions {
    object EbsEnabled,
    double Iops = null,
    double Throughput = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.ebsEnabled">EbsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#ebs_enabled ElasticsearchDomain#ebs_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#iops ElasticsearchDomain#iops}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#throughput ElasticsearchDomain#throughput}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_size ElasticsearchDomain#volume_size}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_type ElasticsearchDomain#volume_type}. |

---

##### `EbsEnabled`<sup>Required</sup> <a name="EbsEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.ebsEnabled"></a>

```csharp
public object EbsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#ebs_enabled ElasticsearchDomain#ebs_enabled}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#iops ElasticsearchDomain#iops}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#throughput ElasticsearchDomain#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_size ElasticsearchDomain#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_type ElasticsearchDomain#volume_type}.

---

### ElasticsearchDomainEncryptAtRest <a name="ElasticsearchDomainEncryptAtRest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainEncryptAtRest {
    object Enabled,
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#kms_key_id ElasticsearchDomain#kms_key_id}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#kms_key_id ElasticsearchDomain#kms_key_id}.

---

### ElasticsearchDomainLogPublishingOptions <a name="ElasticsearchDomainLogPublishingOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainLogPublishingOptions {
    string CloudwatchLogGroupArn,
    string LogType,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cloudwatch_log_group_arn ElasticsearchDomain#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.logType">LogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#log_type ElasticsearchDomain#log_type}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cloudwatch_log_group_arn ElasticsearchDomain#cloudwatch_log_group_arn}.

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#log_type ElasticsearchDomain#log_type}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

### ElasticsearchDomainNodeToNodeEncryption <a name="ElasticsearchDomainNodeToNodeEncryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainNodeToNodeEncryption {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

### ElasticsearchDomainSnapshotOptions <a name="ElasticsearchDomainSnapshotOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainSnapshotOptions {
    double AutomatedSnapshotStartHour
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions.property.automatedSnapshotStartHour">AutomatedSnapshotStartHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}. |

---

##### `AutomatedSnapshotStartHour`<sup>Required</sup> <a name="AutomatedSnapshotStartHour" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions.property.automatedSnapshotStartHour"></a>

```csharp
public double AutomatedSnapshotStartHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}.

---

### ElasticsearchDomainTimeouts <a name="ElasticsearchDomainTimeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#create ElasticsearchDomain#create}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#delete ElasticsearchDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#update ElasticsearchDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#create ElasticsearchDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#delete ElasticsearchDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#update ElasticsearchDomain#update}.

---

### ElasticsearchDomainVpcOptions <a name="ElasticsearchDomainVpcOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainVpcOptions {
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#security_group_ids ElasticsearchDomain#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#subnet_ids ElasticsearchDomain#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#security_group_ids ElasticsearchDomain#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#subnet_ids ElasticsearchDomain#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn">ResetMasterUserArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName">ResetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword">ResetMasterUserPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMasterUserArn` <a name="ResetMasterUserArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn"></a>

```csharp
private void ResetMasterUserArn()
```

##### `ResetMasterUserName` <a name="ResetMasterUserName" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName"></a>

```csharp
private void ResetMasterUserName()
```

##### `ResetMasterUserPassword` <a name="ResetMasterUserPassword" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword"></a>

```csharp
private void ResetMasterUserPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput">MasterUserArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput">MasterUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput">MasterUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">MasterUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">MasterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">MasterUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MasterUserArnInput`<sup>Optional</sup> <a name="MasterUserArnInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput"></a>

```csharp
public string MasterUserArnInput { get; }
```

- *Type:* string

---

##### `MasterUserNameInput`<sup>Optional</sup> <a name="MasterUserNameInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput"></a>

```csharp
public string MasterUserNameInput { get; }
```

- *Type:* string

---

##### `MasterUserPasswordInput`<sup>Optional</sup> <a name="MasterUserPasswordInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput"></a>

```csharp
public string MasterUserPasswordInput { get; }
```

- *Type:* string

---

##### `MasterUserArn`<sup>Required</sup> <a name="MasterUserArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```csharp
public string MasterUserArn { get; }
```

- *Type:* string

---

##### `MasterUserName`<sup>Required</sup> <a name="MasterUserName" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```csharp
public string MasterUserName { get; }
```

- *Type:* string

---

##### `MasterUserPassword`<sup>Required</sup> <a name="MasterUserPassword" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```csharp
public string MasterUserPassword { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---


### ElasticsearchDomainAdvancedSecurityOptionsOutputReference <a name="ElasticsearchDomainAdvancedSecurityOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainAdvancedSecurityOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions">PutMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled">ResetInternalUserDatabaseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions">ResetMasterUserOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMasterUserOptions` <a name="PutMasterUserOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions"></a>

```csharp
private void PutMasterUserOptions(ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `ResetInternalUserDatabaseEnabled` <a name="ResetInternalUserDatabaseEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled"></a>

```csharp
private void ResetInternalUserDatabaseEnabled()
```

##### `ResetMasterUserOptions` <a name="ResetMasterUserOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions"></a>

```csharp
private void ResetMasterUserOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">MasterUserOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput">InternalUserDatabaseEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput">MasterUserOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">InternalUserDatabaseEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MasterUserOptions`<sup>Required</sup> <a name="MasterUserOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```csharp
public ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference MasterUserOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `InternalUserDatabaseEnabledInput`<sup>Optional</sup> <a name="InternalUserDatabaseEnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput"></a>

```csharp
public object InternalUserDatabaseEnabledInput { get; }
```

- *Type:* object

---

##### `MasterUserOptionsInput`<sup>Optional</sup> <a name="MasterUserOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput"></a>

```csharp
public ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions MasterUserOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalUserDatabaseEnabled`<sup>Required</sup> <a name="InternalUserDatabaseEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```csharp
public object InternalUserDatabaseEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainAdvancedSecurityOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a>

---


### ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


### ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get"></a>

```csharp
private ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration">PutDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDuration` <a name="PutDuration" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration"></a>

```csharp
private void PutDuration(ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration">Duration</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput">CronExpressionForRecurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput">DurationInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput">StartAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence">CronExpressionForRecurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt">StartAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration"></a>

```csharp
public ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference Duration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a>

---

##### `CronExpressionForRecurrenceInput`<sup>Optional</sup> <a name="CronExpressionForRecurrenceInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput"></a>

```csharp
public string CronExpressionForRecurrenceInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput"></a>

```csharp
public ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration DurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---

##### `StartAtInput`<sup>Optional</sup> <a name="StartAtInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput"></a>

```csharp
public string StartAtInput { get; }
```

- *Type:* string

---

##### `CronExpressionForRecurrence`<sup>Required</sup> <a name="CronExpressionForRecurrence" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence"></a>

```csharp
public string CronExpressionForRecurrence { get; }
```

- *Type:* string

---

##### `StartAt`<sup>Required</sup> <a name="StartAt" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt"></a>

```csharp
public string StartAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticsearchDomainAutoTuneOptionsOutputReference <a name="ElasticsearchDomainAutoTuneOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainAutoTuneOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule">PutMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule">ResetMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable">ResetRollbackOnDisable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceSchedule` <a name="PutMaintenanceSchedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule"></a>

```csharp
private void PutMaintenanceSchedule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule.parameter.value"></a>

- *Type:* object

---

##### `ResetMaintenanceSchedule` <a name="ResetMaintenanceSchedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule"></a>

```csharp
private void ResetMaintenanceSchedule()
```

##### `ResetRollbackOnDisable` <a name="ResetRollbackOnDisable" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable"></a>

```csharp
private void ResetRollbackOnDisable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput">DesiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput">MaintenanceScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput">RollbackOnDisableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredState">DesiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable">RollbackOnDisable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule"></a>

```csharp
public ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList MaintenanceSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList</a>

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput"></a>

```csharp
public string DesiredStateInput { get; }
```

- *Type:* string

---

##### `MaintenanceScheduleInput`<sup>Optional</sup> <a name="MaintenanceScheduleInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput"></a>

```csharp
public object MaintenanceScheduleInput { get; }
```

- *Type:* object

---

##### `RollbackOnDisableInput`<sup>Optional</sup> <a name="RollbackOnDisableInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput"></a>

```csharp
public string RollbackOnDisableInput { get; }
```

- *Type:* string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredState"></a>

```csharp
public string DesiredState { get; }
```

- *Type:* string

---

##### `RollbackOnDisable`<sup>Required</sup> <a name="RollbackOnDisable" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable"></a>

```csharp
public string RollbackOnDisable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainAutoTuneOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a>

---


### ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference <a name="ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainClusterConfigColdStorageOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a>

---


### ElasticsearchDomainClusterConfigOutputReference <a name="ElasticsearchDomainClusterConfigOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putColdStorageOptions">PutColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putZoneAwarenessConfig">PutZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetColdStorageOptions">ResetColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterCount">ResetDedicatedMasterCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled">ResetDedicatedMasterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterType">ResetDedicatedMasterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmCount">ResetWarmCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmEnabled">ResetWarmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmType">ResetWarmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig">ResetZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled">ResetZoneAwarenessEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColdStorageOptions` <a name="PutColdStorageOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putColdStorageOptions"></a>

```csharp
private void PutColdStorageOptions(ElasticsearchDomainClusterConfigColdStorageOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putColdStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a>

---

##### `PutZoneAwarenessConfig` <a name="PutZoneAwarenessConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putZoneAwarenessConfig"></a>

```csharp
private void PutZoneAwarenessConfig(ElasticsearchDomainClusterConfigZoneAwarenessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putZoneAwarenessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

---

##### `ResetColdStorageOptions` <a name="ResetColdStorageOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetColdStorageOptions"></a>

```csharp
private void ResetColdStorageOptions()
```

##### `ResetDedicatedMasterCount` <a name="ResetDedicatedMasterCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterCount"></a>

```csharp
private void ResetDedicatedMasterCount()
```

##### `ResetDedicatedMasterEnabled` <a name="ResetDedicatedMasterEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled"></a>

```csharp
private void ResetDedicatedMasterEnabled()
```

##### `ResetDedicatedMasterType` <a name="ResetDedicatedMasterType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterType"></a>

```csharp
private void ResetDedicatedMasterType()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetWarmCount` <a name="ResetWarmCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmCount"></a>

```csharp
private void ResetWarmCount()
```

##### `ResetWarmEnabled` <a name="ResetWarmEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmEnabled"></a>

```csharp
private void ResetWarmEnabled()
```

##### `ResetWarmType` <a name="ResetWarmType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmType"></a>

```csharp
private void ResetWarmType()
```

##### `ResetZoneAwarenessConfig` <a name="ResetZoneAwarenessConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig"></a>

```csharp
private void ResetZoneAwarenessConfig()
```

##### `ResetZoneAwarenessEnabled` <a name="ResetZoneAwarenessEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled"></a>

```csharp
private void ResetZoneAwarenessEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptions">ColdStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference">ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig">ZoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference">ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput">ColdStorageOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput">DedicatedMasterCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput">DedicatedMasterEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput">DedicatedMasterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmCountInput">WarmCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmEnabledInput">WarmEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmTypeInput">WarmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput">ZoneAwarenessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput">ZoneAwarenessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCount">DedicatedMasterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">DedicatedMasterEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterType">DedicatedMasterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmCount">WarmCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmEnabled">WarmEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmType">WarmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">ZoneAwarenessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColdStorageOptions`<sup>Required</sup> <a name="ColdStorageOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```csharp
public ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference ColdStorageOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference">ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `ZoneAwarenessConfig`<sup>Required</sup> <a name="ZoneAwarenessConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```csharp
public ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference ZoneAwarenessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference">ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `ColdStorageOptionsInput`<sup>Optional</sup> <a name="ColdStorageOptionsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput"></a>

```csharp
public ElasticsearchDomainClusterConfigColdStorageOptions ColdStorageOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a>

---

##### `DedicatedMasterCountInput`<sup>Optional</sup> <a name="DedicatedMasterCountInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput"></a>

```csharp
public double DedicatedMasterCountInput { get; }
```

- *Type:* double

---

##### `DedicatedMasterEnabledInput`<sup>Optional</sup> <a name="DedicatedMasterEnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput"></a>

```csharp
public object DedicatedMasterEnabledInput { get; }
```

- *Type:* object

---

##### `DedicatedMasterTypeInput`<sup>Optional</sup> <a name="DedicatedMasterTypeInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput"></a>

```csharp
public string DedicatedMasterTypeInput { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `WarmCountInput`<sup>Optional</sup> <a name="WarmCountInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmCountInput"></a>

```csharp
public double WarmCountInput { get; }
```

- *Type:* double

---

##### `WarmEnabledInput`<sup>Optional</sup> <a name="WarmEnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmEnabledInput"></a>

```csharp
public object WarmEnabledInput { get; }
```

- *Type:* object

---

##### `WarmTypeInput`<sup>Optional</sup> <a name="WarmTypeInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmTypeInput"></a>

```csharp
public string WarmTypeInput { get; }
```

- *Type:* string

---

##### `ZoneAwarenessConfigInput`<sup>Optional</sup> <a name="ZoneAwarenessConfigInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput"></a>

```csharp
public ElasticsearchDomainClusterConfigZoneAwarenessConfig ZoneAwarenessConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

---

##### `ZoneAwarenessEnabledInput`<sup>Optional</sup> <a name="ZoneAwarenessEnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput"></a>

```csharp
public object ZoneAwarenessEnabledInput { get; }
```

- *Type:* object

---

##### `DedicatedMasterCount`<sup>Required</sup> <a name="DedicatedMasterCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```csharp
public double DedicatedMasterCount { get; }
```

- *Type:* double

---

##### `DedicatedMasterEnabled`<sup>Required</sup> <a name="DedicatedMasterEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```csharp
public object DedicatedMasterEnabled { get; }
```

- *Type:* object

---

##### `DedicatedMasterType`<sup>Required</sup> <a name="DedicatedMasterType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```csharp
public string DedicatedMasterType { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `WarmCount`<sup>Required</sup> <a name="WarmCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmCount"></a>

```csharp
public double WarmCount { get; }
```

- *Type:* double

---

##### `WarmEnabled`<sup>Required</sup> <a name="WarmEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmEnabled"></a>

```csharp
public object WarmEnabled { get; }
```

- *Type:* object

---

##### `WarmType`<sup>Required</sup> <a name="WarmType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmType"></a>

```csharp
public string WarmType { get; }
```

- *Type:* string

---

##### `ZoneAwarenessEnabled`<sup>Required</sup> <a name="ZoneAwarenessEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```csharp
public object ZoneAwarenessEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainClusterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a>

---


### ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference <a name="ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount">ResetAvailabilityZoneCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZoneCount` <a name="ResetAvailabilityZoneCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount"></a>

```csharp
private void ResetAvailabilityZoneCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput">AvailabilityZoneCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">AvailabilityZoneCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneCountInput`<sup>Optional</sup> <a name="AvailabilityZoneCountInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput"></a>

```csharp
public double AvailabilityZoneCountInput { get; }
```

- *Type:* double

---

##### `AvailabilityZoneCount`<sup>Required</sup> <a name="AvailabilityZoneCount" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```csharp
public double AvailabilityZoneCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainClusterConfigZoneAwarenessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

---


### ElasticsearchDomainCognitoOptionsOutputReference <a name="ElasticsearchDomainCognitoOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainCognitoOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput"></a>

```csharp
public string IdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainCognitoOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a>

---


### ElasticsearchDomainDomainEndpointOptionsOutputReference <a name="ElasticsearchDomainDomainEndpointOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainDomainEndpointOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint">ResetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn">ResetCustomEndpointCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled">ResetCustomEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps">ResetEnforceHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">ResetTlsSecurityPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomEndpoint` <a name="ResetCustomEndpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint"></a>

```csharp
private void ResetCustomEndpoint()
```

##### `ResetCustomEndpointCertificateArn` <a name="ResetCustomEndpointCertificateArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn"></a>

```csharp
private void ResetCustomEndpointCertificateArn()
```

##### `ResetCustomEndpointEnabled` <a name="ResetCustomEndpointEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled"></a>

```csharp
private void ResetCustomEndpointEnabled()
```

##### `ResetEnforceHttps` <a name="ResetEnforceHttps" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```csharp
private void ResetEnforceHttps()
```

##### `ResetTlsSecurityPolicy` <a name="ResetTlsSecurityPolicy" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```csharp
private void ResetTlsSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput">CustomEndpointCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput">CustomEndpointEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput">CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput">EnforceHttpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">TlsSecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint">CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">CustomEndpointCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">CustomEndpointEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps">EnforceHttps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">TlsSecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomEndpointCertificateArnInput`<sup>Optional</sup> <a name="CustomEndpointCertificateArnInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput"></a>

```csharp
public string CustomEndpointCertificateArnInput { get; }
```

- *Type:* string

---

##### `CustomEndpointEnabledInput`<sup>Optional</sup> <a name="CustomEndpointEnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput"></a>

```csharp
public object CustomEndpointEnabledInput { get; }
```

- *Type:* object

---

##### `CustomEndpointInput`<sup>Optional</sup> <a name="CustomEndpointInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput"></a>

```csharp
public string CustomEndpointInput { get; }
```

- *Type:* string

---

##### `EnforceHttpsInput`<sup>Optional</sup> <a name="EnforceHttpsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```csharp
public object EnforceHttpsInput { get; }
```

- *Type:* object

---

##### `TlsSecurityPolicyInput`<sup>Optional</sup> <a name="TlsSecurityPolicyInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```csharp
public string TlsSecurityPolicyInput { get; }
```

- *Type:* string

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```csharp
public string CustomEndpoint { get; }
```

- *Type:* string

---

##### `CustomEndpointCertificateArn`<sup>Required</sup> <a name="CustomEndpointCertificateArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```csharp
public string CustomEndpointCertificateArn { get; }
```

- *Type:* string

---

##### `CustomEndpointEnabled`<sup>Required</sup> <a name="CustomEndpointEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```csharp
public object CustomEndpointEnabled { get; }
```

- *Type:* object

---

##### `EnforceHttps`<sup>Required</sup> <a name="EnforceHttps" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```csharp
public object EnforceHttps { get; }
```

- *Type:* object

---

##### `TlsSecurityPolicy`<sup>Required</sup> <a name="TlsSecurityPolicy" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```csharp
public string TlsSecurityPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainDomainEndpointOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a>

---


### ElasticsearchDomainEbsOptionsOutputReference <a name="ElasticsearchDomainEbsOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainEbsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabledInput">EbsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabled">EbsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsEnabledInput`<sup>Optional</sup> <a name="EbsEnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabledInput"></a>

```csharp
public object EbsEnabledInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `EbsEnabled`<sup>Required</sup> <a name="EbsEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```csharp
public object EbsEnabled { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainEbsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a>

---


### ElasticsearchDomainEncryptAtRestOutputReference <a name="ElasticsearchDomainEncryptAtRestOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainEncryptAtRestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainEncryptAtRest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a>

---


### ElasticsearchDomainLogPublishingOptionsList <a name="ElasticsearchDomainLogPublishingOptionsList" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainLogPublishingOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.get"></a>

```csharp
private ElasticsearchDomainLogPublishingOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticsearchDomainLogPublishingOptionsOutputReference <a name="ElasticsearchDomainLogPublishingOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainLogPublishingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput">CloudwatchLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="CloudwatchLogGroupArnInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput"></a>

```csharp
public string CloudwatchLogGroupArnInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticsearchDomainNodeToNodeEncryptionOutputReference <a name="ElasticsearchDomainNodeToNodeEncryptionOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainNodeToNodeEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainNodeToNodeEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a>

---


### ElasticsearchDomainSnapshotOptionsOutputReference <a name="ElasticsearchDomainSnapshotOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainSnapshotOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput">AutomatedSnapshotStartHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">AutomatedSnapshotStartHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomatedSnapshotStartHourInput`<sup>Optional</sup> <a name="AutomatedSnapshotStartHourInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput"></a>

```csharp
public double AutomatedSnapshotStartHourInput { get; }
```

- *Type:* double

---

##### `AutomatedSnapshotStartHour`<sup>Required</sup> <a name="AutomatedSnapshotStartHour" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```csharp
public double AutomatedSnapshotStartHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainSnapshotOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a>

---


### ElasticsearchDomainTimeoutsOutputReference <a name="ElasticsearchDomainTimeoutsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticsearchDomainVpcOptionsOutputReference <a name="ElasticsearchDomainVpcOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchDomainVpcOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchDomainVpcOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a>

---




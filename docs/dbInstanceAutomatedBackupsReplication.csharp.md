# `dbInstanceAutomatedBackupsReplication` Submodule <a name="`dbInstanceAutomatedBackupsReplication` Submodule" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbInstanceAutomatedBackupsReplication <a name="DbInstanceAutomatedBackupsReplication" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication aws_db_instance_automated_backups_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceAutomatedBackupsReplication(Construct Scope, string Id, DbInstanceAutomatedBackupsReplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig">DbInstanceAutomatedBackupsReplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig">DbInstanceAutomatedBackupsReplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetPreSignedUrl">ResetPreSignedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts"></a>

```csharp
private void PutTimeouts(DbInstanceAutomatedBackupsReplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetPreSignedUrl` <a name="ResetPreSignedUrl" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetPreSignedUrl"></a>

```csharp
private void ResetPreSignedUrl()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetRetentionPeriod"></a>

```csharp
private void ResetRetentionPeriod()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DbInstanceAutomatedBackupsReplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DbInstanceAutomatedBackupsReplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DbInstanceAutomatedBackupsReplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference">DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrlInput">PreSignedUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArnInput">SourceDbInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrl">PreSignedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArn">SourceDbInstanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeouts"></a>

```csharp
public DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference">DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PreSignedUrlInput`<sup>Optional</sup> <a name="PreSignedUrlInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrlInput"></a>

```csharp
public string PreSignedUrlInput { get; }
```

- *Type:* string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriodInput"></a>

```csharp
public double RetentionPeriodInput { get; }
```

- *Type:* double

---

##### `SourceDbInstanceArnInput`<sup>Optional</sup> <a name="SourceDbInstanceArnInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArnInput"></a>

```csharp
public string SourceDbInstanceArnInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PreSignedUrl`<sup>Required</sup> <a name="PreSignedUrl" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.preSignedUrl"></a>

```csharp
public string PreSignedUrl { get; }
```

- *Type:* string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; }
```

- *Type:* double

---

##### `SourceDbInstanceArn`<sup>Required</sup> <a name="SourceDbInstanceArn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.sourceDbInstanceArn"></a>

```csharp
public string SourceDbInstanceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DbInstanceAutomatedBackupsReplicationConfig <a name="DbInstanceAutomatedBackupsReplicationConfig" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceAutomatedBackupsReplicationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SourceDbInstanceArn,
    string Id = null,
    string KmsKeyId = null,
    string PreSignedUrl = null,
    double RetentionPeriod = null,
    DbInstanceAutomatedBackupsReplicationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.sourceDbInstanceArn">SourceDbInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.preSignedUrl">PreSignedUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SourceDbInstanceArn`<sup>Required</sup> <a name="SourceDbInstanceArn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.sourceDbInstanceArn"></a>

```csharp
public string SourceDbInstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}.

---

##### `PreSignedUrl`<sup>Optional</sup> <a name="PreSignedUrl" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.preSignedUrl"></a>

```csharp
public string PreSignedUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}.

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationConfig.property.timeouts"></a>

```csharp
public DbInstanceAutomatedBackupsReplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts">DbInstanceAutomatedBackupsReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#timeouts DbInstanceAutomatedBackupsReplication#timeouts}

---

### DbInstanceAutomatedBackupsReplicationTimeouts <a name="DbInstanceAutomatedBackupsReplicationTimeouts" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceAutomatedBackupsReplicationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#create DbInstanceAutomatedBackupsReplication#create}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#delete DbInstanceAutomatedBackupsReplication#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#create DbInstanceAutomatedBackupsReplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_automated_backups_replication#delete DbInstanceAutomatedBackupsReplication#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference <a name="DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbInstanceAutomatedBackupsReplication.DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




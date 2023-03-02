# `configRemediationConfiguration` Submodule <a name="`configRemediationConfiguration` Submodule" id="@cdktf/provider-aws.configRemediationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigRemediationConfiguration <a name="ConfigRemediationConfiguration" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration aws_config_remediation_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/provider-aws'

new configRemediationConfiguration.ConfigRemediationConfiguration(scope: Construct, id: string, config: ConfigRemediationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig">ConfigRemediationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig">ConfigRemediationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls">putExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetAutomatic">resetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetExecutionControls">resetExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetMaximumAutomaticAttempts">resetMaximumAutomaticAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetRetryAttemptSeconds">resetRetryAttemptSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetTargetVersion">resetTargetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putExecutionControls` <a name="putExecutionControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls"></a>

```typescript
public putExecutionControls(value: ConfigRemediationConfigurationExecutionControls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putParameter"></a>

```typescript
public putParameter(value: IResolvable | ConfigRemediationConfigurationParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetAutomatic"></a>

```typescript
public resetAutomatic(): void
```

##### `resetExecutionControls` <a name="resetExecutionControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetExecutionControls"></a>

```typescript
public resetExecutionControls(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaximumAutomaticAttempts` <a name="resetMaximumAutomaticAttempts" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetMaximumAutomaticAttempts"></a>

```typescript
public resetMaximumAutomaticAttempts(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetRetryAttemptSeconds` <a name="resetRetryAttemptSeconds" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetRetryAttemptSeconds"></a>

```typescript
public resetRetryAttemptSeconds(): void
```

##### `resetTargetVersion` <a name="resetTargetVersion" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetTargetVersion"></a>

```typescript
public resetTargetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/provider-aws'

configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/provider-aws'

configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/provider-aws'

configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControls">executionControls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference">ConfigRemediationConfigurationExecutionControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList">ConfigRemediationConfigurationParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.automaticInput">automaticInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleNameInput">configRuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControlsInput">executionControlsInput</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttemptsInput">maximumAutomaticAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSecondsInput">retryAttemptSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetTypeInput">targetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersionInput">targetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.automatic">automatic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleName">configRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttempts">maximumAutomaticAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSeconds">retryAttemptSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `executionControls`<sup>Required</sup> <a name="executionControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControls"></a>

```typescript
public readonly executionControls: ConfigRemediationConfigurationExecutionControlsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference">ConfigRemediationConfigurationExecutionControlsOutputReference</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameter"></a>

```typescript
public readonly parameter: ConfigRemediationConfigurationParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList">ConfigRemediationConfigurationParameterList</a>

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.automaticInput"></a>

```typescript
public readonly automaticInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configRuleNameInput`<sup>Optional</sup> <a name="configRuleNameInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleNameInput"></a>

```typescript
public readonly configRuleNameInput: string;
```

- *Type:* string

---

##### `executionControlsInput`<sup>Optional</sup> <a name="executionControlsInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControlsInput"></a>

```typescript
public readonly executionControlsInput: ConfigRemediationConfigurationExecutionControls;
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maximumAutomaticAttemptsInput`<sup>Optional</sup> <a name="maximumAutomaticAttemptsInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttemptsInput"></a>

```typescript
public readonly maximumAutomaticAttemptsInput: number;
```

- *Type:* number

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | ConfigRemediationConfigurationParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `retryAttemptSecondsInput`<sup>Optional</sup> <a name="retryAttemptSecondsInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSecondsInput"></a>

```typescript
public readonly retryAttemptSecondsInput: number;
```

- *Type:* number

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetTypeInput"></a>

```typescript
public readonly targetTypeInput: string;
```

- *Type:* string

---

##### `targetVersionInput`<sup>Optional</sup> <a name="targetVersionInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersionInput"></a>

```typescript
public readonly targetVersionInput: string;
```

- *Type:* string

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.automatic"></a>

```typescript
public readonly automatic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configRuleName`<sup>Required</sup> <a name="configRuleName" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleName"></a>

```typescript
public readonly configRuleName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maximumAutomaticAttempts`<sup>Required</sup> <a name="maximumAutomaticAttempts" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttempts"></a>

```typescript
public readonly maximumAutomaticAttempts: number;
```

- *Type:* number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `retryAttemptSeconds`<sup>Required</sup> <a name="retryAttemptSeconds" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSeconds"></a>

```typescript
public readonly retryAttemptSeconds: number;
```

- *Type:* number

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigRemediationConfigurationConfig <a name="ConfigRemediationConfigurationConfig" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/provider-aws'

const configRemediationConfigurationConfig: configRemediationConfiguration.ConfigRemediationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.configRuleName">configRuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetType">targetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.automatic">automatic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.executionControls">executionControls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | execution_controls block. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#id ConfigRemediationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.maximumAutomaticAttempts">maximumAutomaticAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.retryAttemptSeconds">retryAttemptSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetVersion">targetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configRuleName`<sup>Required</sup> <a name="configRuleName" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.configRuleName"></a>

```typescript
public readonly configRuleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}.

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.automatic"></a>

```typescript
public readonly automatic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}.

---

##### `executionControls`<sup>Optional</sup> <a name="executionControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.executionControls"></a>

```typescript
public readonly executionControls: ConfigRemediationConfigurationExecutionControls;
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

execution_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#execution_controls ConfigRemediationConfiguration#execution_controls}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#id ConfigRemediationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumAutomaticAttempts`<sup>Optional</sup> <a name="maximumAutomaticAttempts" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.maximumAutomaticAttempts"></a>

```typescript
public readonly maximumAutomaticAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | ConfigRemediationConfigurationParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#parameter ConfigRemediationConfiguration#parameter}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}.

---

##### `retryAttemptSeconds`<sup>Optional</sup> <a name="retryAttemptSeconds" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.retryAttemptSeconds"></a>

```typescript
public readonly retryAttemptSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}.

---

##### `targetVersion`<sup>Optional</sup> <a name="targetVersion" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}.

---

### ConfigRemediationConfigurationExecutionControls <a name="ConfigRemediationConfigurationExecutionControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/provider-aws'

const configRemediationConfigurationExecutionControls: configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.property.ssmControls">ssmControls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | ssm_controls block. |

---

##### `ssmControls`<sup>Optional</sup> <a name="ssmControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.property.ssmControls"></a>

```typescript
public readonly ssmControls: ConfigRemediationConfigurationExecutionControlsSsmControls;
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

ssm_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#ssm_controls ConfigRemediationConfiguration#ssm_controls}

---

### ConfigRemediationConfigurationExecutionControlsSsmControls <a name="ConfigRemediationConfigurationExecutionControlsSsmControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/provider-aws'

const configRemediationConfigurationExecutionControlsSsmControls: configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.concurrentExecutionRatePercentage">concurrentExecutionRatePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.errorPercentage">errorPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}. |

---

##### `concurrentExecutionRatePercentage`<sup>Optional</sup> <a name="concurrentExecutionRatePercentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.concurrentExecutionRatePercentage"></a>

```typescript
public readonly concurrentExecutionRatePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}.

---

##### `errorPercentage`<sup>Optional</sup> <a name="errorPercentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.errorPercentage"></a>

```typescript
public readonly errorPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}.

---

### ConfigRemediationConfigurationParameter <a name="ConfigRemediationConfigurationParameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/provider-aws'

const configRemediationConfigurationParameter: configRemediationConfiguration.ConfigRemediationConfigurationParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#name ConfigRemediationConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.resourceValue">resourceValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_value ConfigRemediationConfiguration#resource_value}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValue">staticValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_value ConfigRemediationConfiguration#static_value}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValues">staticValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_values ConfigRemediationConfiguration#static_values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#name ConfigRemediationConfiguration#name}.

---

##### `resourceValue`<sup>Optional</sup> <a name="resourceValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.resourceValue"></a>

```typescript
public readonly resourceValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_value ConfigRemediationConfiguration#resource_value}.

---

##### `staticValue`<sup>Optional</sup> <a name="staticValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValue"></a>

```typescript
public readonly staticValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_value ConfigRemediationConfiguration#static_value}.

---

##### `staticValues`<sup>Optional</sup> <a name="staticValues" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValues"></a>

```typescript
public readonly staticValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_values ConfigRemediationConfiguration#static_values}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigRemediationConfigurationExecutionControlsOutputReference <a name="ConfigRemediationConfigurationExecutionControlsOutputReference" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/provider-aws'

new configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls">putSsmControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resetSsmControls">resetSsmControls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSsmControls` <a name="putSsmControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls"></a>

```typescript
public putSsmControls(value: ConfigRemediationConfigurationExecutionControlsSsmControls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---

##### `resetSsmControls` <a name="resetSsmControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resetSsmControls"></a>

```typescript
public resetSsmControls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControls">ssmControls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference">ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControlsInput">ssmControlsInput</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ssmControls`<sup>Required</sup> <a name="ssmControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControls"></a>

```typescript
public readonly ssmControls: ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference">ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference</a>

---

##### `ssmControlsInput`<sup>Optional</sup> <a name="ssmControlsInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControlsInput"></a>

```typescript
public readonly ssmControlsInput: ConfigRemediationConfigurationExecutionControlsSsmControls;
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigRemediationConfigurationExecutionControls;
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---


### ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference <a name="ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/provider-aws'

new configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetConcurrentExecutionRatePercentage">resetConcurrentExecutionRatePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetErrorPercentage">resetErrorPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConcurrentExecutionRatePercentage` <a name="resetConcurrentExecutionRatePercentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetConcurrentExecutionRatePercentage"></a>

```typescript
public resetConcurrentExecutionRatePercentage(): void
```

##### `resetErrorPercentage` <a name="resetErrorPercentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetErrorPercentage"></a>

```typescript
public resetErrorPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentageInput">concurrentExecutionRatePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentageInput">errorPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentage">concurrentExecutionRatePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentage">errorPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `concurrentExecutionRatePercentageInput`<sup>Optional</sup> <a name="concurrentExecutionRatePercentageInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentageInput"></a>

```typescript
public readonly concurrentExecutionRatePercentageInput: number;
```

- *Type:* number

---

##### `errorPercentageInput`<sup>Optional</sup> <a name="errorPercentageInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentageInput"></a>

```typescript
public readonly errorPercentageInput: number;
```

- *Type:* number

---

##### `concurrentExecutionRatePercentage`<sup>Required</sup> <a name="concurrentExecutionRatePercentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentage"></a>

```typescript
public readonly concurrentExecutionRatePercentage: number;
```

- *Type:* number

---

##### `errorPercentage`<sup>Required</sup> <a name="errorPercentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentage"></a>

```typescript
public readonly errorPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigRemediationConfigurationExecutionControlsSsmControls;
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---


### ConfigRemediationConfigurationParameterList <a name="ConfigRemediationConfigurationParameterList" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/provider-aws'

new configRemediationConfiguration.ConfigRemediationConfigurationParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.get"></a>

```typescript
public get(index: number): ConfigRemediationConfigurationParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigRemediationConfigurationParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]

---


### ConfigRemediationConfigurationParameterOutputReference <a name="ConfigRemediationConfigurationParameterOutputReference" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/provider-aws'

new configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetResourceValue">resetResourceValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValue">resetStaticValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValues">resetStaticValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceValue` <a name="resetResourceValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetResourceValue"></a>

```typescript
public resetResourceValue(): void
```

##### `resetStaticValue` <a name="resetStaticValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValue"></a>

```typescript
public resetStaticValue(): void
```

##### `resetStaticValues` <a name="resetStaticValues" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValues"></a>

```typescript
public resetStaticValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValueInput">resourceValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValueInput">staticValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValuesInput">staticValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValue">resourceValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValue">staticValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValues">staticValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceValueInput`<sup>Optional</sup> <a name="resourceValueInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValueInput"></a>

```typescript
public readonly resourceValueInput: string;
```

- *Type:* string

---

##### `staticValueInput`<sup>Optional</sup> <a name="staticValueInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValueInput"></a>

```typescript
public readonly staticValueInput: string;
```

- *Type:* string

---

##### `staticValuesInput`<sup>Optional</sup> <a name="staticValuesInput" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValuesInput"></a>

```typescript
public readonly staticValuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceValue`<sup>Required</sup> <a name="resourceValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValue"></a>

```typescript
public readonly resourceValue: string;
```

- *Type:* string

---

##### `staticValue`<sup>Required</sup> <a name="staticValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValue"></a>

```typescript
public readonly staticValue: string;
```

- *Type:* string

---

##### `staticValues`<sup>Required</sup> <a name="staticValues" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValues"></a>

```typescript
public readonly staticValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigRemediationConfigurationParameter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a> | cdktf.IResolvable

---




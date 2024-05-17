# `dataAwsEcsTaskExecution` Submodule <a name="`dataAwsEcsTaskExecution` Submodule" id="@cdktf/provider-aws.dataAwsEcsTaskExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcsTaskExecution <a name="DataAwsEcsTaskExecution" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution aws_ecs_task_execution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecution(scope: Construct, id: string, config: DataAwsEcsTaskExecutionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig">DataAwsEcsTaskExecutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig">DataAwsEcsTaskExecutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putCapacityProviderStrategy">putCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementConstraints">putPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementStrategy">putPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetCapacityProviderStrategy">resetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetDesiredCount">resetDesiredCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetEnableEcsManagedTags">resetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetEnableExecuteCommand">resetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetLaunchType">resetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlacementConstraints">resetPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlacementStrategy">resetPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetReferenceId">resetReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetStartedBy">resetStartedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCapacityProviderStrategy` <a name="putCapacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putCapacityProviderStrategy"></a>

```typescript
public putCapacityProviderStrategy(value: IResolvable | DataAwsEcsTaskExecutionCapacityProviderStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>[]

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: DataAwsEcsTaskExecutionNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

---

##### `putOverrides` <a name="putOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides"></a>

```typescript
public putOverrides(value: DataAwsEcsTaskExecutionOverrides): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

---

##### `putPlacementConstraints` <a name="putPlacementConstraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementConstraints"></a>

```typescript
public putPlacementConstraints(value: IResolvable | DataAwsEcsTaskExecutionPlacementConstraints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementConstraints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>[]

---

##### `putPlacementStrategy` <a name="putPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementStrategy"></a>

```typescript
public putPlacementStrategy(value: IResolvable | DataAwsEcsTaskExecutionPlacementStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>[]

---

##### `resetCapacityProviderStrategy` <a name="resetCapacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetCapacityProviderStrategy"></a>

```typescript
public resetCapacityProviderStrategy(): void
```

##### `resetClientToken` <a name="resetClientToken" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetDesiredCount` <a name="resetDesiredCount" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetDesiredCount"></a>

```typescript
public resetDesiredCount(): void
```

##### `resetEnableEcsManagedTags` <a name="resetEnableEcsManagedTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetEnableEcsManagedTags"></a>

```typescript
public resetEnableEcsManagedTags(): void
```

##### `resetEnableExecuteCommand` <a name="resetEnableExecuteCommand" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetEnableExecuteCommand"></a>

```typescript
public resetEnableExecuteCommand(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLaunchType` <a name="resetLaunchType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetLaunchType"></a>

```typescript
public resetLaunchType(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetOverrides"></a>

```typescript
public resetOverrides(): void
```

##### `resetPlacementConstraints` <a name="resetPlacementConstraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlacementConstraints"></a>

```typescript
public resetPlacementConstraints(): void
```

##### `resetPlacementStrategy` <a name="resetPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlacementStrategy"></a>

```typescript
public resetPlacementStrategy(): void
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlatformVersion"></a>

```typescript
public resetPlatformVersion(): void
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPropagateTags"></a>

```typescript
public resetPropagateTags(): void
```

##### `resetReferenceId` <a name="resetReferenceId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetReferenceId"></a>

```typescript
public resetReferenceId(): void
```

##### `resetStartedBy` <a name="resetStartedBy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetStartedBy"></a>

```typescript
public resetStartedBy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEcsTaskExecution resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isConstruct"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformElement"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformDataSource"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsEcsTaskExecution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEcsTaskExecution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEcsTaskExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEcsTaskExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList">DataAwsEcsTaskExecutionCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference">DataAwsEcsTaskExecutionNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference">DataAwsEcsTaskExecutionOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList">DataAwsEcsTaskExecutionPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementStrategy">placementStrategy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList">DataAwsEcsTaskExecutionPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskArns">taskArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.capacityProviderStrategyInput">capacityProviderStrategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.desiredCountInput">desiredCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableEcsManagedTagsInput">enableEcsManagedTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableExecuteCommandInput">enableExecuteCommandInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.launchTypeInput">launchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.overridesInput">overridesInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementConstraintsInput">placementConstraintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementStrategyInput">placementStrategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.platformVersionInput">platformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.propagateTagsInput">propagateTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.referenceIdInput">referenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.startedByInput">startedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskDefinitionInput">taskDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.desiredCount">desiredCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.launchType">launchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.propagateTags">propagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.referenceId">referenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.startedBy">startedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskDefinition">taskDefinition</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: DataAwsEcsTaskExecutionCapacityProviderStrategyList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList">DataAwsEcsTaskExecutionCapacityProviderStrategyList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataAwsEcsTaskExecutionNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference">DataAwsEcsTaskExecutionNetworkConfigurationOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.overrides"></a>

```typescript
public readonly overrides: DataAwsEcsTaskExecutionOverridesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference">DataAwsEcsTaskExecutionOverridesOutputReference</a>

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: DataAwsEcsTaskExecutionPlacementConstraintsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList">DataAwsEcsTaskExecutionPlacementConstraintsList</a>

---

##### `placementStrategy`<sup>Required</sup> <a name="placementStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementStrategy"></a>

```typescript
public readonly placementStrategy: DataAwsEcsTaskExecutionPlacementStrategyList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList">DataAwsEcsTaskExecutionPlacementStrategyList</a>

---

##### `taskArns`<sup>Required</sup> <a name="taskArns" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskArns"></a>

```typescript
public readonly taskArns: string[];
```

- *Type:* string[]

---

##### `capacityProviderStrategyInput`<sup>Optional</sup> <a name="capacityProviderStrategyInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.capacityProviderStrategyInput"></a>

```typescript
public readonly capacityProviderStrategyInput: IResolvable | DataAwsEcsTaskExecutionCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>[]

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `desiredCountInput`<sup>Optional</sup> <a name="desiredCountInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.desiredCountInput"></a>

```typescript
public readonly desiredCountInput: number;
```

- *Type:* number

---

##### `enableEcsManagedTagsInput`<sup>Optional</sup> <a name="enableEcsManagedTagsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableEcsManagedTagsInput"></a>

```typescript
public readonly enableEcsManagedTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableExecuteCommandInput`<sup>Optional</sup> <a name="enableExecuteCommandInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableExecuteCommandInput"></a>

```typescript
public readonly enableExecuteCommandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `launchTypeInput`<sup>Optional</sup> <a name="launchTypeInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.launchTypeInput"></a>

```typescript
public readonly launchTypeInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: DataAwsEcsTaskExecutionNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.overridesInput"></a>

```typescript
public readonly overridesInput: DataAwsEcsTaskExecutionOverrides;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

---

##### `placementConstraintsInput`<sup>Optional</sup> <a name="placementConstraintsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementConstraintsInput"></a>

```typescript
public readonly placementConstraintsInput: IResolvable | DataAwsEcsTaskExecutionPlacementConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>[]

---

##### `placementStrategyInput`<sup>Optional</sup> <a name="placementStrategyInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementStrategyInput"></a>

```typescript
public readonly placementStrategyInput: IResolvable | DataAwsEcsTaskExecutionPlacementStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>[]

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.platformVersionInput"></a>

```typescript
public readonly platformVersionInput: string;
```

- *Type:* string

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.propagateTagsInput"></a>

```typescript
public readonly propagateTagsInput: string;
```

- *Type:* string

---

##### `referenceIdInput`<sup>Optional</sup> <a name="referenceIdInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.referenceIdInput"></a>

```typescript
public readonly referenceIdInput: string;
```

- *Type:* string

---

##### `startedByInput`<sup>Optional</sup> <a name="startedByInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.startedByInput"></a>

```typescript
public readonly startedByInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskDefinitionInput`<sup>Optional</sup> <a name="taskDefinitionInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskDefinitionInput"></a>

```typescript
public readonly taskDefinitionInput: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `desiredCount`<sup>Required</sup> <a name="desiredCount" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableEcsManagedTags"></a>

```typescript
public readonly enableEcsManagedTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

---

##### `startedBy`<sup>Required</sup> <a name="startedBy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.startedBy"></a>

```typescript
public readonly startedBy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcsTaskExecutionCapacityProviderStrategy <a name="DataAwsEcsTaskExecutionCapacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

const dataAwsEcsTaskExecutionCapacityProviderStrategy: dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#capacity_provider DataAwsEcsTaskExecution#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.base">base</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#base DataAwsEcsTaskExecution#base}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#weight DataAwsEcsTaskExecution#weight}. |

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#capacity_provider DataAwsEcsTaskExecution#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#base DataAwsEcsTaskExecution#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#weight DataAwsEcsTaskExecution#weight}.

---

### DataAwsEcsTaskExecutionConfig <a name="DataAwsEcsTaskExecutionConfig" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

const dataAwsEcsTaskExecutionConfig: dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.cluster">cluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#cluster DataAwsEcsTaskExecution#cluster}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.taskDefinition">taskDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#task_definition DataAwsEcsTaskExecution#task_definition}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>[]</code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.clientToken">clientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#client_token DataAwsEcsTaskExecution#client_token}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.desiredCount">desiredCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#desired_count DataAwsEcsTaskExecution#desired_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#enable_ecs_managed_tags DataAwsEcsTaskExecution#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#enable_execute_command DataAwsEcsTaskExecution#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.group">group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#group DataAwsEcsTaskExecution#group}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#id DataAwsEcsTaskExecution#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.launchType">launchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#launch_type DataAwsEcsTaskExecution#launch_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.placementConstraints">placementConstraints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>[]</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.placementStrategy">placementStrategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>[]</code> | placement_strategy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.platformVersion">platformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#platform_version DataAwsEcsTaskExecution#platform_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.propagateTags">propagateTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#propagate_tags DataAwsEcsTaskExecution#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.referenceId">referenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#reference_id DataAwsEcsTaskExecution#reference_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.startedBy">startedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#started_by DataAwsEcsTaskExecution#started_by}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#tags DataAwsEcsTaskExecution#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#cluster DataAwsEcsTaskExecution#cluster}.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#task_definition DataAwsEcsTaskExecution#task_definition}.

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: IResolvable | DataAwsEcsTaskExecutionCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>[]

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#capacity_provider_strategy DataAwsEcsTaskExecution#capacity_provider_strategy}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#client_token DataAwsEcsTaskExecution#client_token}.

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#desired_count DataAwsEcsTaskExecution#desired_count}.

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.enableEcsManagedTags"></a>

```typescript
public readonly enableEcsManagedTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#enable_ecs_managed_tags DataAwsEcsTaskExecution#enable_ecs_managed_tags}.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#enable_execute_command DataAwsEcsTaskExecution#enable_execute_command}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#group DataAwsEcsTaskExecution#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#id DataAwsEcsTaskExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#launch_type DataAwsEcsTaskExecution#launch_type}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataAwsEcsTaskExecutionNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#network_configuration DataAwsEcsTaskExecution#network_configuration}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.overrides"></a>

```typescript
public readonly overrides: DataAwsEcsTaskExecutionOverrides;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#overrides DataAwsEcsTaskExecution#overrides}

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: IResolvable | DataAwsEcsTaskExecutionPlacementConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>[]

placement_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#placement_constraints DataAwsEcsTaskExecution#placement_constraints}

---

##### `placementStrategy`<sup>Optional</sup> <a name="placementStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.placementStrategy"></a>

```typescript
public readonly placementStrategy: IResolvable | DataAwsEcsTaskExecutionPlacementStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>[]

placement_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#placement_strategy DataAwsEcsTaskExecution#placement_strategy}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#platform_version DataAwsEcsTaskExecution#platform_version}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#propagate_tags DataAwsEcsTaskExecution#propagate_tags}.

---

##### `referenceId`<sup>Optional</sup> <a name="referenceId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#reference_id DataAwsEcsTaskExecution#reference_id}.

---

##### `startedBy`<sup>Optional</sup> <a name="startedBy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.startedBy"></a>

```typescript
public readonly startedBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#started_by DataAwsEcsTaskExecution#started_by}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#tags DataAwsEcsTaskExecution#tags}.

---

### DataAwsEcsTaskExecutionNetworkConfiguration <a name="DataAwsEcsTaskExecutionNetworkConfiguration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

const dataAwsEcsTaskExecutionNetworkConfiguration: dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#subnets DataAwsEcsTaskExecution#subnets}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#assign_public_ip DataAwsEcsTaskExecution#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#security_groups DataAwsEcsTaskExecution#security_groups}. |

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#subnets DataAwsEcsTaskExecution#subnets}.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#assign_public_ip DataAwsEcsTaskExecution#assign_public_ip}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#security_groups DataAwsEcsTaskExecution#security_groups}.

---

### DataAwsEcsTaskExecutionOverrides <a name="DataAwsEcsTaskExecutionOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

const dataAwsEcsTaskExecutionOverrides: dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.containerOverrides">containerOverrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>[]</code> | container_overrides block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.cpu">cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#execution_role_arn DataAwsEcsTaskExecution#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.inferenceAcceleratorOverrides">inferenceAcceleratorOverrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>[]</code> | inference_accelerator_overrides block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.memory">memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.taskRoleArn">taskRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#task_role_arn DataAwsEcsTaskExecution#task_role_arn}. |

---

##### `containerOverrides`<sup>Optional</sup> <a name="containerOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.containerOverrides"></a>

```typescript
public readonly containerOverrides: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>[]

container_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#container_overrides DataAwsEcsTaskExecution#container_overrides}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}.

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#execution_role_arn DataAwsEcsTaskExecution#execution_role_arn}.

---

##### `inferenceAcceleratorOverrides`<sup>Optional</sup> <a name="inferenceAcceleratorOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.inferenceAcceleratorOverrides"></a>

```typescript
public readonly inferenceAcceleratorOverrides: IResolvable | DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>[]

inference_accelerator_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#inference_accelerator_overrides DataAwsEcsTaskExecution#inference_accelerator_overrides}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}.

---

##### `taskRoleArn`<sup>Optional</sup> <a name="taskRoleArn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.taskRoleArn"></a>

```typescript
public readonly taskRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#task_role_arn DataAwsEcsTaskExecution#task_role_arn}.

---

### DataAwsEcsTaskExecutionOverridesContainerOverrides <a name="DataAwsEcsTaskExecutionOverridesContainerOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

const dataAwsEcsTaskExecutionOverridesContainerOverrides: dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#name DataAwsEcsTaskExecution#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#command DataAwsEcsTaskExecution#command}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.cpu">cpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.environment">environment</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>[]</code> | environment block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.memory">memory</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#memory_reservation DataAwsEcsTaskExecution#memory_reservation}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.resourceRequirements">resourceRequirements</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>[]</code> | resource_requirements block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#name DataAwsEcsTaskExecution#name}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#command DataAwsEcsTaskExecution#command}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.environment"></a>

```typescript
public readonly environment: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>[]

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#environment DataAwsEcsTaskExecution#environment}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}.

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#memory_reservation DataAwsEcsTaskExecution#memory_reservation}.

---

##### `resourceRequirements`<sup>Optional</sup> <a name="resourceRequirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.resourceRequirements"></a>

```typescript
public readonly resourceRequirements: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>[]

resource_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#resource_requirements DataAwsEcsTaskExecution#resource_requirements}

---

### DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

const dataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment: dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#key DataAwsEcsTaskExecution#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#key DataAwsEcsTaskExecution#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}.

---

### DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

const dataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements: dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}.

---

### DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides <a name="DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

const dataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides: dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#device_name DataAwsEcsTaskExecution#device_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.property.deviceType">deviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#device_type DataAwsEcsTaskExecution#device_type}. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#device_name DataAwsEcsTaskExecution#device_name}.

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#device_type DataAwsEcsTaskExecution#device_type}.

---

### DataAwsEcsTaskExecutionPlacementConstraints <a name="DataAwsEcsTaskExecutionPlacementConstraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

const dataAwsEcsTaskExecutionPlacementConstraints: dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#expression DataAwsEcsTaskExecution#expression}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#expression DataAwsEcsTaskExecution#expression}.

---

### DataAwsEcsTaskExecutionPlacementStrategy <a name="DataAwsEcsTaskExecutionPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

const dataAwsEcsTaskExecutionPlacementStrategy: dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.property.field">field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#field DataAwsEcsTaskExecution#field}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/ecs_task_execution#field DataAwsEcsTaskExecution#field}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcsTaskExecutionCapacityProviderStrategyList <a name="DataAwsEcsTaskExecutionCapacityProviderStrategyList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.get"></a>

```typescript
public get(index: number): DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>[]

---


### DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference <a name="DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resetBase"></a>

```typescript
public resetBase(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.baseInput"></a>

```typescript
public readonly baseInput: number;
```

- *Type:* number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```typescript
public readonly capacityProviderInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionCapacityProviderStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>

---


### DataAwsEcsTaskExecutionNetworkConfigurationOutputReference <a name="DataAwsEcsTaskExecutionNetworkConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```typescript
public resetAssignPublicIp(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```typescript
public readonly assignPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsTaskExecutionNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.get"></a>

```typescript
public get(index: number): DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>[]

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesList <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.get"></a>

```typescript
public get(index: number): DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>[]

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putResourceRequirements">putResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetMemoryReservation">resetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetResourceRequirements">resetResourceRequirements</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putEnvironment"></a>

```typescript
public putEnvironment(value: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>[]

---

##### `putResourceRequirements` <a name="putResourceRequirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putResourceRequirements"></a>

```typescript
public putResourceRequirements(value: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putResourceRequirements.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>[]

---

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetMemoryReservation` <a name="resetMemoryReservation" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetMemoryReservation"></a>

```typescript
public resetMemoryReservation(): void
```

##### `resetResourceRequirements` <a name="resetResourceRequirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetResourceRequirements"></a>

```typescript
public resetResourceRequirements(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.resourceRequirements">resourceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.environmentInput">environmentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryInput">memoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryReservationInput">memoryReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.resourceRequirementsInput">resourceRequirementsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.environment"></a>

```typescript
public readonly environment: DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList</a>

---

##### `resourceRequirements`<sup>Required</sup> <a name="resourceRequirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.resourceRequirements"></a>

```typescript
public readonly resourceRequirements: DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList</a>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>[]

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: number;
```

- *Type:* number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryReservationInput"></a>

```typescript
public readonly memoryReservationInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceRequirementsInput`<sup>Optional</sup> <a name="resourceRequirementsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.resourceRequirementsInput"></a>

```typescript
public readonly resourceRequirementsInput: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.get"></a>

```typescript
public get(index: number): DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>[]

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>

---


### DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList <a name="DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.get"></a>

```typescript
public get(index: number): DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>[]

---


### DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference <a name="DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resetDeviceType">resetDeviceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetDeviceType` <a name="resetDeviceType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resetDeviceType"></a>

```typescript
public resetDeviceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceTypeInput">deviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceType">deviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceTypeInput"></a>

```typescript
public readonly deviceTypeInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>

---


### DataAwsEcsTaskExecutionOverridesOutputReference <a name="DataAwsEcsTaskExecutionOverridesOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putContainerOverrides">putContainerOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putInferenceAcceleratorOverrides">putInferenceAcceleratorOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetContainerOverrides">resetContainerOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetInferenceAcceleratorOverrides">resetInferenceAcceleratorOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetTaskRoleArn">resetTaskRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerOverrides` <a name="putContainerOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putContainerOverrides"></a>

```typescript
public putContainerOverrides(value: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putContainerOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>[]

---

##### `putInferenceAcceleratorOverrides` <a name="putInferenceAcceleratorOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putInferenceAcceleratorOverrides"></a>

```typescript
public putInferenceAcceleratorOverrides(value: IResolvable | DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putInferenceAcceleratorOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>[]

---

##### `resetContainerOverrides` <a name="resetContainerOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetContainerOverrides"></a>

```typescript
public resetContainerOverrides(): void
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetExecutionRoleArn"></a>

```typescript
public resetExecutionRoleArn(): void
```

##### `resetInferenceAcceleratorOverrides` <a name="resetInferenceAcceleratorOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetInferenceAcceleratorOverrides"></a>

```typescript
public resetInferenceAcceleratorOverrides(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetTaskRoleArn` <a name="resetTaskRoleArn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetTaskRoleArn"></a>

```typescript
public resetTaskRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.containerOverrides">containerOverrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList">DataAwsEcsTaskExecutionOverridesContainerOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.inferenceAcceleratorOverrides">inferenceAcceleratorOverrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.containerOverridesInput">containerOverridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.cpuInput">cpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.inferenceAcceleratorOverridesInput">inferenceAcceleratorOverridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.taskRoleArnInput">taskRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.taskRoleArn">taskRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerOverrides`<sup>Required</sup> <a name="containerOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.containerOverrides"></a>

```typescript
public readonly containerOverrides: DataAwsEcsTaskExecutionOverridesContainerOverridesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList">DataAwsEcsTaskExecutionOverridesContainerOverridesList</a>

---

##### `inferenceAcceleratorOverrides`<sup>Required</sup> <a name="inferenceAcceleratorOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.inferenceAcceleratorOverrides"></a>

```typescript
public readonly inferenceAcceleratorOverrides: DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList</a>

---

##### `containerOverridesInput`<sup>Optional</sup> <a name="containerOverridesInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.containerOverridesInput"></a>

```typescript
public readonly containerOverridesInput: IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>[]

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: string;
```

- *Type:* string

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `inferenceAcceleratorOverridesInput`<sup>Optional</sup> <a name="inferenceAcceleratorOverridesInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.inferenceAcceleratorOverridesInput"></a>

```typescript
public readonly inferenceAcceleratorOverridesInput: IResolvable | DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>[]

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `taskRoleArnInput`<sup>Optional</sup> <a name="taskRoleArnInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.taskRoleArnInput"></a>

```typescript
public readonly taskRoleArnInput: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `taskRoleArn`<sup>Required</sup> <a name="taskRoleArn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.taskRoleArn"></a>

```typescript
public readonly taskRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEcsTaskExecutionOverrides;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

---


### DataAwsEcsTaskExecutionPlacementConstraintsList <a name="DataAwsEcsTaskExecutionPlacementConstraintsList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.get"></a>

```typescript
public get(index: number): DataAwsEcsTaskExecutionPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionPlacementConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>[]

---


### DataAwsEcsTaskExecutionPlacementConstraintsOutputReference <a name="DataAwsEcsTaskExecutionPlacementConstraintsOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionPlacementConstraints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>

---


### DataAwsEcsTaskExecutionPlacementStrategyList <a name="DataAwsEcsTaskExecutionPlacementStrategyList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.get"></a>

```typescript
public get(index: number): DataAwsEcsTaskExecutionPlacementStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionPlacementStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>[]

---


### DataAwsEcsTaskExecutionPlacementStrategyOutputReference <a name="DataAwsEcsTaskExecutionPlacementStrategyOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer"></a>

```typescript
import { dataAwsEcsTaskExecution } from '@cdktf/provider-aws'

new dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resetField"></a>

```typescript
public resetField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEcsTaskExecutionPlacementStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>

---




# `codedeployDeploymentGroup` Submodule <a name="`codedeployDeploymentGroup` Submodule" id="@cdktf/provider-aws.codedeployDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodedeployDeploymentGroup <a name="CodedeployDeploymentGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group aws_codedeploy_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroup(scope: Construct, id: string, config: CodedeployDeploymentGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig">CodedeployDeploymentGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig">CodedeployDeploymentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration">putAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration">putAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfig">putBlueGreenDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle">putDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilter">putEc2TagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet">putEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsService">putEcsService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo">putLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilter">putOnPremisesInstanceTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfiguration">putTriggerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration">resetAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration">resetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoscalingGroups">resetAutoscalingGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfig">resetBlueGreenDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName">resetDeploymentConfigName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle">resetDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilter">resetEc2TagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet">resetEc2TagSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsService">resetEcsService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo">resetLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilter">resetOnPremisesInstanceTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfiguration">resetTriggerConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAlarmConfiguration` <a name="putAlarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration"></a>

```typescript
public putAlarmConfiguration(value: CodedeployDeploymentGroupAlarmConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAlarmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---

##### `putAutoRollbackConfiguration` <a name="putAutoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration"></a>

```typescript
public putAutoRollbackConfiguration(value: CodedeployDeploymentGroupAutoRollbackConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---

##### `putBlueGreenDeploymentConfig` <a name="putBlueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfig"></a>

```typescript
public putBlueGreenDeploymentConfig(value: CodedeployDeploymentGroupBlueGreenDeploymentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putBlueGreenDeploymentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

---

##### `putDeploymentStyle` <a name="putDeploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle"></a>

```typescript
public putDeploymentStyle(value: CodedeployDeploymentGroupDeploymentStyle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putDeploymentStyle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---

##### `putEc2TagFilter` <a name="putEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilter"></a>

```typescript
public putEc2TagFilter(value: IResolvable | CodedeployDeploymentGroupEc2TagFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>[]

---

##### `putEc2TagSet` <a name="putEc2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet"></a>

```typescript
public putEc2TagSet(value: IResolvable | CodedeployDeploymentGroupEc2TagSet[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEc2TagSet.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>[]

---

##### `putEcsService` <a name="putEcsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsService"></a>

```typescript
public putEcsService(value: CodedeployDeploymentGroupEcsService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putEcsService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

---

##### `putLoadBalancerInfo` <a name="putLoadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo"></a>

```typescript
public putLoadBalancerInfo(value: CodedeployDeploymentGroupLoadBalancerInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putLoadBalancerInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---

##### `putOnPremisesInstanceTagFilter` <a name="putOnPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilter"></a>

```typescript
public putOnPremisesInstanceTagFilter(value: IResolvable | CodedeployDeploymentGroupOnPremisesInstanceTagFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putOnPremisesInstanceTagFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>[]

---

##### `putTriggerConfiguration` <a name="putTriggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfiguration"></a>

```typescript
public putTriggerConfiguration(value: IResolvable | CodedeployDeploymentGroupTriggerConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.putTriggerConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>[]

---

##### `resetAlarmConfiguration` <a name="resetAlarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAlarmConfiguration"></a>

```typescript
public resetAlarmConfiguration(): void
```

##### `resetAutoRollbackConfiguration` <a name="resetAutoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoRollbackConfiguration"></a>

```typescript
public resetAutoRollbackConfiguration(): void
```

##### `resetAutoscalingGroups` <a name="resetAutoscalingGroups" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetAutoscalingGroups"></a>

```typescript
public resetAutoscalingGroups(): void
```

##### `resetBlueGreenDeploymentConfig` <a name="resetBlueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetBlueGreenDeploymentConfig"></a>

```typescript
public resetBlueGreenDeploymentConfig(): void
```

##### `resetDeploymentConfigName` <a name="resetDeploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentConfigName"></a>

```typescript
public resetDeploymentConfigName(): void
```

##### `resetDeploymentStyle` <a name="resetDeploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetDeploymentStyle"></a>

```typescript
public resetDeploymentStyle(): void
```

##### `resetEc2TagFilter` <a name="resetEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagFilter"></a>

```typescript
public resetEc2TagFilter(): void
```

##### `resetEc2TagSet` <a name="resetEc2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEc2TagSet"></a>

```typescript
public resetEc2TagSet(): void
```

##### `resetEcsService` <a name="resetEcsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetEcsService"></a>

```typescript
public resetEcsService(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoadBalancerInfo` <a name="resetLoadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetLoadBalancerInfo"></a>

```typescript
public resetLoadBalancerInfo(): void
```

##### `resetOnPremisesInstanceTagFilter` <a name="resetOnPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetOnPremisesInstanceTagFilter"></a>

```typescript
public resetOnPremisesInstanceTagFilter(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTriggerConfiguration` <a name="resetTriggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.resetTriggerConfiguration"></a>

```typescript
public resetTriggerConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration">alarmConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfig">blueGreenDeploymentConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.computePlatform">computePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupId">deploymentGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle">deploymentStyle</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilter">ec2TagFilter</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList">CodedeployDeploymentGroupEc2TagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet">ec2TagSet</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList">CodedeployDeploymentGroupEc2TagSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsService">ecsService</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference">CodedeployDeploymentGroupEcsServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo">loadBalancerInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilter">onPremisesInstanceTagFilter</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList">CodedeployDeploymentGroupOnPremisesInstanceTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfiguration">triggerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList">CodedeployDeploymentGroupTriggerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput">alarmConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.appNameInput">appNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput">autoRollbackConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoscalingGroupsInput">autoscalingGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigInput">blueGreenDeploymentConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput">deploymentConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput">deploymentGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput">deploymentStyleInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilterInput">ec2TagFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput">ec2TagSetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServiceInput">ecsServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput">loadBalancerInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilterInput">onPremisesInstanceTagFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationInput">triggerConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoscalingGroups">autoscalingGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName">deploymentConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName">deploymentGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alarmConfiguration`<sup>Required</sup> <a name="alarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfiguration"></a>

```typescript
public readonly alarmConfiguration: CodedeployDeploymentGroupAlarmConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference">CodedeployDeploymentGroupAlarmConfigurationOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoRollbackConfiguration`<sup>Required</sup> <a name="autoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfiguration"></a>

```typescript
public readonly autoRollbackConfiguration: CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a>

---

##### `blueGreenDeploymentConfig`<sup>Required</sup> <a name="blueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfig"></a>

```typescript
public readonly blueGreenDeploymentConfig: CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference</a>

---

##### `computePlatform`<sup>Required</sup> <a name="computePlatform" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.computePlatform"></a>

```typescript
public readonly computePlatform: string;
```

- *Type:* string

---

##### `deploymentGroupId`<sup>Required</sup> <a name="deploymentGroupId" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupId"></a>

```typescript
public readonly deploymentGroupId: string;
```

- *Type:* string

---

##### `deploymentStyle`<sup>Required</sup> <a name="deploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyle"></a>

```typescript
public readonly deploymentStyle: CodedeployDeploymentGroupDeploymentStyleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference">CodedeployDeploymentGroupDeploymentStyleOutputReference</a>

---

##### `ec2TagFilter`<sup>Required</sup> <a name="ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilter"></a>

```typescript
public readonly ec2TagFilter: CodedeployDeploymentGroupEc2TagFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList">CodedeployDeploymentGroupEc2TagFilterList</a>

---

##### `ec2TagSet`<sup>Required</sup> <a name="ec2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSet"></a>

```typescript
public readonly ec2TagSet: CodedeployDeploymentGroupEc2TagSetList;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList">CodedeployDeploymentGroupEc2TagSetList</a>

---

##### `ecsService`<sup>Required</sup> <a name="ecsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsService"></a>

```typescript
public readonly ecsService: CodedeployDeploymentGroupEcsServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference">CodedeployDeploymentGroupEcsServiceOutputReference</a>

---

##### `loadBalancerInfo`<sup>Required</sup> <a name="loadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfo"></a>

```typescript
public readonly loadBalancerInfo: CodedeployDeploymentGroupLoadBalancerInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoOutputReference</a>

---

##### `onPremisesInstanceTagFilter`<sup>Required</sup> <a name="onPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilter"></a>

```typescript
public readonly onPremisesInstanceTagFilter: CodedeployDeploymentGroupOnPremisesInstanceTagFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList">CodedeployDeploymentGroupOnPremisesInstanceTagFilterList</a>

---

##### `triggerConfiguration`<sup>Required</sup> <a name="triggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfiguration"></a>

```typescript
public readonly triggerConfiguration: CodedeployDeploymentGroupTriggerConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList">CodedeployDeploymentGroupTriggerConfigurationList</a>

---

##### `alarmConfigurationInput`<sup>Optional</sup> <a name="alarmConfigurationInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.alarmConfigurationInput"></a>

```typescript
public readonly alarmConfigurationInput: CodedeployDeploymentGroupAlarmConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.appNameInput"></a>

```typescript
public readonly appNameInput: string;
```

- *Type:* string

---

##### `autoRollbackConfigurationInput`<sup>Optional</sup> <a name="autoRollbackConfigurationInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoRollbackConfigurationInput"></a>

```typescript
public readonly autoRollbackConfigurationInput: CodedeployDeploymentGroupAutoRollbackConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---

##### `autoscalingGroupsInput`<sup>Optional</sup> <a name="autoscalingGroupsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoscalingGroupsInput"></a>

```typescript
public readonly autoscalingGroupsInput: string[];
```

- *Type:* string[]

---

##### `blueGreenDeploymentConfigInput`<sup>Optional</sup> <a name="blueGreenDeploymentConfigInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.blueGreenDeploymentConfigInput"></a>

```typescript
public readonly blueGreenDeploymentConfigInput: CodedeployDeploymentGroupBlueGreenDeploymentConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

---

##### `deploymentConfigNameInput`<sup>Optional</sup> <a name="deploymentConfigNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigNameInput"></a>

```typescript
public readonly deploymentConfigNameInput: string;
```

- *Type:* string

---

##### `deploymentGroupNameInput`<sup>Optional</sup> <a name="deploymentGroupNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupNameInput"></a>

```typescript
public readonly deploymentGroupNameInput: string;
```

- *Type:* string

---

##### `deploymentStyleInput`<sup>Optional</sup> <a name="deploymentStyleInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentStyleInput"></a>

```typescript
public readonly deploymentStyleInput: CodedeployDeploymentGroupDeploymentStyle;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---

##### `ec2TagFilterInput`<sup>Optional</sup> <a name="ec2TagFilterInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagFilterInput"></a>

```typescript
public readonly ec2TagFilterInput: IResolvable | CodedeployDeploymentGroupEc2TagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>[]

---

##### `ec2TagSetInput`<sup>Optional</sup> <a name="ec2TagSetInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ec2TagSetInput"></a>

```typescript
public readonly ec2TagSetInput: IResolvable | CodedeployDeploymentGroupEc2TagSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>[]

---

##### `ecsServiceInput`<sup>Optional</sup> <a name="ecsServiceInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.ecsServiceInput"></a>

```typescript
public readonly ecsServiceInput: CodedeployDeploymentGroupEcsService;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerInfoInput`<sup>Optional</sup> <a name="loadBalancerInfoInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.loadBalancerInfoInput"></a>

```typescript
public readonly loadBalancerInfoInput: CodedeployDeploymentGroupLoadBalancerInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---

##### `onPremisesInstanceTagFilterInput`<sup>Optional</sup> <a name="onPremisesInstanceTagFilterInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.onPremisesInstanceTagFilterInput"></a>

```typescript
public readonly onPremisesInstanceTagFilterInput: IResolvable | CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>[]

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArnInput"></a>

```typescript
public readonly serviceRoleArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `triggerConfigurationInput`<sup>Optional</sup> <a name="triggerConfigurationInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.triggerConfigurationInput"></a>

```typescript
public readonly triggerConfigurationInput: IResolvable | CodedeployDeploymentGroupTriggerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>[]

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `autoscalingGroups`<sup>Required</sup> <a name="autoscalingGroups" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.autoscalingGroups"></a>

```typescript
public readonly autoscalingGroups: string[];
```

- *Type:* string[]

---

##### `deploymentConfigName`<sup>Required</sup> <a name="deploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentConfigName"></a>

```typescript
public readonly deploymentConfigName: string;
```

- *Type:* string

---

##### `deploymentGroupName`<sup>Required</sup> <a name="deploymentGroupName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.deploymentGroupName"></a>

```typescript
public readonly deploymentGroupName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodedeployDeploymentGroupAlarmConfiguration <a name="CodedeployDeploymentGroupAlarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupAlarmConfiguration: codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms">alarms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure">ignorePollAlarmFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}.

---

##### `ignorePollAlarmFailure`<sup>Optional</sup> <a name="ignorePollAlarmFailure" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration.property.ignorePollAlarmFailure"></a>

```typescript
public readonly ignorePollAlarmFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}.

---

### CodedeployDeploymentGroupAutoRollbackConfiguration <a name="CodedeployDeploymentGroupAutoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupAutoRollbackConfiguration: codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events">events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}.

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}.

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfig <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupBlueGreenDeploymentConfig: codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.deploymentReadyOption">deploymentReadyOption</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a></code> | deployment_ready_option block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.greenFleetProvisioningOption">greenFleetProvisioningOption</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a></code> | green_fleet_provisioning_option block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.terminateBlueInstancesOnDeploymentSuccess">terminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a></code> | terminate_blue_instances_on_deployment_success block. |

---

##### `deploymentReadyOption`<sup>Optional</sup> <a name="deploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.deploymentReadyOption"></a>

```typescript
public readonly deploymentReadyOption: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a>

deployment_ready_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}

---

##### `greenFleetProvisioningOption`<sup>Optional</sup> <a name="greenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.greenFleetProvisioningOption"></a>

```typescript
public readonly greenFleetProvisioningOption: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a>

green_fleet_provisioning_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}

---

##### `terminateBlueInstancesOnDeploymentSuccess`<sup>Optional</sup> <a name="terminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```typescript
public readonly terminateBlueInstancesOnDeploymentSuccess: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a>

terminate_blue_instances_on_deployment_success block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption: codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.property.actionOnTimeout">actionOnTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.property.waitTimeInMinutes">waitTimeInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}. |

---

##### `actionOnTimeout`<sup>Optional</sup> <a name="actionOnTimeout" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.property.actionOnTimeout"></a>

```typescript
public readonly actionOnTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}.

---

##### `waitTimeInMinutes`<sup>Optional</sup> <a name="waitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption.property.waitTimeInMinutes"></a>

```typescript
public readonly waitTimeInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}.

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption: codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}.

---

### CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess: codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes">terminationWaitTimeInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}.

---

##### `terminationWaitTimeInMinutes`<sup>Optional</sup> <a name="terminationWaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes"></a>

```typescript
public readonly terminationWaitTimeInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}.

---

### CodedeployDeploymentGroupConfig <a name="CodedeployDeploymentGroupConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupConfig: codedeployDeploymentGroup.CodedeployDeploymentGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.appName">appName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#app_name CodedeployDeploymentGroup#app_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName">deploymentGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration">alarmConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | alarm_configuration block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | auto_rollback_configuration block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoscalingGroups">autoscalingGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfig">blueGreenDeploymentConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a></code> | blue_green_deployment_config block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName">deploymentConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle">deploymentStyle</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | deployment_style block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilter">ec2TagFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>[]</code> | ec2_tag_filter block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet">ec2TagSet</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>[]</code> | ec2_tag_set block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsService">ecsService</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a></code> | ecs_service block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#id CodedeployDeploymentGroup#id}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo">loadBalancerInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | load_balancer_info block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilter">onPremisesInstanceTagFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>[]</code> | on_premises_instance_tag_filter block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags_all CodedeployDeploymentGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfiguration">triggerConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>[]</code> | trigger_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#app_name CodedeployDeploymentGroup#app_name}.

---

##### `deploymentGroupName`<sup>Required</sup> <a name="deploymentGroupName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentGroupName"></a>

```typescript
public readonly deploymentGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}.

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}.

---

##### `alarmConfiguration`<sup>Optional</sup> <a name="alarmConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.alarmConfiguration"></a>

```typescript
public readonly alarmConfiguration: CodedeployDeploymentGroupAlarmConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

alarm_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="autoRollbackConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoRollbackConfiguration"></a>

```typescript
public readonly autoRollbackConfiguration: CodedeployDeploymentGroupAutoRollbackConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

auto_rollback_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}

---

##### `autoscalingGroups`<sup>Optional</sup> <a name="autoscalingGroups" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.autoscalingGroups"></a>

```typescript
public readonly autoscalingGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}.

---

##### `blueGreenDeploymentConfig`<sup>Optional</sup> <a name="blueGreenDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.blueGreenDeploymentConfig"></a>

```typescript
public readonly blueGreenDeploymentConfig: CodedeployDeploymentGroupBlueGreenDeploymentConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

blue_green_deployment_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#blue_green_deployment_config CodedeployDeploymentGroup#blue_green_deployment_config}

---

##### `deploymentConfigName`<sup>Optional</sup> <a name="deploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentConfigName"></a>

```typescript
public readonly deploymentConfigName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}.

---

##### `deploymentStyle`<sup>Optional</sup> <a name="deploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.deploymentStyle"></a>

```typescript
public readonly deploymentStyle: CodedeployDeploymentGroupDeploymentStyle;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

deployment_style block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_style CodedeployDeploymentGroup#deployment_style}

---

##### `ec2TagFilter`<sup>Optional</sup> <a name="ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagFilter"></a>

```typescript
public readonly ec2TagFilter: IResolvable | CodedeployDeploymentGroupEc2TagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>[]

ec2_tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}

---

##### `ec2TagSet`<sup>Optional</sup> <a name="ec2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ec2TagSet"></a>

```typescript
public readonly ec2TagSet: IResolvable | CodedeployDeploymentGroupEc2TagSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>[]

ec2_tag_set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_set CodedeployDeploymentGroup#ec2_tag_set}

---

##### `ecsService`<sup>Optional</sup> <a name="ecsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.ecsService"></a>

```typescript
public readonly ecsService: CodedeployDeploymentGroupEcsService;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

ecs_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ecs_service CodedeployDeploymentGroup#ecs_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#id CodedeployDeploymentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerInfo`<sup>Optional</sup> <a name="loadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.loadBalancerInfo"></a>

```typescript
public readonly loadBalancerInfo: CodedeployDeploymentGroupLoadBalancerInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

load_balancer_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}

---

##### `onPremisesInstanceTagFilter`<sup>Optional</sup> <a name="onPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.onPremisesInstanceTagFilter"></a>

```typescript
public readonly onPremisesInstanceTagFilter: IResolvable | CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>[]

on_premises_instance_tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#on_premises_instance_tag_filter CodedeployDeploymentGroup#on_premises_instance_tag_filter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags_all CodedeployDeploymentGroup#tags_all}.

---

##### `triggerConfiguration`<sup>Optional</sup> <a name="triggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupConfig.property.triggerConfiguration"></a>

```typescript
public readonly triggerConfiguration: IResolvable | CodedeployDeploymentGroupTriggerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>[]

trigger_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_configuration CodedeployDeploymentGroup#trigger_configuration}

---

### CodedeployDeploymentGroupDeploymentStyle <a name="CodedeployDeploymentGroupDeploymentStyle" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupDeploymentStyle: codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption">deploymentOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType">deploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}. |

---

##### `deploymentOption`<sup>Optional</sup> <a name="deploymentOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentOption"></a>

```typescript
public readonly deploymentOption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}.

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}.

---

### CodedeployDeploymentGroupEc2TagFilter <a name="CodedeployDeploymentGroupEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupEc2TagFilter: codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}.

---

### CodedeployDeploymentGroupEc2TagSet <a name="CodedeployDeploymentGroupEc2TagSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupEc2TagSet: codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagFilter">ec2TagFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>[]</code> | ec2_tag_filter block. |

---

##### `ec2TagFilter`<sup>Optional</sup> <a name="ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet.property.ec2TagFilter"></a>

```typescript
public readonly ec2TagFilter: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>[]

ec2_tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}

---

### CodedeployDeploymentGroupEc2TagSetEc2TagFilter <a name="CodedeployDeploymentGroupEc2TagSetEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupEc2TagSetEc2TagFilter: codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}.

---

### CodedeployDeploymentGroupEcsService <a name="CodedeployDeploymentGroupEcsService" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupEcsService: codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#cluster_name CodedeployDeploymentGroup#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_name CodedeployDeploymentGroup#service_name}. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#cluster_name CodedeployDeploymentGroup#cluster_name}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_name CodedeployDeploymentGroup#service_name}.

---

### CodedeployDeploymentGroupLoadBalancerInfo <a name="CodedeployDeploymentGroupLoadBalancerInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupLoadBalancerInfo: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfo">elbInfo</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>[]</code> | elb_info block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfo">targetGroupInfo</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>[]</code> | target_group_info block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfo">targetGroupPairInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a></code> | target_group_pair_info block. |

---

##### `elbInfo`<sup>Optional</sup> <a name="elbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.elbInfo"></a>

```typescript
public readonly elbInfo: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoElbInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>[]

elb_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#elb_info CodedeployDeploymentGroup#elb_info}

---

##### `targetGroupInfo`<sup>Optional</sup> <a name="targetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupInfo"></a>

```typescript
public readonly targetGroupInfo: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>[]

target_group_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#target_group_info CodedeployDeploymentGroup#target_group_info}

---

##### `targetGroupPairInfo`<sup>Optional</sup> <a name="targetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo.property.targetGroupPairInfo"></a>

```typescript
public readonly targetGroupPairInfo: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a>

target_group_pair_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#target_group_pair_info CodedeployDeploymentGroup#target_group_pair_info}

---

### CodedeployDeploymentGroupLoadBalancerInfoElbInfo <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupLoadBalancerInfoElbInfo: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}.

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}.

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.prodTrafficRoute">prodTrafficRoute</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a></code> | prod_traffic_route block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.targetGroup">targetGroup</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>[]</code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.testTrafficRoute">testTrafficRoute</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a></code> | test_traffic_route block. |

---

##### `prodTrafficRoute`<sup>Required</sup> <a name="prodTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.prodTrafficRoute"></a>

```typescript
public readonly prodTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a>

prod_traffic_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#prod_traffic_route CodedeployDeploymentGroup#prod_traffic_route}

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.targetGroup"></a>

```typescript
public readonly targetGroup: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>[]

target_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#target_group CodedeployDeploymentGroup#target_group}

---

##### `testTrafficRoute`<sup>Optional</sup> <a name="testTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo.property.testTrafficRoute"></a>

```typescript
public readonly testTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a>

test_traffic_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#test_traffic_route CodedeployDeploymentGroup#test_traffic_route}

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute.property.listenerArns">listenerArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}. |

---

##### `listenerArns`<sup>Required</sup> <a name="listenerArns" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute.property.listenerArns"></a>

```typescript
public readonly listenerArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}.

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}.

---

### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute: codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute.property.listenerArns">listenerArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}. |

---

##### `listenerArns`<sup>Required</sup> <a name="listenerArns" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute.property.listenerArns"></a>

```typescript
public readonly listenerArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}.

---

### CodedeployDeploymentGroupOnPremisesInstanceTagFilter <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupOnPremisesInstanceTagFilter: codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}.

---

### CodedeployDeploymentGroupTriggerConfiguration <a name="CodedeployDeploymentGroupTriggerConfiguration" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

const codedeployDeploymentGroupTriggerConfiguration: codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerEvents">triggerEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_events CodedeployDeploymentGroup#trigger_events}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerName">triggerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_name CodedeployDeploymentGroup#trigger_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerTargetArn">triggerTargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}. |

---

##### `triggerEvents`<sup>Required</sup> <a name="triggerEvents" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerEvents"></a>

```typescript
public readonly triggerEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_events CodedeployDeploymentGroup#trigger_events}.

---

##### `triggerName`<sup>Required</sup> <a name="triggerName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerName"></a>

```typescript
public readonly triggerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_name CodedeployDeploymentGroup#trigger_name}.

---

##### `triggerTargetArn`<sup>Required</sup> <a name="triggerTargetArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration.property.triggerTargetArn"></a>

```typescript
public readonly triggerTargetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodedeployDeploymentGroupAlarmConfigurationOutputReference <a name="CodedeployDeploymentGroupAlarmConfigurationOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure">resetIgnorePollAlarmFailure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetIgnorePollAlarmFailure` <a name="resetIgnorePollAlarmFailure" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.resetIgnorePollAlarmFailure"></a>

```typescript
public resetIgnorePollAlarmFailure(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput">ignorePollAlarmFailureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms">alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure">ignorePollAlarmFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignorePollAlarmFailureInput`<sup>Optional</sup> <a name="ignorePollAlarmFailureInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailureInput"></a>

```typescript
public readonly ignorePollAlarmFailureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignorePollAlarmFailure`<sup>Required</sup> <a name="ignorePollAlarmFailure" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure"></a>

```typescript
public readonly ignorePollAlarmFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupAlarmConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAlarmConfiguration">CodedeployDeploymentGroupAlarmConfiguration</a>

---


### CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference <a name="CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents">resetEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEvents` <a name="resetEvents" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resetEvents"></a>

```typescript
public resetEvents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupAutoRollbackConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupAutoRollbackConfiguration">CodedeployDeploymentGroupAutoRollbackConfiguration</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resetActionOnTimeout">resetActionOnTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes">resetWaitTimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionOnTimeout` <a name="resetActionOnTimeout" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resetActionOnTimeout"></a>

```typescript
public resetActionOnTimeout(): void
```

##### `resetWaitTimeInMinutes` <a name="resetWaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.resetWaitTimeInMinutes"></a>

```typescript
public resetWaitTimeInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput">actionOnTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput">waitTimeInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.actionOnTimeout">actionOnTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.waitTimeInMinutes">waitTimeInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionOnTimeoutInput`<sup>Optional</sup> <a name="actionOnTimeoutInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.actionOnTimeoutInput"></a>

```typescript
public readonly actionOnTimeoutInput: string;
```

- *Type:* string

---

##### `waitTimeInMinutesInput`<sup>Optional</sup> <a name="waitTimeInMinutesInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.waitTimeInMinutesInput"></a>

```typescript
public readonly waitTimeInMinutesInput: number;
```

- *Type:* number

---

##### `actionOnTimeout`<sup>Required</sup> <a name="actionOnTimeout" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.actionOnTimeout"></a>

```typescript
public readonly actionOnTimeout: string;
```

- *Type:* string

---

##### `waitTimeInMinutes`<sup>Required</sup> <a name="waitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.waitTimeInMinutes"></a>

```typescript
public readonly waitTimeInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putDeploymentReadyOption">putDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putGreenFleetProvisioningOption">putGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putTerminateBlueInstancesOnDeploymentSuccess">putTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetDeploymentReadyOption">resetDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetGreenFleetProvisioningOption">resetGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess">resetTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeploymentReadyOption` <a name="putDeploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putDeploymentReadyOption"></a>

```typescript
public putDeploymentReadyOption(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putDeploymentReadyOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a>

---

##### `putGreenFleetProvisioningOption` <a name="putGreenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putGreenFleetProvisioningOption"></a>

```typescript
public putGreenFleetProvisioningOption(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putGreenFleetProvisioningOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a>

---

##### `putTerminateBlueInstancesOnDeploymentSuccess` <a name="putTerminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putTerminateBlueInstancesOnDeploymentSuccess"></a>

```typescript
public putTerminateBlueInstancesOnDeploymentSuccess(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.putTerminateBlueInstancesOnDeploymentSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a>

---

##### `resetDeploymentReadyOption` <a name="resetDeploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetDeploymentReadyOption"></a>

```typescript
public resetDeploymentReadyOption(): void
```

##### `resetGreenFleetProvisioningOption` <a name="resetGreenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetGreenFleetProvisioningOption"></a>

```typescript
public resetGreenFleetProvisioningOption(): void
```

##### `resetTerminateBlueInstancesOnDeploymentSuccess` <a name="resetTerminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.resetTerminateBlueInstancesOnDeploymentSuccess"></a>

```typescript
public resetTerminateBlueInstancesOnDeploymentSuccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.deploymentReadyOption">deploymentReadyOption</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.greenFleetProvisioningOption">greenFleetProvisioningOption</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.terminateBlueInstancesOnDeploymentSuccess">terminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.deploymentReadyOptionInput">deploymentReadyOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.greenFleetProvisioningOptionInput">greenFleetProvisioningOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput">terminateBlueInstancesOnDeploymentSuccessInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentReadyOption`<sup>Required</sup> <a name="deploymentReadyOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.deploymentReadyOption"></a>

```typescript
public readonly deploymentReadyOption: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference</a>

---

##### `greenFleetProvisioningOption`<sup>Required</sup> <a name="greenFleetProvisioningOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.greenFleetProvisioningOption"></a>

```typescript
public readonly greenFleetProvisioningOption: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference</a>

---

##### `terminateBlueInstancesOnDeploymentSuccess`<sup>Required</sup> <a name="terminateBlueInstancesOnDeploymentSuccess" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```typescript
public readonly terminateBlueInstancesOnDeploymentSuccess: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference</a>

---

##### `deploymentReadyOptionInput`<sup>Optional</sup> <a name="deploymentReadyOptionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.deploymentReadyOptionInput"></a>

```typescript
public readonly deploymentReadyOptionInput: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption</a>

---

##### `greenFleetProvisioningOptionInput`<sup>Optional</sup> <a name="greenFleetProvisioningOptionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.greenFleetProvisioningOptionInput"></a>

```typescript
public readonly greenFleetProvisioningOptionInput: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption</a>

---

##### `terminateBlueInstancesOnDeploymentSuccessInput`<sup>Optional</sup> <a name="terminateBlueInstancesOnDeploymentSuccessInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.terminateBlueInstancesOnDeploymentSuccessInput"></a>

```typescript
public readonly terminateBlueInstancesOnDeploymentSuccessInput: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupBlueGreenDeploymentConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfig">CodedeployDeploymentGroupBlueGreenDeploymentConfig</a>

---


### CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference <a name="CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes">resetTerminationWaitTimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetTerminationWaitTimeInMinutes` <a name="resetTerminationWaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.resetTerminationWaitTimeInMinutes"></a>

```typescript
public resetTerminationWaitTimeInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput">terminationWaitTimeInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes">terminationWaitTimeInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `terminationWaitTimeInMinutesInput`<sup>Optional</sup> <a name="terminationWaitTimeInMinutesInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutesInput"></a>

```typescript
public readonly terminationWaitTimeInMinutesInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `terminationWaitTimeInMinutes`<sup>Required</sup> <a name="terminationWaitTimeInMinutes" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes"></a>

```typescript
public readonly terminationWaitTimeInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess</a>

---


### CodedeployDeploymentGroupDeploymentStyleOutputReference <a name="CodedeployDeploymentGroupDeploymentStyleOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption">resetDeploymentOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeploymentOption` <a name="resetDeploymentOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentOption"></a>

```typescript
public resetDeploymentOption(): void
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.resetDeploymentType"></a>

```typescript
public resetDeploymentType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput">deploymentOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption">deploymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentOptionInput`<sup>Optional</sup> <a name="deploymentOptionInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOptionInput"></a>

```typescript
public readonly deploymentOptionInput: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `deploymentOption`<sup>Required</sup> <a name="deploymentOption" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption"></a>

```typescript
public readonly deploymentOption: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupDeploymentStyle;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupDeploymentStyle">CodedeployDeploymentGroupDeploymentStyle</a>

---


### CodedeployDeploymentGroupEc2TagFilterList <a name="CodedeployDeploymentGroupEc2TagFilterList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupEc2TagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupEc2TagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a>[]

---


### CodedeployDeploymentGroupEc2TagFilterOutputReference <a name="CodedeployDeploymentGroupEc2TagFilterOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupEc2TagFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagFilter">CodedeployDeploymentGroupEc2TagFilter</a> | cdktf.IResolvable

---


### CodedeployDeploymentGroupEc2TagSetEc2TagFilterList <a name="CodedeployDeploymentGroupEc2TagSetEc2TagFilterList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>[]

---


### CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference <a name="CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupEc2TagSetEc2TagFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a> | cdktf.IResolvable

---


### CodedeployDeploymentGroupEc2TagSetList <a name="CodedeployDeploymentGroupEc2TagSetList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupEc2TagSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupEc2TagSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a>[]

---


### CodedeployDeploymentGroupEc2TagSetOutputReference <a name="CodedeployDeploymentGroupEc2TagSetOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagFilter">putEc2TagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagFilter">resetEc2TagFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEc2TagFilter` <a name="putEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagFilter"></a>

```typescript
public putEc2TagFilter(value: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.putEc2TagFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>[]

---

##### `resetEc2TagFilter` <a name="resetEc2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.resetEc2TagFilter"></a>

```typescript
public resetEc2TagFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagFilter">ec2TagFilter</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList">CodedeployDeploymentGroupEc2TagSetEc2TagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagFilterInput">ec2TagFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ec2TagFilter`<sup>Required</sup> <a name="ec2TagFilter" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagFilter"></a>

```typescript
public readonly ec2TagFilter: CodedeployDeploymentGroupEc2TagSetEc2TagFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilterList">CodedeployDeploymentGroupEc2TagSetEc2TagFilterList</a>

---

##### `ec2TagFilterInput`<sup>Optional</sup> <a name="ec2TagFilterInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagFilterInput"></a>

```typescript
public readonly ec2TagFilterInput: IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetEc2TagFilter">CodedeployDeploymentGroupEc2TagSetEc2TagFilter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupEc2TagSet | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEc2TagSet">CodedeployDeploymentGroupEc2TagSet</a> | cdktf.IResolvable

---


### CodedeployDeploymentGroupEcsServiceOutputReference <a name="CodedeployDeploymentGroupEcsServiceOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupEcsService;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupEcsService">CodedeployDeploymentGroupEcsService</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoList <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoElbInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>[]

---


### CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupLoadBalancerInfoElbInfo | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a> | cdktf.IResolvable

---


### CodedeployDeploymentGroupLoadBalancerInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfo">putElbInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfo">putTargetGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfo">putTargetGroupPairInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfo">resetElbInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfo">resetTargetGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfo">resetTargetGroupPairInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putElbInfo` <a name="putElbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfo"></a>

```typescript
public putElbInfo(value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoElbInfo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putElbInfo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>[]

---

##### `putTargetGroupInfo` <a name="putTargetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfo"></a>

```typescript
public putTargetGroupInfo(value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupInfo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>[]

---

##### `putTargetGroupPairInfo` <a name="putTargetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfo"></a>

```typescript
public putTargetGroupPairInfo(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.putTargetGroupPairInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a>

---

##### `resetElbInfo` <a name="resetElbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetElbInfo"></a>

```typescript
public resetElbInfo(): void
```

##### `resetTargetGroupInfo` <a name="resetTargetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupInfo"></a>

```typescript
public resetTargetGroupInfo(): void
```

##### `resetTargetGroupPairInfo` <a name="resetTargetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.resetTargetGroupPairInfo"></a>

```typescript
public resetTargetGroupPairInfo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfo">elbInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfo">targetGroupInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfo">targetGroupPairInfo</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoInput">elbInfoInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoInput">targetGroupInfoInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoInput">targetGroupPairInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elbInfo`<sup>Required</sup> <a name="elbInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfo"></a>

```typescript
public readonly elbInfo: CodedeployDeploymentGroupLoadBalancerInfoElbInfoList;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfoList">CodedeployDeploymentGroupLoadBalancerInfoElbInfoList</a>

---

##### `targetGroupInfo`<sup>Required</sup> <a name="targetGroupInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfo"></a>

```typescript
public readonly targetGroupInfo: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList</a>

---

##### `targetGroupPairInfo`<sup>Required</sup> <a name="targetGroupPairInfo" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfo"></a>

```typescript
public readonly targetGroupPairInfo: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference</a>

---

##### `elbInfoInput`<sup>Optional</sup> <a name="elbInfoInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoInput"></a>

```typescript
public readonly elbInfoInput: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoElbInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoElbInfo">CodedeployDeploymentGroupLoadBalancerInfoElbInfo</a>[]

---

##### `targetGroupInfoInput`<sup>Optional</sup> <a name="targetGroupInfoInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoInput"></a>

```typescript
public readonly targetGroupInfoInput: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>[]

---

##### `targetGroupPairInfoInput`<sup>Optional</sup> <a name="targetGroupPairInfoInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoInput"></a>

```typescript
public readonly targetGroupPairInfoInput: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupLoadBalancerInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfo">CodedeployDeploymentGroupLoadBalancerInfo</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a>[]

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo</a> | cdktf.IResolvable

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putProdTrafficRoute">putProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTargetGroup">putTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTestTrafficRoute">putTestTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resetTestTrafficRoute">resetTestTrafficRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProdTrafficRoute` <a name="putProdTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putProdTrafficRoute"></a>

```typescript
public putProdTrafficRoute(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putProdTrafficRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a>

---

##### `putTargetGroup` <a name="putTargetGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTargetGroup"></a>

```typescript
public putTargetGroup(value: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>[]

---

##### `putTestTrafficRoute` <a name="putTestTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTestTrafficRoute"></a>

```typescript
public putTestTrafficRoute(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.putTestTrafficRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a>

---

##### `resetTestTrafficRoute` <a name="resetTestTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.resetTestTrafficRoute"></a>

```typescript
public resetTestTrafficRoute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.prodTrafficRoute">prodTrafficRoute</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.targetGroup">targetGroup</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.testTrafficRoute">testTrafficRoute</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.prodTrafficRouteInput">prodTrafficRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.targetGroupInput">targetGroupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.testTrafficRouteInput">testTrafficRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prodTrafficRoute`<sup>Required</sup> <a name="prodTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.prodTrafficRoute"></a>

```typescript
public readonly prodTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference</a>

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.targetGroup"></a>

```typescript
public readonly targetGroup: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList</a>

---

##### `testTrafficRoute`<sup>Required</sup> <a name="testTrafficRoute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.testTrafficRoute"></a>

```typescript
public readonly testTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference</a>

---

##### `prodTrafficRouteInput`<sup>Optional</sup> <a name="prodTrafficRouteInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.prodTrafficRouteInput"></a>

```typescript
public readonly prodTrafficRouteInput: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a>

---

##### `targetGroupInput`<sup>Optional</sup> <a name="targetGroupInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.targetGroupInput"></a>

```typescript
public readonly targetGroupInput: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>[]

---

##### `testTrafficRouteInput`<sup>Optional</sup> <a name="testTrafficRouteInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.testTrafficRouteInput"></a>

```typescript
public readonly testTrafficRouteInput: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.listenerArnsInput">listenerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.listenerArns">listenerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listenerArnsInput`<sup>Optional</sup> <a name="listenerArnsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.listenerArnsInput"></a>

```typescript
public readonly listenerArnsInput: string[];
```

- *Type:* string[]

---

##### `listenerArns`<sup>Required</sup> <a name="listenerArns" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.listenerArns"></a>

```typescript
public readonly listenerArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute</a>

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a>[]

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup</a> | cdktf.IResolvable

---


### CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference <a name="CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.listenerArnsInput">listenerArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.listenerArns">listenerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listenerArnsInput`<sup>Optional</sup> <a name="listenerArnsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.listenerArnsInput"></a>

```typescript
public readonly listenerArnsInput: string[];
```

- *Type:* string[]

---

##### `listenerArns`<sup>Required</sup> <a name="listenerArns" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.listenerArns"></a>

```typescript
public readonly listenerArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute</a>

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFilterList <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilterList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a>[]

---


### CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference <a name="CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupOnPremisesInstanceTagFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupOnPremisesInstanceTagFilter">CodedeployDeploymentGroupOnPremisesInstanceTagFilter</a> | cdktf.IResolvable

---


### CodedeployDeploymentGroupTriggerConfigurationList <a name="CodedeployDeploymentGroupTriggerConfigurationList" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.get"></a>

```typescript
public get(index: number): CodedeployDeploymentGroupTriggerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodedeployDeploymentGroupTriggerConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a>[]

---


### CodedeployDeploymentGroupTriggerConfigurationOutputReference <a name="CodedeployDeploymentGroupTriggerConfigurationOutputReference" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer"></a>

```typescript
import { codedeployDeploymentGroup } from '@cdktf/provider-aws'

new codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerEventsInput">triggerEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerNameInput">triggerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerTargetArnInput">triggerTargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerEvents">triggerEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerName">triggerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerTargetArn">triggerTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `triggerEventsInput`<sup>Optional</sup> <a name="triggerEventsInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerEventsInput"></a>

```typescript
public readonly triggerEventsInput: string[];
```

- *Type:* string[]

---

##### `triggerNameInput`<sup>Optional</sup> <a name="triggerNameInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerNameInput"></a>

```typescript
public readonly triggerNameInput: string;
```

- *Type:* string

---

##### `triggerTargetArnInput`<sup>Optional</sup> <a name="triggerTargetArnInput" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerTargetArnInput"></a>

```typescript
public readonly triggerTargetArnInput: string;
```

- *Type:* string

---

##### `triggerEvents`<sup>Required</sup> <a name="triggerEvents" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerEvents"></a>

```typescript
public readonly triggerEvents: string[];
```

- *Type:* string[]

---

##### `triggerName`<sup>Required</sup> <a name="triggerName" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerName"></a>

```typescript
public readonly triggerName: string;
```

- *Type:* string

---

##### `triggerTargetArn`<sup>Required</sup> <a name="triggerTargetArn" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.triggerTargetArn"></a>

```typescript
public readonly triggerTargetArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodedeployDeploymentGroupTriggerConfiguration | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentGroup.CodedeployDeploymentGroupTriggerConfiguration">CodedeployDeploymentGroupTriggerConfiguration</a> | cdktf.IResolvable

---




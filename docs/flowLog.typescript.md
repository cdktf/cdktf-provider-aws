# `flowLog` Submodule <a name="`flowLog` Submodule" id="@cdktf/provider-aws.flowLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FlowLog <a name="FlowLog" id="@cdktf/provider-aws.flowLog.FlowLog"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/flow_log aws_flow_log}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer"></a>

```typescript
import { flowLog } from '@cdktf/provider-aws'

new flowLog.FlowLog(scope: Construct, id: string, config?: FlowLogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig">FlowLogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.flowLog.FlowLog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogConfig">FlowLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.putDestinationOptions">putDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetDestinationOptions">resetDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetEniId">resetEniId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetLogDestination">resetLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetLogDestinationType">resetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetMaxAggregationInterval">resetMaxAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTrafficType">resetTrafficType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTransitGatewayAttachmentId">resetTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.flowLog.FlowLog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.flowLog.FlowLog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.flowLog.FlowLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.flowLog.FlowLog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.flowLog.FlowLog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.flowLog.FlowLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.flowLog.FlowLog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.flowLog.FlowLog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.flowLog.FlowLog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDestinationOptions` <a name="putDestinationOptions" id="@cdktf/provider-aws.flowLog.FlowLog.putDestinationOptions"></a>

```typescript
public putDestinationOptions(value: FlowLogDestinationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.flowLog.FlowLog.putDestinationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

---

##### `resetDestinationOptions` <a name="resetDestinationOptions" id="@cdktf/provider-aws.flowLog.FlowLog.resetDestinationOptions"></a>

```typescript
public resetDestinationOptions(): void
```

##### `resetEniId` <a name="resetEniId" id="@cdktf/provider-aws.flowLog.FlowLog.resetEniId"></a>

```typescript
public resetEniId(): void
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktf/provider-aws.flowLog.FlowLog.resetIamRoleArn"></a>

```typescript
public resetIamRoleArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.flowLog.FlowLog.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogDestination` <a name="resetLogDestination" id="@cdktf/provider-aws.flowLog.FlowLog.resetLogDestination"></a>

```typescript
public resetLogDestination(): void
```

##### `resetLogDestinationType` <a name="resetLogDestinationType" id="@cdktf/provider-aws.flowLog.FlowLog.resetLogDestinationType"></a>

```typescript
public resetLogDestinationType(): void
```

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktf/provider-aws.flowLog.FlowLog.resetLogFormat"></a>

```typescript
public resetLogFormat(): void
```

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktf/provider-aws.flowLog.FlowLog.resetLogGroupName"></a>

```typescript
public resetLogGroupName(): void
```

##### `resetMaxAggregationInterval` <a name="resetMaxAggregationInterval" id="@cdktf/provider-aws.flowLog.FlowLog.resetMaxAggregationInterval"></a>

```typescript
public resetMaxAggregationInterval(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-aws.flowLog.FlowLog.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.flowLog.FlowLog.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.flowLog.FlowLog.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTrafficType` <a name="resetTrafficType" id="@cdktf/provider-aws.flowLog.FlowLog.resetTrafficType"></a>

```typescript
public resetTrafficType(): void
```

##### `resetTransitGatewayAttachmentId` <a name="resetTransitGatewayAttachmentId" id="@cdktf/provider-aws.flowLog.FlowLog.resetTransitGatewayAttachmentId"></a>

```typescript
public resetTransitGatewayAttachmentId(): void
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktf/provider-aws.flowLog.FlowLog.resetTransitGatewayId"></a>

```typescript
public resetTransitGatewayId(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.flowLog.FlowLog.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.flowLog.FlowLog.isConstruct"></a>

```typescript
import { flowLog } from '@cdktf/provider-aws'

flowLog.FlowLog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.flowLog.FlowLog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.flowLog.FlowLog.isTerraformElement"></a>

```typescript
import { flowLog } from '@cdktf/provider-aws'

flowLog.FlowLog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.flowLog.FlowLog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.flowLog.FlowLog.isTerraformResource"></a>

```typescript
import { flowLog } from '@cdktf/provider-aws'

flowLog.FlowLog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.flowLog.FlowLog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.destinationOptions">destinationOptions</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference">FlowLogDestinationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.destinationOptionsInput">destinationOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.eniIdInput">eniIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationInput">logDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationTypeInput">logDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logFormatInput">logFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.maxAggregationIntervalInput">maxAggregationIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.trafficTypeInput">trafficTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.eniId">eniId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logDestination">logDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationType">logDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.maxAggregationInterval">maxAggregationInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.trafficType">trafficType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.flowLog.FlowLog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.flowLog.FlowLog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.flowLog.FlowLog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.flowLog.FlowLog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.flowLog.FlowLog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.flowLog.FlowLog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.flowLog.FlowLog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.flowLog.FlowLog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.flowLog.FlowLog.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.flowLog.FlowLog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.flowLog.FlowLog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.flowLog.FlowLog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.flowLog.FlowLog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.flowLog.FlowLog.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.flowLog.FlowLog.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `destinationOptions`<sup>Required</sup> <a name="destinationOptions" id="@cdktf/provider-aws.flowLog.FlowLog.property.destinationOptions"></a>

```typescript
public readonly destinationOptions: FlowLogDestinationOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference">FlowLogDestinationOptionsOutputReference</a>

---

##### `destinationOptionsInput`<sup>Optional</sup> <a name="destinationOptionsInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.destinationOptionsInput"></a>

```typescript
public readonly destinationOptionsInput: FlowLogDestinationOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

---

##### `eniIdInput`<sup>Optional</sup> <a name="eniIdInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.eniIdInput"></a>

```typescript
public readonly eniIdInput: string;
```

- *Type:* string

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logDestinationInput`<sup>Optional</sup> <a name="logDestinationInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationInput"></a>

```typescript
public readonly logDestinationInput: string;
```

- *Type:* string

---

##### `logDestinationTypeInput`<sup>Optional</sup> <a name="logDestinationTypeInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationTypeInput"></a>

```typescript
public readonly logDestinationTypeInput: string;
```

- *Type:* string

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.logFormatInput"></a>

```typescript
public readonly logFormatInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `maxAggregationIntervalInput`<sup>Optional</sup> <a name="maxAggregationIntervalInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.maxAggregationIntervalInput"></a>

```typescript
public readonly maxAggregationIntervalInput: number;
```

- *Type:* number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `trafficTypeInput`<sup>Optional</sup> <a name="trafficTypeInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.trafficTypeInput"></a>

```typescript
public readonly trafficTypeInput: string;
```

- *Type:* string

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentIdInput"></a>

```typescript
public readonly transitGatewayAttachmentIdInput: string;
```

- *Type:* string

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.flowLog.FlowLog.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `eniId`<sup>Required</sup> <a name="eniId" id="@cdktf/provider-aws.flowLog.FlowLog.property.eniId"></a>

```typescript
public readonly eniId: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.flowLog.FlowLog.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.flowLog.FlowLog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktf/provider-aws.flowLog.FlowLog.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

---

##### `logDestinationType`<sup>Required</sup> <a name="logDestinationType" id="@cdktf/provider-aws.flowLog.FlowLog.property.logDestinationType"></a>

```typescript
public readonly logDestinationType: string;
```

- *Type:* string

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktf/provider-aws.flowLog.FlowLog.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.flowLog.FlowLog.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `maxAggregationInterval`<sup>Required</sup> <a name="maxAggregationInterval" id="@cdktf/provider-aws.flowLog.FlowLog.property.maxAggregationInterval"></a>

```typescript
public readonly maxAggregationInterval: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.flowLog.FlowLog.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.flowLog.FlowLog.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.flowLog.FlowLog.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `trafficType`<sup>Required</sup> <a name="trafficType" id="@cdktf/provider-aws.flowLog.FlowLog.property.trafficType"></a>

```typescript
public readonly trafficType: string;
```

- *Type:* string

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.flowLog.FlowLog.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.flowLog.FlowLog.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.flowLog.FlowLog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FlowLogConfig <a name="FlowLogConfig" id="@cdktf/provider-aws.flowLog.FlowLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.flowLog.FlowLogConfig.Initializer"></a>

```typescript
import { flowLog } from '@cdktf/provider-aws'

const flowLogConfig: flowLog.FlowLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.destinationOptions">destinationOptions</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | destination_options block. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.eniId">eniId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#eni_id FlowLog#eni_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#iam_role_arn FlowLog#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#id FlowLog#id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.logDestination">logDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination FlowLog#log_destination}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.logDestinationType">logDestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination_type FlowLog#log_destination_type}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.logFormat">logFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_format FlowLog#log_format}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_group_name FlowLog#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.maxAggregationInterval">maxAggregationInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#max_aggregation_interval FlowLog#max_aggregation_interval}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#subnet_id FlowLog#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags FlowLog#tags}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags_all FlowLog#tags_all}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.trafficType">trafficType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#traffic_type FlowLog#traffic_type}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_attachment_id FlowLog#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_id FlowLog#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#vpc_id FlowLog#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationOptions`<sup>Optional</sup> <a name="destinationOptions" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.destinationOptions"></a>

```typescript
public readonly destinationOptions: FlowLogDestinationOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

destination_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#destination_options FlowLog#destination_options}

---

##### `eniId`<sup>Optional</sup> <a name="eniId" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.eniId"></a>

```typescript
public readonly eniId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#eni_id FlowLog#eni_id}.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#iam_role_arn FlowLog#iam_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#id FlowLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logDestination`<sup>Optional</sup> <a name="logDestination" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination FlowLog#log_destination}.

---

##### `logDestinationType`<sup>Optional</sup> <a name="logDestinationType" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.logDestinationType"></a>

```typescript
public readonly logDestinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_destination_type FlowLog#log_destination_type}.

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_format FlowLog#log_format}.

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#log_group_name FlowLog#log_group_name}.

---

##### `maxAggregationInterval`<sup>Optional</sup> <a name="maxAggregationInterval" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.maxAggregationInterval"></a>

```typescript
public readonly maxAggregationInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#max_aggregation_interval FlowLog#max_aggregation_interval}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#subnet_id FlowLog#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags FlowLog#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#tags_all FlowLog#tags_all}.

---

##### `trafficType`<sup>Optional</sup> <a name="trafficType" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.trafficType"></a>

```typescript
public readonly trafficType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#traffic_type FlowLog#traffic_type}.

---

##### `transitGatewayAttachmentId`<sup>Optional</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_attachment_id FlowLog#transit_gateway_attachment_id}.

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#transit_gateway_id FlowLog#transit_gateway_id}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.flowLog.FlowLogConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#vpc_id FlowLog#vpc_id}.

---

### FlowLogDestinationOptions <a name="FlowLogDestinationOptions" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.Initializer"></a>

```typescript
import { flowLog } from '@cdktf/provider-aws'

const flowLogDestinationOptions: flowLog.FlowLogDestinationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.fileFormat">fileFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#file_format FlowLog#file_format}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.hiveCompatiblePartitions">hiveCompatiblePartitions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#hive_compatible_partitions FlowLog#hive_compatible_partitions}. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.perHourPartition">perHourPartition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#per_hour_partition FlowLog#per_hour_partition}. |

---

##### `fileFormat`<sup>Optional</sup> <a name="fileFormat" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.fileFormat"></a>

```typescript
public readonly fileFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#file_format FlowLog#file_format}.

---

##### `hiveCompatiblePartitions`<sup>Optional</sup> <a name="hiveCompatiblePartitions" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.hiveCompatiblePartitions"></a>

```typescript
public readonly hiveCompatiblePartitions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#hive_compatible_partitions FlowLog#hive_compatible_partitions}.

---

##### `perHourPartition`<sup>Optional</sup> <a name="perHourPartition" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptions.property.perHourPartition"></a>

```typescript
public readonly perHourPartition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log#per_hour_partition FlowLog#per_hour_partition}.

---

## Classes <a name="Classes" id="Classes"></a>

### FlowLogDestinationOptionsOutputReference <a name="FlowLogDestinationOptionsOutputReference" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer"></a>

```typescript
import { flowLog } from '@cdktf/provider-aws'

new flowLog.FlowLogDestinationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetFileFormat">resetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions">resetHiveCompatiblePartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetPerHourPartition">resetPerHourPartition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileFormat` <a name="resetFileFormat" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetFileFormat"></a>

```typescript
public resetFileFormat(): void
```

##### `resetHiveCompatiblePartitions` <a name="resetHiveCompatiblePartitions" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetHiveCompatiblePartitions"></a>

```typescript
public resetHiveCompatiblePartitions(): void
```

##### `resetPerHourPartition` <a name="resetPerHourPartition" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.resetPerHourPartition"></a>

```typescript
public resetPerHourPartition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormatInput">fileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput">hiveCompatiblePartitionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput">perHourPartitionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormat">fileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions">hiveCompatiblePartitions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartition">perHourPartition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileFormatInput`<sup>Optional</sup> <a name="fileFormatInput" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormatInput"></a>

```typescript
public readonly fileFormatInput: string;
```

- *Type:* string

---

##### `hiveCompatiblePartitionsInput`<sup>Optional</sup> <a name="hiveCompatiblePartitionsInput" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitionsInput"></a>

```typescript
public readonly hiveCompatiblePartitionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `perHourPartitionInput`<sup>Optional</sup> <a name="perHourPartitionInput" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartitionInput"></a>

```typescript
public readonly perHourPartitionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.fileFormat"></a>

```typescript
public readonly fileFormat: string;
```

- *Type:* string

---

##### `hiveCompatiblePartitions`<sup>Required</sup> <a name="hiveCompatiblePartitions" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.hiveCompatiblePartitions"></a>

```typescript
public readonly hiveCompatiblePartitions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `perHourPartition`<sup>Required</sup> <a name="perHourPartition" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.perHourPartition"></a>

```typescript
public readonly perHourPartition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.flowLog.FlowLogDestinationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FlowLogDestinationOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.flowLog.FlowLogDestinationOptions">FlowLogDestinationOptions</a>

---




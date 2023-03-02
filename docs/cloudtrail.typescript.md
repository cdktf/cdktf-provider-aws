# `cloudtrail` Submodule <a name="`cloudtrail` Submodule" id="@cdktf/provider-aws.cloudtrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudtrail <a name="Cloudtrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail aws_cloudtrail}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

new cloudtrail.Cloudtrail(scope: Construct, id: string, config: CloudtrailConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig">CloudtrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig">CloudtrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.putAdvancedEventSelector">putAdvancedEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.putEventSelector">putEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.putInsightSelector">putInsightSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetAdvancedEventSelector">resetAdvancedEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsGroupArn">resetCloudWatchLogsGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsRoleArn">resetCloudWatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogFileValidation">resetEnableLogFileValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEventSelector">resetEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIncludeGlobalServiceEvents">resetIncludeGlobalServiceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetInsightSelector">resetInsightSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsMultiRegionTrail">resetIsMultiRegionTrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsOrganizationTrail">resetIsOrganizationTrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetSnsTopicName">resetSnsTopicName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAdvancedEventSelector` <a name="putAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putAdvancedEventSelector"></a>

```typescript
public putAdvancedEventSelector(value: IResolvable | CloudtrailAdvancedEventSelector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putAdvancedEventSelector.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>[]

---

##### `putEventSelector` <a name="putEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putEventSelector"></a>

```typescript
public putEventSelector(value: IResolvable | CloudtrailEventSelector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putEventSelector.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>[]

---

##### `putInsightSelector` <a name="putInsightSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putInsightSelector"></a>

```typescript
public putInsightSelector(value: IResolvable | CloudtrailInsightSelector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.putInsightSelector.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>[]

---

##### `resetAdvancedEventSelector` <a name="resetAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetAdvancedEventSelector"></a>

```typescript
public resetAdvancedEventSelector(): void
```

##### `resetCloudWatchLogsGroupArn` <a name="resetCloudWatchLogsGroupArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsGroupArn"></a>

```typescript
public resetCloudWatchLogsGroupArn(): void
```

##### `resetCloudWatchLogsRoleArn` <a name="resetCloudWatchLogsRoleArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetCloudWatchLogsRoleArn"></a>

```typescript
public resetCloudWatchLogsRoleArn(): void
```

##### `resetEnableLogFileValidation` <a name="resetEnableLogFileValidation" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogFileValidation"></a>

```typescript
public resetEnableLogFileValidation(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetEventSelector` <a name="resetEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetEventSelector"></a>

```typescript
public resetEventSelector(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeGlobalServiceEvents` <a name="resetIncludeGlobalServiceEvents" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIncludeGlobalServiceEvents"></a>

```typescript
public resetIncludeGlobalServiceEvents(): void
```

##### `resetInsightSelector` <a name="resetInsightSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetInsightSelector"></a>

```typescript
public resetInsightSelector(): void
```

##### `resetIsMultiRegionTrail` <a name="resetIsMultiRegionTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsMultiRegionTrail"></a>

```typescript
public resetIsMultiRegionTrail(): void
```

##### `resetIsOrganizationTrail` <a name="resetIsOrganizationTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetIsOrganizationTrail"></a>

```typescript
public resetIsOrganizationTrail(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetS3KeyPrefix"></a>

```typescript
public resetS3KeyPrefix(): void
```

##### `resetSnsTopicName` <a name="resetSnsTopicName" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetSnsTopicName"></a>

```typescript
public resetSnsTopicName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isConstruct"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

cloudtrail.Cloudtrail.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformElement"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

cloudtrail.Cloudtrail.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformResource"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

cloudtrail.Cloudtrail.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelector">advancedEventSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList">CloudtrailAdvancedEventSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelector">eventSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList">CloudtrailEventSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.homeRegion">homeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelector">insightSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList">CloudtrailInsightSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelectorInput">advancedEventSelectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArnInput">cloudWatchLogsGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArnInput">cloudWatchLogsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidationInput">enableLogFileValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelectorInput">eventSelectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEventsInput">includeGlobalServiceEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelectorInput">insightSelectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrailInput">isMultiRegionTrailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrailInput">isOrganizationTrailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicNameInput">snsTopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArn">cloudWatchLogsGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArn">cloudWatchLogsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidation">enableLogFileValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEvents">includeGlobalServiceEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrail">isMultiRegionTrail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrail">isOrganizationTrail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicName">snsTopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedEventSelector`<sup>Required</sup> <a name="advancedEventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelector"></a>

```typescript
public readonly advancedEventSelector: CloudtrailAdvancedEventSelectorList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList">CloudtrailAdvancedEventSelectorList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `eventSelector`<sup>Required</sup> <a name="eventSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelector"></a>

```typescript
public readonly eventSelector: CloudtrailEventSelectorList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList">CloudtrailEventSelectorList</a>

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.homeRegion"></a>

```typescript
public readonly homeRegion: string;
```

- *Type:* string

---

##### `insightSelector`<sup>Required</sup> <a name="insightSelector" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelector"></a>

```typescript
public readonly insightSelector: CloudtrailInsightSelectorList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList">CloudtrailInsightSelectorList</a>

---

##### `advancedEventSelectorInput`<sup>Optional</sup> <a name="advancedEventSelectorInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.advancedEventSelectorInput"></a>

```typescript
public readonly advancedEventSelectorInput: IResolvable | CloudtrailAdvancedEventSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>[]

---

##### `cloudWatchLogsGroupArnInput`<sup>Optional</sup> <a name="cloudWatchLogsGroupArnInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArnInput"></a>

```typescript
public readonly cloudWatchLogsGroupArnInput: string;
```

- *Type:* string

---

##### `cloudWatchLogsRoleArnInput`<sup>Optional</sup> <a name="cloudWatchLogsRoleArnInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArnInput"></a>

```typescript
public readonly cloudWatchLogsRoleArnInput: string;
```

- *Type:* string

---

##### `enableLogFileValidationInput`<sup>Optional</sup> <a name="enableLogFileValidationInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidationInput"></a>

```typescript
public readonly enableLogFileValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventSelectorInput`<sup>Optional</sup> <a name="eventSelectorInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.eventSelectorInput"></a>

```typescript
public readonly eventSelectorInput: IResolvable | CloudtrailEventSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeGlobalServiceEventsInput`<sup>Optional</sup> <a name="includeGlobalServiceEventsInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEventsInput"></a>

```typescript
public readonly includeGlobalServiceEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `insightSelectorInput`<sup>Optional</sup> <a name="insightSelectorInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.insightSelectorInput"></a>

```typescript
public readonly insightSelectorInput: IResolvable | CloudtrailInsightSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>[]

---

##### `isMultiRegionTrailInput`<sup>Optional</sup> <a name="isMultiRegionTrailInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrailInput"></a>

```typescript
public readonly isMultiRegionTrailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isOrganizationTrailInput`<sup>Optional</sup> <a name="isOrganizationTrailInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrailInput"></a>

```typescript
public readonly isOrganizationTrailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefixInput"></a>

```typescript
public readonly s3KeyPrefixInput: string;
```

- *Type:* string

---

##### `snsTopicNameInput`<sup>Optional</sup> <a name="snsTopicNameInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicNameInput"></a>

```typescript
public readonly snsTopicNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cloudWatchLogsGroupArn`<sup>Required</sup> <a name="cloudWatchLogsGroupArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsGroupArn"></a>

```typescript
public readonly cloudWatchLogsGroupArn: string;
```

- *Type:* string

---

##### `cloudWatchLogsRoleArn`<sup>Required</sup> <a name="cloudWatchLogsRoleArn" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.cloudWatchLogsRoleArn"></a>

```typescript
public readonly cloudWatchLogsRoleArn: string;
```

- *Type:* string

---

##### `enableLogFileValidation`<sup>Required</sup> <a name="enableLogFileValidation" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogFileValidation"></a>

```typescript
public readonly enableLogFileValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeGlobalServiceEvents`<sup>Required</sup> <a name="includeGlobalServiceEvents" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.includeGlobalServiceEvents"></a>

```typescript
public readonly includeGlobalServiceEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMultiRegionTrail`<sup>Required</sup> <a name="isMultiRegionTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isMultiRegionTrail"></a>

```typescript
public readonly isMultiRegionTrail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isOrganizationTrail`<sup>Required</sup> <a name="isOrganizationTrail" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.isOrganizationTrail"></a>

```typescript
public readonly isOrganizationTrail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `snsTopicName`<sup>Required</sup> <a name="snsTopicName" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.snsTopicName"></a>

```typescript
public readonly snsTopicName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudtrail.Cloudtrail.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailAdvancedEventSelector <a name="CloudtrailAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

const cloudtrailAdvancedEventSelector: cloudtrail.CloudtrailAdvancedEventSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.fieldSelector">fieldSelector</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>[]</code> | field_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}. |

---

##### `fieldSelector`<sup>Required</sup> <a name="fieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.fieldSelector"></a>

```typescript
public readonly fieldSelector: IResolvable | CloudtrailAdvancedEventSelectorFieldSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>[]

field_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#field_selector Cloudtrail#field_selector}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}.

---

### CloudtrailAdvancedEventSelectorFieldSelector <a name="CloudtrailAdvancedEventSelectorFieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

const cloudtrailAdvancedEventSelectorFieldSelector: cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.field">field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#field Cloudtrail#field}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.endsWith">endsWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#ends_with Cloudtrail#ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.equalTo">equalTo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#equals Cloudtrail#equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEndsWith">notEndsWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_ends_with Cloudtrail#not_ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEquals">notEquals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_equals Cloudtrail#not_equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notStartsWith">notStartsWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_starts_with Cloudtrail#not_starts_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.startsWith">startsWith</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#starts_with Cloudtrail#starts_with}. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#field Cloudtrail#field}.

---

##### `endsWith`<sup>Optional</sup> <a name="endsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#ends_with Cloudtrail#ends_with}.

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#equals Cloudtrail#equals}.

---

##### `notEndsWith`<sup>Optional</sup> <a name="notEndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEndsWith"></a>

```typescript
public readonly notEndsWith: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_ends_with Cloudtrail#not_ends_with}.

---

##### `notEquals`<sup>Optional</sup> <a name="notEquals" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_equals Cloudtrail#not_equals}.

---

##### `notStartsWith`<sup>Optional</sup> <a name="notStartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.notStartsWith"></a>

```typescript
public readonly notStartsWith: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#not_starts_with Cloudtrail#not_starts_with}.

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#starts_with Cloudtrail#starts_with}.

---

### CloudtrailConfig <a name="CloudtrailConfig" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

const cloudtrailConfig: cloudtrail.CloudtrailConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.advancedEventSelector">advancedEventSelector</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>[]</code> | advanced_event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsGroupArn">cloudWatchLogsGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsRoleArn">cloudWatchLogsRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogFileValidation">enableLogFileValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_logging Cloudtrail#enable_logging}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.eventSelector">eventSelector</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>[]</code> | event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#id Cloudtrail#id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.includeGlobalServiceEvents">includeGlobalServiceEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.insightSelector">insightSelector</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>[]</code> | insight_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isMultiRegionTrail">isMultiRegionTrail</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isOrganizationTrail">isOrganizationTrail</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#kms_key_id Cloudtrail#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.snsTopicName">snsTopicName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags Cloudtrail#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags_all Cloudtrail#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#name Cloudtrail#name}.

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_bucket_name Cloudtrail#s3_bucket_name}.

---

##### `advancedEventSelector`<sup>Optional</sup> <a name="advancedEventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.advancedEventSelector"></a>

```typescript
public readonly advancedEventSelector: IResolvable | CloudtrailAdvancedEventSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>[]

advanced_event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#advanced_event_selector Cloudtrail#advanced_event_selector}

---

##### `cloudWatchLogsGroupArn`<sup>Optional</sup> <a name="cloudWatchLogsGroupArn" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsGroupArn"></a>

```typescript
public readonly cloudWatchLogsGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}.

---

##### `cloudWatchLogsRoleArn`<sup>Optional</sup> <a name="cloudWatchLogsRoleArn" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.cloudWatchLogsRoleArn"></a>

```typescript
public readonly cloudWatchLogsRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}.

---

##### `enableLogFileValidation`<sup>Optional</sup> <a name="enableLogFileValidation" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogFileValidation"></a>

```typescript
public readonly enableLogFileValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_log_file_validation Cloudtrail#enable_log_file_validation}.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#enable_logging Cloudtrail#enable_logging}.

---

##### `eventSelector`<sup>Optional</sup> <a name="eventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.eventSelector"></a>

```typescript
public readonly eventSelector: IResolvable | CloudtrailEventSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>[]

event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#event_selector Cloudtrail#event_selector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#id Cloudtrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeGlobalServiceEvents`<sup>Optional</sup> <a name="includeGlobalServiceEvents" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.includeGlobalServiceEvents"></a>

```typescript
public readonly includeGlobalServiceEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_global_service_events Cloudtrail#include_global_service_events}.

---

##### `insightSelector`<sup>Optional</sup> <a name="insightSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.insightSelector"></a>

```typescript
public readonly insightSelector: IResolvable | CloudtrailInsightSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>[]

insight_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_selector Cloudtrail#insight_selector}

---

##### `isMultiRegionTrail`<sup>Optional</sup> <a name="isMultiRegionTrail" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isMultiRegionTrail"></a>

```typescript
public readonly isMultiRegionTrail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_multi_region_trail Cloudtrail#is_multi_region_trail}.

---

##### `isOrganizationTrail`<sup>Optional</sup> <a name="isOrganizationTrail" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.isOrganizationTrail"></a>

```typescript
public readonly isOrganizationTrail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#is_organization_trail Cloudtrail#is_organization_trail}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#kms_key_id Cloudtrail#kms_key_id}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#s3_key_prefix Cloudtrail#s3_key_prefix}.

---

##### `snsTopicName`<sup>Optional</sup> <a name="snsTopicName" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.snsTopicName"></a>

```typescript
public readonly snsTopicName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#sns_topic_name Cloudtrail#sns_topic_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags Cloudtrail#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudtrail.CloudtrailConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#tags_all Cloudtrail#tags_all}.

---

### CloudtrailEventSelector <a name="CloudtrailEventSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

const cloudtrailEventSelector: cloudtrail.CloudtrailEventSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.dataResource">dataResource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>[]</code> | data_resource block. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.excludeManagementEventSources">excludeManagementEventSources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#exclude_management_event_sources Cloudtrail#exclude_management_event_sources}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.includeManagementEvents">includeManagementEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_management_events Cloudtrail#include_management_events}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.readWriteType">readWriteType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#read_write_type Cloudtrail#read_write_type}. |

---

##### `dataResource`<sup>Optional</sup> <a name="dataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.dataResource"></a>

```typescript
public readonly dataResource: IResolvable | CloudtrailEventSelectorDataResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>[]

data_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#data_resource Cloudtrail#data_resource}

---

##### `excludeManagementEventSources`<sup>Optional</sup> <a name="excludeManagementEventSources" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.excludeManagementEventSources"></a>

```typescript
public readonly excludeManagementEventSources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#exclude_management_event_sources Cloudtrail#exclude_management_event_sources}.

---

##### `includeManagementEvents`<sup>Optional</sup> <a name="includeManagementEvents" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.includeManagementEvents"></a>

```typescript
public readonly includeManagementEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#include_management_events Cloudtrail#include_management_events}.

---

##### `readWriteType`<sup>Optional</sup> <a name="readWriteType" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector.property.readWriteType"></a>

```typescript
public readonly readWriteType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#read_write_type Cloudtrail#read_write_type}.

---

### CloudtrailEventSelectorDataResource <a name="CloudtrailEventSelectorDataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

const cloudtrailEventSelectorDataResource: cloudtrail.CloudtrailEventSelectorDataResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#type Cloudtrail#type}. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#values Cloudtrail#values}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#type Cloudtrail#type}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#values Cloudtrail#values}.

---

### CloudtrailInsightSelector <a name="CloudtrailInsightSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

const cloudtrailInsightSelector: cloudtrail.CloudtrailInsightSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector.property.insightType">insightType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_type Cloudtrail#insight_type}. |

---

##### `insightType`<sup>Required</sup> <a name="insightType" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector.property.insightType"></a>

```typescript
public readonly insightType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail#insight_type Cloudtrail#insight_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailAdvancedEventSelectorFieldSelectorList <a name="CloudtrailAdvancedEventSelectorFieldSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

new cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.get"></a>

```typescript
public get(index: number): CloudtrailAdvancedEventSelectorFieldSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailAdvancedEventSelectorFieldSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>[]

---


### CloudtrailAdvancedEventSelectorFieldSelectorOutputReference <a name="CloudtrailAdvancedEventSelectorFieldSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

new cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith">resetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith">resetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals">resetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith">resetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndsWith` <a name="resetEndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith"></a>

```typescript
public resetEndsWith(): void
```

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo"></a>

```typescript
public resetEqualTo(): void
```

##### `resetNotEndsWith` <a name="resetNotEndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith"></a>

```typescript
public resetNotEndsWith(): void
```

##### `resetNotEquals` <a name="resetNotEquals" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals"></a>

```typescript
public resetNotEquals(): void
```

##### `resetNotStartsWith` <a name="resetNotStartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith"></a>

```typescript
public resetNotStartsWith(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput">endsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput">equalToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput">notEndsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput">notEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput">notStartsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith">endsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo">equalTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith">notEndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals">notEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith">notStartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith">startsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endsWithInput`<sup>Optional</sup> <a name="endsWithInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput"></a>

```typescript
public readonly endsWithInput: string[];
```

- *Type:* string[]

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput"></a>

```typescript
public readonly equalToInput: string[];
```

- *Type:* string[]

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `notEndsWithInput`<sup>Optional</sup> <a name="notEndsWithInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput"></a>

```typescript
public readonly notEndsWithInput: string[];
```

- *Type:* string[]

---

##### `notEqualsInput`<sup>Optional</sup> <a name="notEqualsInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput"></a>

```typescript
public readonly notEqualsInput: string[];
```

- *Type:* string[]

---

##### `notStartsWithInput`<sup>Optional</sup> <a name="notStartsWithInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput"></a>

```typescript
public readonly notStartsWithInput: string[];
```

- *Type:* string[]

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string[];
```

- *Type:* string[]

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `notEndsWith`<sup>Required</sup> <a name="notEndsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith"></a>

```typescript
public readonly notEndsWith: string[];
```

- *Type:* string[]

---

##### `notEquals`<sup>Required</sup> <a name="notEquals" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

---

##### `notStartsWith`<sup>Required</sup> <a name="notStartsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith"></a>

```typescript
public readonly notStartsWith: string[];
```

- *Type:* string[]

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudtrailAdvancedEventSelectorFieldSelector | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a> | cdktf.IResolvable

---


### CloudtrailAdvancedEventSelectorList <a name="CloudtrailAdvancedEventSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

new cloudtrail.CloudtrailAdvancedEventSelectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.get"></a>

```typescript
public get(index: number): CloudtrailAdvancedEventSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailAdvancedEventSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a>[]

---


### CloudtrailAdvancedEventSelectorOutputReference <a name="CloudtrailAdvancedEventSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

new cloudtrail.CloudtrailAdvancedEventSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.putFieldSelector">putFieldSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldSelector` <a name="putFieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.putFieldSelector"></a>

```typescript
public putFieldSelector(value: IResolvable | CloudtrailAdvancedEventSelectorFieldSelector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.putFieldSelector.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>[]

---

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelector">fieldSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList">CloudtrailAdvancedEventSelectorFieldSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelectorInput">fieldSelectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldSelector`<sup>Required</sup> <a name="fieldSelector" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelector"></a>

```typescript
public readonly fieldSelector: CloudtrailAdvancedEventSelectorFieldSelectorList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelectorList">CloudtrailAdvancedEventSelectorFieldSelectorList</a>

---

##### `fieldSelectorInput`<sup>Optional</sup> <a name="fieldSelectorInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.fieldSelectorInput"></a>

```typescript
public readonly fieldSelectorInput: IResolvable | CloudtrailAdvancedEventSelectorFieldSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorFieldSelector">CloudtrailAdvancedEventSelectorFieldSelector</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudtrailAdvancedEventSelector | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailAdvancedEventSelector">CloudtrailAdvancedEventSelector</a> | cdktf.IResolvable

---


### CloudtrailEventSelectorDataResourceList <a name="CloudtrailEventSelectorDataResourceList" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

new cloudtrail.CloudtrailEventSelectorDataResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.get"></a>

```typescript
public get(index: number): CloudtrailEventSelectorDataResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventSelectorDataResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>[]

---


### CloudtrailEventSelectorDataResourceOutputReference <a name="CloudtrailEventSelectorDataResourceOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

new cloudtrail.CloudtrailEventSelectorDataResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudtrailEventSelectorDataResource | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a> | cdktf.IResolvable

---


### CloudtrailEventSelectorList <a name="CloudtrailEventSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

new cloudtrail.CloudtrailEventSelectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.get"></a>

```typescript
public get(index: number): CloudtrailEventSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailEventSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a>[]

---


### CloudtrailEventSelectorOutputReference <a name="CloudtrailEventSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

new cloudtrail.CloudtrailEventSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.putDataResource">putDataResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetDataResource">resetDataResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetExcludeManagementEventSources">resetExcludeManagementEventSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetIncludeManagementEvents">resetIncludeManagementEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetReadWriteType">resetReadWriteType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataResource` <a name="putDataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.putDataResource"></a>

```typescript
public putDataResource(value: IResolvable | CloudtrailEventSelectorDataResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.putDataResource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>[]

---

##### `resetDataResource` <a name="resetDataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetDataResource"></a>

```typescript
public resetDataResource(): void
```

##### `resetExcludeManagementEventSources` <a name="resetExcludeManagementEventSources" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetExcludeManagementEventSources"></a>

```typescript
public resetExcludeManagementEventSources(): void
```

##### `resetIncludeManagementEvents` <a name="resetIncludeManagementEvents" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetIncludeManagementEvents"></a>

```typescript
public resetIncludeManagementEvents(): void
```

##### `resetReadWriteType` <a name="resetReadWriteType" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.resetReadWriteType"></a>

```typescript
public resetReadWriteType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResource">dataResource</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList">CloudtrailEventSelectorDataResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResourceInput">dataResourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSourcesInput">excludeManagementEventSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEventsInput">includeManagementEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteTypeInput">readWriteTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSources">excludeManagementEventSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEvents">includeManagementEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteType">readWriteType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataResource`<sup>Required</sup> <a name="dataResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResource"></a>

```typescript
public readonly dataResource: CloudtrailEventSelectorDataResourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResourceList">CloudtrailEventSelectorDataResourceList</a>

---

##### `dataResourceInput`<sup>Optional</sup> <a name="dataResourceInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.dataResourceInput"></a>

```typescript
public readonly dataResourceInput: IResolvable | CloudtrailEventSelectorDataResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorDataResource">CloudtrailEventSelectorDataResource</a>[]

---

##### `excludeManagementEventSourcesInput`<sup>Optional</sup> <a name="excludeManagementEventSourcesInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSourcesInput"></a>

```typescript
public readonly excludeManagementEventSourcesInput: string[];
```

- *Type:* string[]

---

##### `includeManagementEventsInput`<sup>Optional</sup> <a name="includeManagementEventsInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEventsInput"></a>

```typescript
public readonly includeManagementEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readWriteTypeInput`<sup>Optional</sup> <a name="readWriteTypeInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteTypeInput"></a>

```typescript
public readonly readWriteTypeInput: string;
```

- *Type:* string

---

##### `excludeManagementEventSources`<sup>Required</sup> <a name="excludeManagementEventSources" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.excludeManagementEventSources"></a>

```typescript
public readonly excludeManagementEventSources: string[];
```

- *Type:* string[]

---

##### `includeManagementEvents`<sup>Required</sup> <a name="includeManagementEvents" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.includeManagementEvents"></a>

```typescript
public readonly includeManagementEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readWriteType`<sup>Required</sup> <a name="readWriteType" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.readWriteType"></a>

```typescript
public readonly readWriteType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailEventSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudtrailEventSelector | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailEventSelector">CloudtrailEventSelector</a> | cdktf.IResolvable

---


### CloudtrailInsightSelectorList <a name="CloudtrailInsightSelectorList" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

new cloudtrail.CloudtrailInsightSelectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.get"></a>

```typescript
public get(index: number): CloudtrailInsightSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudtrailInsightSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a>[]

---


### CloudtrailInsightSelectorOutputReference <a name="CloudtrailInsightSelectorOutputReference" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer"></a>

```typescript
import { cloudtrail } from '@cdktf/provider-aws'

new cloudtrail.CloudtrailInsightSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightTypeInput">insightTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightType">insightType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insightTypeInput`<sup>Optional</sup> <a name="insightTypeInput" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightTypeInput"></a>

```typescript
public readonly insightTypeInput: string;
```

- *Type:* string

---

##### `insightType`<sup>Required</sup> <a name="insightType" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.insightType"></a>

```typescript
public readonly insightType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudtrailInsightSelector | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrail.CloudtrailInsightSelector">CloudtrailInsightSelector</a> | cdktf.IResolvable

---




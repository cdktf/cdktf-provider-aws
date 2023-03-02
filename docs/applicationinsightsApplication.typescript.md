# `applicationinsightsApplication` Submodule <a name="`applicationinsightsApplication` Submodule" id="@cdktf/provider-aws.applicationinsightsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationinsightsApplication <a name="ApplicationinsightsApplication" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application aws_applicationinsights_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer"></a>

```typescript
import { applicationinsightsApplication } from '@cdktf/provider-aws'

new applicationinsightsApplication.ApplicationinsightsApplication(scope: Construct, id: string, config: ApplicationinsightsApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig">ApplicationinsightsApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig">ApplicationinsightsApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoConfigEnabled">resetAutoConfigEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoCreate">resetAutoCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetCweMonitorEnabled">resetCweMonitorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetGroupingType">resetGroupingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsCenterEnabled">resetOpsCenterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsItemSnsTopicArn">resetOpsItemSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAutoConfigEnabled` <a name="resetAutoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoConfigEnabled"></a>

```typescript
public resetAutoConfigEnabled(): void
```

##### `resetAutoCreate` <a name="resetAutoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoCreate"></a>

```typescript
public resetAutoCreate(): void
```

##### `resetCweMonitorEnabled` <a name="resetCweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetCweMonitorEnabled"></a>

```typescript
public resetCweMonitorEnabled(): void
```

##### `resetGroupingType` <a name="resetGroupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetGroupingType"></a>

```typescript
public resetGroupingType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpsCenterEnabled` <a name="resetOpsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsCenterEnabled"></a>

```typescript
public resetOpsCenterEnabled(): void
```

##### `resetOpsItemSnsTopicArn` <a name="resetOpsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsItemSnsTopicArn"></a>

```typescript
public resetOpsItemSnsTopicArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct"></a>

```typescript
import { applicationinsightsApplication } from '@cdktf/provider-aws'

applicationinsightsApplication.ApplicationinsightsApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement"></a>

```typescript
import { applicationinsightsApplication } from '@cdktf/provider-aws'

applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource"></a>

```typescript
import { applicationinsightsApplication } from '@cdktf/provider-aws'

applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabledInput">autoConfigEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreateInput">autoCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabledInput">cweMonitorEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingTypeInput">groupingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabledInput">opsCenterEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArnInput">opsItemSnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabled">autoConfigEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreate">autoCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabled">cweMonitorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingType">groupingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabled">opsCenterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArn">opsItemSnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoConfigEnabledInput`<sup>Optional</sup> <a name="autoConfigEnabledInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabledInput"></a>

```typescript
public readonly autoConfigEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoCreateInput`<sup>Optional</sup> <a name="autoCreateInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreateInput"></a>

```typescript
public readonly autoCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cweMonitorEnabledInput`<sup>Optional</sup> <a name="cweMonitorEnabledInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabledInput"></a>

```typescript
public readonly cweMonitorEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupingTypeInput`<sup>Optional</sup> <a name="groupingTypeInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingTypeInput"></a>

```typescript
public readonly groupingTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `opsCenterEnabledInput`<sup>Optional</sup> <a name="opsCenterEnabledInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabledInput"></a>

```typescript
public readonly opsCenterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `opsItemSnsTopicArnInput`<sup>Optional</sup> <a name="opsItemSnsTopicArnInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArnInput"></a>

```typescript
public readonly opsItemSnsTopicArnInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `autoConfigEnabled`<sup>Required</sup> <a name="autoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabled"></a>

```typescript
public readonly autoConfigEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoCreate`<sup>Required</sup> <a name="autoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreate"></a>

```typescript
public readonly autoCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cweMonitorEnabled`<sup>Required</sup> <a name="cweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabled"></a>

```typescript
public readonly cweMonitorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupingType`<sup>Required</sup> <a name="groupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingType"></a>

```typescript
public readonly groupingType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `opsCenterEnabled`<sup>Required</sup> <a name="opsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabled"></a>

```typescript
public readonly opsCenterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `opsItemSnsTopicArn`<sup>Required</sup> <a name="opsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArn"></a>

```typescript
public readonly opsItemSnsTopicArn: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationinsightsApplicationConfig <a name="ApplicationinsightsApplicationConfig" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.Initializer"></a>

```typescript
import { applicationinsightsApplication } from '@cdktf/provider-aws'

const applicationinsightsApplicationConfig: applicationinsightsApplication.ApplicationinsightsApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoConfigEnabled">autoConfigEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoCreate">autoCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.cweMonitorEnabled">cweMonitorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.groupingType">groupingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#id ApplicationinsightsApplication#id}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsCenterEnabled">opsCenterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsItemSnsTopicArn">opsItemSnsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags ApplicationinsightsApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}.

---

##### `autoConfigEnabled`<sup>Optional</sup> <a name="autoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoConfigEnabled"></a>

```typescript
public readonly autoConfigEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}.

---

##### `autoCreate`<sup>Optional</sup> <a name="autoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoCreate"></a>

```typescript
public readonly autoCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}.

---

##### `cweMonitorEnabled`<sup>Optional</sup> <a name="cweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.cweMonitorEnabled"></a>

```typescript
public readonly cweMonitorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}.

---

##### `groupingType`<sup>Optional</sup> <a name="groupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.groupingType"></a>

```typescript
public readonly groupingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#id ApplicationinsightsApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsCenterEnabled`<sup>Optional</sup> <a name="opsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsCenterEnabled"></a>

```typescript
public readonly opsCenterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}.

---

##### `opsItemSnsTopicArn`<sup>Optional</sup> <a name="opsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsItemSnsTopicArn"></a>

```typescript
public readonly opsItemSnsTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags ApplicationinsightsApplication#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}.

---




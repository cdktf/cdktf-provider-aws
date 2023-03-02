# `auditmanagerControl` Submodule <a name="`auditmanagerControl` Submodule" id="@cdktf/provider-aws.auditmanagerControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerControl <a name="AuditmanagerControl" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control aws_auditmanager_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer"></a>

```typescript
import { auditmanagerControl } from '@cdktf/provider-aws'

new auditmanagerControl.AuditmanagerControl(scope: Construct, id: string, config: AuditmanagerControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig">AuditmanagerControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig">AuditmanagerControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.putControlMappingSources">putControlMappingSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanInstructions">resetActionPlanInstructions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanTitle">resetActionPlanTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetControlMappingSources">resetControlMappingSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetTestingInformation">resetTestingInformation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putControlMappingSources` <a name="putControlMappingSources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.putControlMappingSources"></a>

```typescript
public putControlMappingSources(value: IResolvable | AuditmanagerControlControlMappingSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.putControlMappingSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]

---

##### `resetActionPlanInstructions` <a name="resetActionPlanInstructions" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanInstructions"></a>

```typescript
public resetActionPlanInstructions(): void
```

##### `resetActionPlanTitle` <a name="resetActionPlanTitle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanTitle"></a>

```typescript
public resetActionPlanTitle(): void
```

##### `resetControlMappingSources` <a name="resetControlMappingSources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetControlMappingSources"></a>

```typescript
public resetControlMappingSources(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTestingInformation` <a name="resetTestingInformation" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetTestingInformation"></a>

```typescript
public resetTestingInformation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isConstruct"></a>

```typescript
import { auditmanagerControl } from '@cdktf/provider-aws'

auditmanagerControl.AuditmanagerControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformElement"></a>

```typescript
import { auditmanagerControl } from '@cdktf/provider-aws'

auditmanagerControl.AuditmanagerControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformResource"></a>

```typescript
import { auditmanagerControl } from '@cdktf/provider-aws'

auditmanagerControl.AuditmanagerControl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSources">controlMappingSources</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList">AuditmanagerControlControlMappingSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructionsInput">actionPlanInstructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitleInput">actionPlanTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSourcesInput">controlMappingSourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformationInput">testingInformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructions">actionPlanInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitle">actionPlanTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformation">testingInformation</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `controlMappingSources`<sup>Required</sup> <a name="controlMappingSources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSources"></a>

```typescript
public readonly controlMappingSources: AuditmanagerControlControlMappingSourcesList;
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList">AuditmanagerControlControlMappingSourcesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `actionPlanInstructionsInput`<sup>Optional</sup> <a name="actionPlanInstructionsInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructionsInput"></a>

```typescript
public readonly actionPlanInstructionsInput: string;
```

- *Type:* string

---

##### `actionPlanTitleInput`<sup>Optional</sup> <a name="actionPlanTitleInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitleInput"></a>

```typescript
public readonly actionPlanTitleInput: string;
```

- *Type:* string

---

##### `controlMappingSourcesInput`<sup>Optional</sup> <a name="controlMappingSourcesInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSourcesInput"></a>

```typescript
public readonly controlMappingSourcesInput: IResolvable | AuditmanagerControlControlMappingSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `testingInformationInput`<sup>Optional</sup> <a name="testingInformationInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformationInput"></a>

```typescript
public readonly testingInformationInput: string;
```

- *Type:* string

---

##### `actionPlanInstructions`<sup>Required</sup> <a name="actionPlanInstructions" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructions"></a>

```typescript
public readonly actionPlanInstructions: string;
```

- *Type:* string

---

##### `actionPlanTitle`<sup>Required</sup> <a name="actionPlanTitle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitle"></a>

```typescript
public readonly actionPlanTitle: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `testingInformation`<sup>Required</sup> <a name="testingInformation" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformation"></a>

```typescript
public readonly testingInformation: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerControlConfig <a name="AuditmanagerControlConfig" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.Initializer"></a>

```typescript
import { auditmanagerControl } from '@cdktf/provider-aws'

const auditmanagerControlConfig: auditmanagerControl.AuditmanagerControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#name AuditmanagerControl#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanInstructions">actionPlanInstructions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanTitle">actionPlanTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.controlMappingSources">controlMappingSources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]</code> | control_mapping_sources block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#description AuditmanagerControl#description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#tags AuditmanagerControl#tags}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.testingInformation">testingInformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#testing_information AuditmanagerControl#testing_information}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#name AuditmanagerControl#name}.

---

##### `actionPlanInstructions`<sup>Optional</sup> <a name="actionPlanInstructions" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanInstructions"></a>

```typescript
public readonly actionPlanInstructions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}.

---

##### `actionPlanTitle`<sup>Optional</sup> <a name="actionPlanTitle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanTitle"></a>

```typescript
public readonly actionPlanTitle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}.

---

##### `controlMappingSources`<sup>Optional</sup> <a name="controlMappingSources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.controlMappingSources"></a>

```typescript
public readonly controlMappingSources: IResolvable | AuditmanagerControlControlMappingSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]

control_mapping_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#control_mapping_sources AuditmanagerControl#control_mapping_sources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#description AuditmanagerControl#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#tags AuditmanagerControl#tags}.

---

##### `testingInformation`<sup>Optional</sup> <a name="testingInformation" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.testingInformation"></a>

```typescript
public readonly testingInformation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#testing_information AuditmanagerControl#testing_information}.

---

### AuditmanagerControlControlMappingSources <a name="AuditmanagerControlControlMappingSources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.Initializer"></a>

```typescript
import { auditmanagerControl } from '@cdktf/provider-aws'

const auditmanagerControlControlMappingSources: auditmanagerControl.AuditmanagerControlControlMappingSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceName">sourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_name AuditmanagerControl#source_name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceSetUpOption">sourceSetUpOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_set_up_option AuditmanagerControl#source_set_up_option}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_type AuditmanagerControl#source_type}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceDescription">sourceDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_description AuditmanagerControl#source_description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceFrequency">sourceFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_frequency AuditmanagerControl#source_frequency}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceKeyword">sourceKeyword</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]</code> | source_keyword block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.troubleshootingText">troubleshootingText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#troubleshooting_text AuditmanagerControl#troubleshooting_text}. |

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_name AuditmanagerControl#source_name}.

---

##### `sourceSetUpOption`<sup>Required</sup> <a name="sourceSetUpOption" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceSetUpOption"></a>

```typescript
public readonly sourceSetUpOption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_set_up_option AuditmanagerControl#source_set_up_option}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_type AuditmanagerControl#source_type}.

---

##### `sourceDescription`<sup>Optional</sup> <a name="sourceDescription" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceDescription"></a>

```typescript
public readonly sourceDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_description AuditmanagerControl#source_description}.

---

##### `sourceFrequency`<sup>Optional</sup> <a name="sourceFrequency" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceFrequency"></a>

```typescript
public readonly sourceFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_frequency AuditmanagerControl#source_frequency}.

---

##### `sourceKeyword`<sup>Optional</sup> <a name="sourceKeyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceKeyword"></a>

```typescript
public readonly sourceKeyword: IResolvable | AuditmanagerControlControlMappingSourcesSourceKeyword[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]

source_keyword block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_keyword AuditmanagerControl#source_keyword}

---

##### `troubleshootingText`<sup>Optional</sup> <a name="troubleshootingText" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.troubleshootingText"></a>

```typescript
public readonly troubleshootingText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#troubleshooting_text AuditmanagerControl#troubleshooting_text}.

---

### AuditmanagerControlControlMappingSourcesSourceKeyword <a name="AuditmanagerControlControlMappingSourcesSourceKeyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.Initializer"></a>

```typescript
import { auditmanagerControl } from '@cdktf/provider-aws'

const auditmanagerControlControlMappingSourcesSourceKeyword: auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordInputType">keywordInputType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#keyword_input_type AuditmanagerControl#keyword_input_type}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordValue">keywordValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#keyword_value AuditmanagerControl#keyword_value}. |

---

##### `keywordInputType`<sup>Required</sup> <a name="keywordInputType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordInputType"></a>

```typescript
public readonly keywordInputType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#keyword_input_type AuditmanagerControl#keyword_input_type}.

---

##### `keywordValue`<sup>Required</sup> <a name="keywordValue" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordValue"></a>

```typescript
public readonly keywordValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#keyword_value AuditmanagerControl#keyword_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerControlControlMappingSourcesList <a name="AuditmanagerControlControlMappingSourcesList" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer"></a>

```typescript
import { auditmanagerControl } from '@cdktf/provider-aws'

new auditmanagerControl.AuditmanagerControlControlMappingSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.get"></a>

```typescript
public get(index: number): AuditmanagerControlControlMappingSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerControlControlMappingSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>[]

---


### AuditmanagerControlControlMappingSourcesOutputReference <a name="AuditmanagerControlControlMappingSourcesOutputReference" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer"></a>

```typescript
import { auditmanagerControl } from '@cdktf/provider-aws'

new auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword">putSourceKeyword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceDescription">resetSourceDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceFrequency">resetSourceFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword">resetSourceKeyword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetTroubleshootingText">resetTroubleshootingText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceKeyword` <a name="putSourceKeyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword"></a>

```typescript
public putSourceKeyword(value: IResolvable | AuditmanagerControlControlMappingSourcesSourceKeyword[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]

---

##### `resetSourceDescription` <a name="resetSourceDescription" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceDescription"></a>

```typescript
public resetSourceDescription(): void
```

##### `resetSourceFrequency` <a name="resetSourceFrequency" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceFrequency"></a>

```typescript
public resetSourceFrequency(): void
```

##### `resetSourceKeyword` <a name="resetSourceKeyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword"></a>

```typescript
public resetSourceKeyword(): void
```

##### `resetTroubleshootingText` <a name="resetTroubleshootingText" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetTroubleshootingText"></a>

```typescript
public resetTroubleshootingText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword">sourceKeyword</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList">AuditmanagerControlControlMappingSourcesSourceKeywordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescriptionInput">sourceDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequencyInput">sourceFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput">sourceKeywordInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOptionInput">sourceSetUpOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingTextInput">troubleshootingTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription">sourceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency">sourceFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption">sourceSetUpOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText">troubleshootingText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `sourceKeyword`<sup>Required</sup> <a name="sourceKeyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword"></a>

```typescript
public readonly sourceKeyword: AuditmanagerControlControlMappingSourcesSourceKeywordList;
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList">AuditmanagerControlControlMappingSourcesSourceKeywordList</a>

---

##### `sourceDescriptionInput`<sup>Optional</sup> <a name="sourceDescriptionInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescriptionInput"></a>

```typescript
public readonly sourceDescriptionInput: string;
```

- *Type:* string

---

##### `sourceFrequencyInput`<sup>Optional</sup> <a name="sourceFrequencyInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequencyInput"></a>

```typescript
public readonly sourceFrequencyInput: string;
```

- *Type:* string

---

##### `sourceKeywordInput`<sup>Optional</sup> <a name="sourceKeywordInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput"></a>

```typescript
public readonly sourceKeywordInput: IResolvable | AuditmanagerControlControlMappingSourcesSourceKeyword[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceNameInput"></a>

```typescript
public readonly sourceNameInput: string;
```

- *Type:* string

---

##### `sourceSetUpOptionInput`<sup>Optional</sup> <a name="sourceSetUpOptionInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOptionInput"></a>

```typescript
public readonly sourceSetUpOptionInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `troubleshootingTextInput`<sup>Optional</sup> <a name="troubleshootingTextInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingTextInput"></a>

```typescript
public readonly troubleshootingTextInput: string;
```

- *Type:* string

---

##### `sourceDescription`<sup>Required</sup> <a name="sourceDescription" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription"></a>

```typescript
public readonly sourceDescription: string;
```

- *Type:* string

---

##### `sourceFrequency`<sup>Required</sup> <a name="sourceFrequency" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency"></a>

```typescript
public readonly sourceFrequency: string;
```

- *Type:* string

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `sourceSetUpOption`<sup>Required</sup> <a name="sourceSetUpOption" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption"></a>

```typescript
public readonly sourceSetUpOption: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `troubleshootingText`<sup>Required</sup> <a name="troubleshootingText" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText"></a>

```typescript
public readonly troubleshootingText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AuditmanagerControlControlMappingSources | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a> | cdktf.IResolvable

---


### AuditmanagerControlControlMappingSourcesSourceKeywordList <a name="AuditmanagerControlControlMappingSourcesSourceKeywordList" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer"></a>

```typescript
import { auditmanagerControl } from '@cdktf/provider-aws'

new auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.get"></a>

```typescript
public get(index: number): AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerControlControlMappingSourcesSourceKeyword[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>[]

---


### AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference <a name="AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer"></a>

```typescript
import { auditmanagerControl } from '@cdktf/provider-aws'

new auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputTypeInput">keywordInputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValueInput">keywordValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType">keywordInputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue">keywordValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keywordInputTypeInput`<sup>Optional</sup> <a name="keywordInputTypeInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputTypeInput"></a>

```typescript
public readonly keywordInputTypeInput: string;
```

- *Type:* string

---

##### `keywordValueInput`<sup>Optional</sup> <a name="keywordValueInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValueInput"></a>

```typescript
public readonly keywordValueInput: string;
```

- *Type:* string

---

##### `keywordInputType`<sup>Required</sup> <a name="keywordInputType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType"></a>

```typescript
public readonly keywordInputType: string;
```

- *Type:* string

---

##### `keywordValue`<sup>Required</sup> <a name="keywordValue" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue"></a>

```typescript
public readonly keywordValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AuditmanagerControlControlMappingSourcesSourceKeyword | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a> | cdktf.IResolvable

---




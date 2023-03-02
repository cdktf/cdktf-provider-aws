# `auditmanagerAssessmentDelegation` Submodule <a name="`auditmanagerAssessmentDelegation` Submodule" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentDelegation <a name="AuditmanagerAssessmentDelegation" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation aws_auditmanager_assessment_delegation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer"></a>

```typescript
import { auditmanagerAssessmentDelegation } from '@cdktf/provider-aws'

new auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation(scope: Construct, id: string, config: AuditmanagerAssessmentDelegationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig">AuditmanagerAssessmentDelegationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig">AuditmanagerAssessmentDelegationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetComment">resetComment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetComment"></a>

```typescript
public resetComment(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct"></a>

```typescript
import { auditmanagerAssessmentDelegation } from '@cdktf/provider-aws'

auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement"></a>

```typescript
import { auditmanagerAssessmentDelegation } from '@cdktf/provider-aws'

auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource"></a>

```typescript
import { auditmanagerAssessmentDelegation } from '@cdktf/provider-aws'

auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.delegationId">delegationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentIdInput">assessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetIdInput">controlSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleTypeInput">roleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentId">assessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetId">controlSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleType">roleType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `delegationId`<sup>Required</sup> <a name="delegationId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.delegationId"></a>

```typescript
public readonly delegationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `assessmentIdInput`<sup>Optional</sup> <a name="assessmentIdInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentIdInput"></a>

```typescript
public readonly assessmentIdInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `controlSetIdInput`<sup>Optional</sup> <a name="controlSetIdInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetIdInput"></a>

```typescript
public readonly controlSetIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleTypeInput`<sup>Optional</sup> <a name="roleTypeInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleTypeInput"></a>

```typescript
public readonly roleTypeInput: string;
```

- *Type:* string

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentId"></a>

```typescript
public readonly assessmentId: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `controlSetId`<sup>Required</sup> <a name="controlSetId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetId"></a>

```typescript
public readonly controlSetId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleType"></a>

```typescript
public readonly roleType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentDelegationConfig <a name="AuditmanagerAssessmentDelegationConfig" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.Initializer"></a>

```typescript
import { auditmanagerAssessmentDelegation } from '@cdktf/provider-aws'

const auditmanagerAssessmentDelegationConfig: auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.assessmentId">assessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.controlSetId">controlSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleType">roleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.assessmentId"></a>

```typescript
public readonly assessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}.

---

##### `controlSetId`<sup>Required</sup> <a name="controlSetId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.controlSetId"></a>

```typescript
public readonly controlSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}.

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleType"></a>

```typescript
public readonly roleType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}.

---




# `sesReceiptRule` Submodule <a name="`sesReceiptRule` Submodule" id="@cdktf/provider-aws.sesReceiptRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesReceiptRule <a name="SesReceiptRule" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule aws_ses_receipt_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRule(scope: Construct, id: string, config: SesReceiptRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig">SesReceiptRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig">SesReceiptRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction">putAddHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction">putBounceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction">putLambdaAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action">putS3Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction">putSnsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction">putStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction">putWorkmailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAddHeaderAction">resetAddHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAfter">resetAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetBounceAction">resetBounceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetLambdaAction">resetLambdaAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetRecipients">resetRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetS3Action">resetS3Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetScanEnabled">resetScanEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetSnsAction">resetSnsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetStopAction">resetStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetTlsPolicy">resetTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetWorkmailAction">resetWorkmailAction</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAddHeaderAction` <a name="putAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction"></a>

```typescript
public putAddHeaderAction(value: IResolvable | SesReceiptRuleAddHeaderAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putAddHeaderAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>[]

---

##### `putBounceAction` <a name="putBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction"></a>

```typescript
public putBounceAction(value: IResolvable | SesReceiptRuleBounceAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putBounceAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>[]

---

##### `putLambdaAction` <a name="putLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction"></a>

```typescript
public putLambdaAction(value: IResolvable | SesReceiptRuleLambdaAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putLambdaAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>[]

---

##### `putS3Action` <a name="putS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action"></a>

```typescript
public putS3Action(value: IResolvable | SesReceiptRuleS3Action[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putS3Action.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>[]

---

##### `putSnsAction` <a name="putSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction"></a>

```typescript
public putSnsAction(value: IResolvable | SesReceiptRuleSnsAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putSnsAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>[]

---

##### `putStopAction` <a name="putStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction"></a>

```typescript
public putStopAction(value: IResolvable | SesReceiptRuleStopAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putStopAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>[]

---

##### `putWorkmailAction` <a name="putWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction"></a>

```typescript
public putWorkmailAction(value: IResolvable | SesReceiptRuleWorkmailAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.putWorkmailAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>[]

---

##### `resetAddHeaderAction` <a name="resetAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAddHeaderAction"></a>

```typescript
public resetAddHeaderAction(): void
```

##### `resetAfter` <a name="resetAfter" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetAfter"></a>

```typescript
public resetAfter(): void
```

##### `resetBounceAction` <a name="resetBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetBounceAction"></a>

```typescript
public resetBounceAction(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLambdaAction` <a name="resetLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetLambdaAction"></a>

```typescript
public resetLambdaAction(): void
```

##### `resetRecipients` <a name="resetRecipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetRecipients"></a>

```typescript
public resetRecipients(): void
```

##### `resetS3Action` <a name="resetS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetS3Action"></a>

```typescript
public resetS3Action(): void
```

##### `resetScanEnabled` <a name="resetScanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetScanEnabled"></a>

```typescript
public resetScanEnabled(): void
```

##### `resetSnsAction` <a name="resetSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetSnsAction"></a>

```typescript
public resetSnsAction(): void
```

##### `resetStopAction` <a name="resetStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetStopAction"></a>

```typescript
public resetStopAction(): void
```

##### `resetTlsPolicy` <a name="resetTlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetTlsPolicy"></a>

```typescript
public resetTlsPolicy(): void
```

##### `resetWorkmailAction` <a name="resetWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.resetWorkmailAction"></a>

```typescript
public resetWorkmailAction(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

sesReceiptRule.SesReceiptRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

sesReceiptRule.SesReceiptRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

sesReceiptRule.SesReceiptRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderAction">addHeaderAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList">SesReceiptRuleAddHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceAction">bounceAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList">SesReceiptRuleBounceActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaAction">lambdaAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList">SesReceiptRuleLambdaActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3Action">s3Action</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList">SesReceiptRuleS3ActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsAction">snsAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList">SesReceiptRuleSnsActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopAction">stopAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList">SesReceiptRuleStopActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailAction">workmailAction</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList">SesReceiptRuleWorkmailActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderActionInput">addHeaderActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.afterInput">afterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceActionInput">bounceActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaActionInput">lambdaActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipientsInput">recipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetNameInput">ruleSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3ActionInput">s3ActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabledInput">scanEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsActionInput">snsActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopActionInput">stopActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicyInput">tlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailActionInput">workmailActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.after">after</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipients">recipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetName">ruleSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabled">scanEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicy">tlsPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addHeaderAction`<sup>Required</sup> <a name="addHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderAction"></a>

```typescript
public readonly addHeaderAction: SesReceiptRuleAddHeaderActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList">SesReceiptRuleAddHeaderActionList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `bounceAction`<sup>Required</sup> <a name="bounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceAction"></a>

```typescript
public readonly bounceAction: SesReceiptRuleBounceActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList">SesReceiptRuleBounceActionList</a>

---

##### `lambdaAction`<sup>Required</sup> <a name="lambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaAction"></a>

```typescript
public readonly lambdaAction: SesReceiptRuleLambdaActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList">SesReceiptRuleLambdaActionList</a>

---

##### `s3Action`<sup>Required</sup> <a name="s3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3Action"></a>

```typescript
public readonly s3Action: SesReceiptRuleS3ActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList">SesReceiptRuleS3ActionList</a>

---

##### `snsAction`<sup>Required</sup> <a name="snsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsAction"></a>

```typescript
public readonly snsAction: SesReceiptRuleSnsActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList">SesReceiptRuleSnsActionList</a>

---

##### `stopAction`<sup>Required</sup> <a name="stopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopAction"></a>

```typescript
public readonly stopAction: SesReceiptRuleStopActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList">SesReceiptRuleStopActionList</a>

---

##### `workmailAction`<sup>Required</sup> <a name="workmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailAction"></a>

```typescript
public readonly workmailAction: SesReceiptRuleWorkmailActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList">SesReceiptRuleWorkmailActionList</a>

---

##### `addHeaderActionInput`<sup>Optional</sup> <a name="addHeaderActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.addHeaderActionInput"></a>

```typescript
public readonly addHeaderActionInput: IResolvable | SesReceiptRuleAddHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>[]

---

##### `afterInput`<sup>Optional</sup> <a name="afterInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.afterInput"></a>

```typescript
public readonly afterInput: string;
```

- *Type:* string

---

##### `bounceActionInput`<sup>Optional</sup> <a name="bounceActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.bounceActionInput"></a>

```typescript
public readonly bounceActionInput: IResolvable | SesReceiptRuleBounceAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lambdaActionInput`<sup>Optional</sup> <a name="lambdaActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.lambdaActionInput"></a>

```typescript
public readonly lambdaActionInput: IResolvable | SesReceiptRuleLambdaAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipientsInput"></a>

```typescript
public readonly recipientsInput: string[];
```

- *Type:* string[]

---

##### `ruleSetNameInput`<sup>Optional</sup> <a name="ruleSetNameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetNameInput"></a>

```typescript
public readonly ruleSetNameInput: string;
```

- *Type:* string

---

##### `s3ActionInput`<sup>Optional</sup> <a name="s3ActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.s3ActionInput"></a>

```typescript
public readonly s3ActionInput: IResolvable | SesReceiptRuleS3Action[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>[]

---

##### `scanEnabledInput`<sup>Optional</sup> <a name="scanEnabledInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabledInput"></a>

```typescript
public readonly scanEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snsActionInput`<sup>Optional</sup> <a name="snsActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.snsActionInput"></a>

```typescript
public readonly snsActionInput: IResolvable | SesReceiptRuleSnsAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>[]

---

##### `stopActionInput`<sup>Optional</sup> <a name="stopActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.stopActionInput"></a>

```typescript
public readonly stopActionInput: IResolvable | SesReceiptRuleStopAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>[]

---

##### `tlsPolicyInput`<sup>Optional</sup> <a name="tlsPolicyInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicyInput"></a>

```typescript
public readonly tlsPolicyInput: string;
```

- *Type:* string

---

##### `workmailActionInput`<sup>Optional</sup> <a name="workmailActionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.workmailActionInput"></a>

```typescript
public readonly workmailActionInput: IResolvable | SesReceiptRuleWorkmailAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>[]

---

##### `after`<sup>Required</sup> <a name="after" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.after"></a>

```typescript
public readonly after: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.ruleSetName"></a>

```typescript
public readonly ruleSetName: string;
```

- *Type:* string

---

##### `scanEnabled`<sup>Required</sup> <a name="scanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.scanEnabled"></a>

```typescript
public readonly scanEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsPolicy`<sup>Required</sup> <a name="tlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tlsPolicy"></a>

```typescript
public readonly tlsPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesReceiptRuleAddHeaderAction <a name="SesReceiptRuleAddHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

const sesReceiptRuleAddHeaderAction: sesReceiptRule.SesReceiptRuleAddHeaderAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerName">headerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_name SesReceiptRule#header_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerValue">headerValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_value SesReceiptRule#header_value}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_name SesReceiptRule#header_name}.

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#header_value SesReceiptRule#header_value}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

### SesReceiptRuleBounceAction <a name="SesReceiptRuleBounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

const sesReceiptRuleBounceAction: sesReceiptRule.SesReceiptRuleBounceAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#message SesReceiptRule#message}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.sender">sender</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sender SesReceiptRule#sender}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.smtpReplyCode">smtpReplyCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#smtp_reply_code SesReceiptRule#smtp_reply_code}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#status_code SesReceiptRule#status_code}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#message SesReceiptRule#message}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `sender`<sup>Required</sup> <a name="sender" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.sender"></a>

```typescript
public readonly sender: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sender SesReceiptRule#sender}.

---

##### `smtpReplyCode`<sup>Required</sup> <a name="smtpReplyCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.smtpReplyCode"></a>

```typescript
public readonly smtpReplyCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#smtp_reply_code SesReceiptRule#smtp_reply_code}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#status_code SesReceiptRule#status_code}.

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleConfig <a name="SesReceiptRuleConfig" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

const sesReceiptRuleConfig: sesReceiptRule.SesReceiptRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.ruleSetName">ruleSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.addHeaderAction">addHeaderAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>[]</code> | add_header_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.after">after</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.bounceAction">bounceAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>[]</code> | bounce_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lambdaAction">lambdaAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>[]</code> | lambda_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.recipients">recipients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.s3Action">s3Action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>[]</code> | s3_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.scanEnabled">scanEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.snsAction">snsAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>[]</code> | sns_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.stopAction">stopAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>[]</code> | stop_action block. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.tlsPolicy">tlsPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.workmailAction">workmailAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>[]</code> | workmail_action block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#name SesReceiptRule#name}.

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.ruleSetName"></a>

```typescript
public readonly ruleSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}.

---

##### `addHeaderAction`<sup>Optional</sup> <a name="addHeaderAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.addHeaderAction"></a>

```typescript
public readonly addHeaderAction: IResolvable | SesReceiptRuleAddHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>[]

add_header_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#add_header_action SesReceiptRule#add_header_action}

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.after"></a>

```typescript
public readonly after: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#after SesReceiptRule#after}.

---

##### `bounceAction`<sup>Optional</sup> <a name="bounceAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.bounceAction"></a>

```typescript
public readonly bounceAction: IResolvable | SesReceiptRuleBounceAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>[]

bounce_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bounce_action SesReceiptRule#bounce_action}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#enabled SesReceiptRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#id SesReceiptRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaAction`<sup>Optional</sup> <a name="lambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.lambdaAction"></a>

```typescript
public readonly lambdaAction: IResolvable | SesReceiptRuleLambdaAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>[]

lambda_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#lambda_action SesReceiptRule#lambda_action}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#recipients SesReceiptRule#recipients}.

---

##### `s3Action`<sup>Optional</sup> <a name="s3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.s3Action"></a>

```typescript
public readonly s3Action: IResolvable | SesReceiptRuleS3Action[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>[]

s3_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#s3_action SesReceiptRule#s3_action}

---

##### `scanEnabled`<sup>Optional</sup> <a name="scanEnabled" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.scanEnabled"></a>

```typescript
public readonly scanEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}.

---

##### `snsAction`<sup>Optional</sup> <a name="snsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.snsAction"></a>

```typescript
public readonly snsAction: IResolvable | SesReceiptRuleSnsAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>[]

sns_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#sns_action SesReceiptRule#sns_action}

---

##### `stopAction`<sup>Optional</sup> <a name="stopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.stopAction"></a>

```typescript
public readonly stopAction: IResolvable | SesReceiptRuleStopAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>[]

stop_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#stop_action SesReceiptRule#stop_action}

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.tlsPolicy"></a>

```typescript
public readonly tlsPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}.

---

##### `workmailAction`<sup>Optional</sup> <a name="workmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleConfig.property.workmailAction"></a>

```typescript
public readonly workmailAction: IResolvable | SesReceiptRuleWorkmailAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>[]

workmail_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#workmail_action SesReceiptRule#workmail_action}

---

### SesReceiptRuleLambdaAction <a name="SesReceiptRuleLambdaAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

const sesReceiptRuleLambdaAction: sesReceiptRule.SesReceiptRuleLambdaAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.functionArn">functionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#function_arn SesReceiptRule#function_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.invocationType">invocationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#invocation_type SesReceiptRule#invocation_type}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#function_arn SesReceiptRule#function_arn}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `invocationType`<sup>Optional</sup> <a name="invocationType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.invocationType"></a>

```typescript
public readonly invocationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#invocation_type SesReceiptRule#invocation_type}.

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleS3Action <a name="SesReceiptRuleS3Action" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

const sesReceiptRuleS3Action: sesReceiptRule.SesReceiptRuleS3Action = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bucket_name SesReceiptRule#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#kms_key_arn SesReceiptRule#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.objectKeyPrefix">objectKeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#object_key_prefix SesReceiptRule#object_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#bucket_name SesReceiptRule#bucket_name}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#kms_key_arn SesReceiptRule#kms_key_arn}.

---

##### `objectKeyPrefix`<sup>Optional</sup> <a name="objectKeyPrefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.objectKeyPrefix"></a>

```typescript
public readonly objectKeyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#object_key_prefix SesReceiptRule#object_key_prefix}.

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleSnsAction <a name="SesReceiptRuleSnsAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

const sesReceiptRuleSnsAction: sesReceiptRule.SesReceiptRuleSnsAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#encoding SesReceiptRule#encoding}. |

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#encoding SesReceiptRule#encoding}.

---

### SesReceiptRuleStopAction <a name="SesReceiptRuleStopAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

const sesReceiptRuleStopAction: sesReceiptRule.SesReceiptRuleStopAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scope SesReceiptRule#scope}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#scope SesReceiptRule#scope}.

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

### SesReceiptRuleWorkmailAction <a name="SesReceiptRuleWorkmailAction" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

const sesReceiptRuleWorkmailAction: sesReceiptRule.SesReceiptRuleWorkmailAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.organizationArn">organizationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#organization_arn SesReceiptRule#organization_arn}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}. |

---

##### `organizationArn`<sup>Required</sup> <a name="organizationArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.organizationArn"></a>

```typescript
public readonly organizationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#organization_arn SesReceiptRule#organization_arn}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#position SesReceiptRule#position}.

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesReceiptRuleAddHeaderActionList <a name="SesReceiptRuleAddHeaderActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleAddHeaderActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get"></a>

```typescript
public get(index: number): SesReceiptRuleAddHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesReceiptRuleAddHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a>[]

---


### SesReceiptRuleAddHeaderActionOutputReference <a name="SesReceiptRuleAddHeaderActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValueInput"></a>

```typescript
public readonly headerValueInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SesReceiptRuleAddHeaderAction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleAddHeaderAction">SesReceiptRuleAddHeaderAction</a> | cdktf.IResolvable

---


### SesReceiptRuleBounceActionList <a name="SesReceiptRuleBounceActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleBounceActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get"></a>

```typescript
public get(index: number): SesReceiptRuleBounceActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesReceiptRuleBounceAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a>[]

---


### SesReceiptRuleBounceActionOutputReference <a name="SesReceiptRuleBounceActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleBounceActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.resetTopicArn"></a>

```typescript
public resetTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.senderInput">senderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCodeInput">smtpReplyCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.sender">sender</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCode">smtpReplyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `senderInput`<sup>Optional</sup> <a name="senderInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.senderInput"></a>

```typescript
public readonly senderInput: string;
```

- *Type:* string

---

##### `smtpReplyCodeInput`<sup>Optional</sup> <a name="smtpReplyCodeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCodeInput"></a>

```typescript
public readonly smtpReplyCodeInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `sender`<sup>Required</sup> <a name="sender" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.sender"></a>

```typescript
public readonly sender: string;
```

- *Type:* string

---

##### `smtpReplyCode`<sup>Required</sup> <a name="smtpReplyCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.smtpReplyCode"></a>

```typescript
public readonly smtpReplyCode: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SesReceiptRuleBounceAction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleBounceAction">SesReceiptRuleBounceAction</a> | cdktf.IResolvable

---


### SesReceiptRuleLambdaActionList <a name="SesReceiptRuleLambdaActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleLambdaActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get"></a>

```typescript
public get(index: number): SesReceiptRuleLambdaActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesReceiptRuleLambdaAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a>[]

---


### SesReceiptRuleLambdaActionOutputReference <a name="SesReceiptRuleLambdaActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleLambdaActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetInvocationType">resetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInvocationType` <a name="resetInvocationType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetInvocationType"></a>

```typescript
public resetInvocationType(): void
```

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.resetTopicArn"></a>

```typescript
public resetTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArnInput">functionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationTypeInput">invocationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationType">invocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionArnInput`<sup>Optional</sup> <a name="functionArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArnInput"></a>

```typescript
public readonly functionArnInput: string;
```

- *Type:* string

---

##### `invocationTypeInput`<sup>Optional</sup> <a name="invocationTypeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationTypeInput"></a>

```typescript
public readonly invocationTypeInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `invocationType`<sup>Required</sup> <a name="invocationType" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.invocationType"></a>

```typescript
public readonly invocationType: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SesReceiptRuleLambdaAction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleLambdaAction">SesReceiptRuleLambdaAction</a> | cdktf.IResolvable

---


### SesReceiptRuleS3ActionList <a name="SesReceiptRuleS3ActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleS3ActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get"></a>

```typescript
public get(index: number): SesReceiptRuleS3ActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesReceiptRuleS3Action[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a>[]

---


### SesReceiptRuleS3ActionOutputReference <a name="SesReceiptRuleS3ActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleS3ActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetObjectKeyPrefix">resetObjectKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetObjectKeyPrefix` <a name="resetObjectKeyPrefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetObjectKeyPrefix"></a>

```typescript
public resetObjectKeyPrefix(): void
```

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.resetTopicArn"></a>

```typescript
public resetTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefixInput">objectKeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefix">objectKeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `objectKeyPrefixInput`<sup>Optional</sup> <a name="objectKeyPrefixInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefixInput"></a>

```typescript
public readonly objectKeyPrefixInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `objectKeyPrefix`<sup>Required</sup> <a name="objectKeyPrefix" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.objectKeyPrefix"></a>

```typescript
public readonly objectKeyPrefix: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3ActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SesReceiptRuleS3Action | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleS3Action">SesReceiptRuleS3Action</a> | cdktf.IResolvable

---


### SesReceiptRuleSnsActionList <a name="SesReceiptRuleSnsActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleSnsActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get"></a>

```typescript
public get(index: number): SesReceiptRuleSnsActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesReceiptRuleSnsAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a>[]

---


### SesReceiptRuleSnsActionOutputReference <a name="SesReceiptRuleSnsActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleSnsActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SesReceiptRuleSnsAction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleSnsAction">SesReceiptRuleSnsAction</a> | cdktf.IResolvable

---


### SesReceiptRuleStopActionList <a name="SesReceiptRuleStopActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleStopActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get"></a>

```typescript
public get(index: number): SesReceiptRuleStopActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesReceiptRuleStopAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a>[]

---


### SesReceiptRuleStopActionOutputReference <a name="SesReceiptRuleStopActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleStopActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.resetTopicArn"></a>

```typescript
public resetTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SesReceiptRuleStopAction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleStopAction">SesReceiptRuleStopAction</a> | cdktf.IResolvable

---


### SesReceiptRuleWorkmailActionList <a name="SesReceiptRuleWorkmailActionList" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleWorkmailActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get"></a>

```typescript
public get(index: number): SesReceiptRuleWorkmailActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesReceiptRuleWorkmailAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a>[]

---


### SesReceiptRuleWorkmailActionOutputReference <a name="SesReceiptRuleWorkmailActionOutputReference" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer"></a>

```typescript
import { sesReceiptRule } from '@cdktf/provider-aws'

new sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.resetTopicArn"></a>

```typescript
public resetTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArnInput">organizationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArn">organizationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `organizationArnInput`<sup>Optional</sup> <a name="organizationArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArnInput"></a>

```typescript
public readonly organizationArnInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `organizationArn`<sup>Required</sup> <a name="organizationArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.organizationArn"></a>

```typescript
public readonly organizationArn: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SesReceiptRuleWorkmailAction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.sesReceiptRule.SesReceiptRuleWorkmailAction">SesReceiptRuleWorkmailAction</a> | cdktf.IResolvable

---



